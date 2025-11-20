import { Injectable, NotFoundException } from '@nestjs/common'
import { Coffee } from './entities/coffee.entity'

@Injectable()
export class CoffeesService {
  private coffees: Array<Coffee> = [
    {
      id: 1,
      name: 'Coffee 1',
      brand: 'Brand 1',
      flavors: ['flavor 1', 'flavor 2'],
    },
    {
      id: 2,
      name: 'Coffee 2',
      brand: 'Brand 2',
      flavors: ['flavor 3', 'flavor 4'],
    },
    {
      id: 3,
      name: 'Coffee 3',
      brand: 'Brand 3',
      flavors: ['flavor 5', 'flavor 6'],
    },
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    const coffee = this.coffees.find((coffee) => coffee.id === Number(id))

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }

    return coffee
  }

  create(createCoffeeDto: any) {
    return this.coffees.push(createCoffeeDto)
  }

  update(id: string, updateCoffeeDto: any) {
    const coffee = this.findOne(id)
    if (coffee) {
      coffee.name = updateCoffeeDto.name
      coffee.brand = updateCoffeeDto.brand
      coffee.flavors = updateCoffeeDto.flavors
    }
    return coffee
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(
      (coffee) => coffee.id === Number(id),
    )
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1)
    }
    // return this.coffees
  }
}
