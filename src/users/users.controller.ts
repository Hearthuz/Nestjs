import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
  Patch,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { RegisterDTO } from './dto/register.dto'
import { AuthGuard } from '@nestjs/passport'

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    return this.userService.findByEmail(req.user.email)
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch('profile')
  async updateProfile(@Request() req, @Body() dto: RegisterDTO) {
    return this.userService.findByEmailAndUpdated(req.user.email, dto)
  }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    return this.userService.create(registerDTO)
  }
}
