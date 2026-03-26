import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(email: string, password: string): Promise<{ access_token: string }> {
    const admin = await this.prisma.adminUser.findUnique({
      where: { email },
      select: {
        id:             true,
        email:          true,
        hashedPassword: true,
        isActive:       true,
      },
    });

    if (!admin) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (!admin.isActive) {
      throw new UnauthorizedException('Account is deactivated');
    }

    const isPasswordValid = await bcrypt.compare(password, admin.hashedPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    await this.prisma.adminUser.update({
      where: { id: admin.id },
      data:  { lastLoginAt: new Date() },
    });

    const payload = {
      sub:   admin.id,
      email: admin.email,
    };

    return { access_token: this.jwtService.sign(payload) };
  }

  async changePassword(adminId: string, dto: ChangePasswordDto): Promise<{ message: string }> {
    const admin = await this.prisma.adminUser.findUnique({
      where:  { id: adminId },
      select: { id: true, hashedPassword: true },
    });

    if (!admin) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(dto.currentPassword, admin.hashedPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedPassword = await bcrypt.hash(dto.newPassword, 12);

    await this.prisma.adminUser.update({
      where: { id: adminId },
      data:  { hashedPassword },
    });

    return { message: 'Password updated successfully' };
  }
}