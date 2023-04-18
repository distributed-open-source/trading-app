import {Injectable} from '@nestjs/common';
import {PrismaService} from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup() {
    return {message: 'signup was successful'};
  }

  async signin() {
    return 'signin in route';
  }

  async signout() {
    return 'signout route';
  }
}
