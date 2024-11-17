import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schemas/users.schema'

import { RegisterDTO } from './dto/register.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(registerDTO: RegisterDTO): Promise<User> {
    const newUser = new this.userModel(registerDTO)
    return await newUser.save()
  }

  async findByEmail(email: string): Promise<UserDocument> {
    return await this.userModel.findOne({ email }).exec()
  }

  async findByEmailAndUpdated(
    email: string,
    dto: RegisterDTO,
  ): Promise<UserDocument> {
    return await this.userModel.findOneAndUpdate({ email }, dto).exec()
  }
}
