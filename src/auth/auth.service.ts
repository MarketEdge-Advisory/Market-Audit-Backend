import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD ?? 'changeme';

    // Only allow agency@marketedgeadvisory.com accounts
    if (!email.endsWith('agency@marketedgeadvisory.com')) {
      throw new UnauthorizedException(
        'Only agency@marketedgeadvisory.com accounts are allowed',
      );
    }

    if (email !== adminEmail || password !== adminPassword) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: email, email };
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }
}
