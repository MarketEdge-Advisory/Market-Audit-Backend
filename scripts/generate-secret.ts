/**
 * Run once with: npx ts-node scripts/generate-secret.ts
 * Appends JWT_SECRET to your .env file if it doesn't already exist
 */

import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
const secret = crypto.randomBytes(32).toString('hex');

// Read existing .env
let existing = '';
if (fs.existsSync(envPath)) {
  existing = fs.readFileSync(envPath, 'utf-8');
}

// Don't overwrite if already set with a real value
const match = existing.match(/JWT_SECRET="?([^"\n]*)"?/);
const currentValue = match?.[1]?.trim() ?? '';

if (currentValue.length > 0) {
  console.log('JWT_SECRET already set in .env — no changes made.');
  process.exit(0);
}

// Replace empty JWT_SECRET="" or append if missing entirely
if (existing.includes('JWT_SECRET=')) {
  // Replace the empty value with the generated secret
  const updated = existing.replace(
    /JWT_SECRET="?[^"\n]*"?/,
    `JWT_SECRET="${secret}"`,
  );
  fs.writeFileSync(envPath, updated);
} else {
  // Append if the key doesn't exist at all
  fs.appendFileSync(envPath, `\nJWT_SECRET="${secret}"\n`);
}

console.log('JWT_SECRET generated and saved to .env:');
console.log(secret);
