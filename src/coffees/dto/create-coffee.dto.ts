import { IsString } from 'class-validator'

/* eslint-disable @typescript-eslint/no-unsafe-call */
export class CreateCoffeeDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly brand: string

  @IsString({ each: true })
  readonly flavors: Array<string>
}
/* eslint-enable @typescript-eslint/no-unsafe-call */
