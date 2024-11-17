import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common'
import { ProductsService } from './products.service'
import { Product } from './Products.entity'
import { Roles } from '../roles/roles.decorator'
import { Role } from '../enums/role.enum'
import { AuthGuard } from '@nestjs/passport'
import { RolesGuard } from 'src/roles/roles.guard'

@Controller('products')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productService.findAll()
  }

  @Get('/:id')
  getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id)
  }

  @Post()
  @Roles(Role.Admin)
  addProducts(@Body() input: Product): Promise<Product> {
    return this.productService.create(input)
  }

  @Patch('/:id')
  @Roles(Role.Admin)
  updateProducts(
    @Param('id') id: string,
    @Body() input: Product,
  ): Promise<Product> {
    return this.productService.update(id, input)
  }

  @Delete('/:id')
  deleteProducts(@Param('id') id: string): Promise<string> {
    return this.productService.remove(id)
  }
}
