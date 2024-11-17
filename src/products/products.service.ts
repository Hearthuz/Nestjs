import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './Products.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find()
  }

  findOne(id: string): Promise<Product | null> {
    return this.productsRepository.findOneBy({ id })
  }

  create(input: Product): Promise<Product | null> {
    return this.productsRepository.save(input)
  }

  async update(id: string, input: Product): Promise<Product | null> {
    const Product = await this.productsRepository.findOneOrFail({
      where: { id },
    })
    return this.productsRepository.save({ ...Product, ...input })
  }

  async remove(id: string): Promise<string> {
    const result = await this.productsRepository.delete(id)
    if (result.affected === 0) throw new NotFoundException('id not found.')
    return 'successfully deleted'
  }
}
