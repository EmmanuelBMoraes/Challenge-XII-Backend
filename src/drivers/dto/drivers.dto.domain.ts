import {
  IsAlpha,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class DriversDtoDomain {
  readonly id?: string;

  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty({ message: 'First name must not be empty' })
  @IsAlpha()
  readonly firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name must not be empty' })
  @IsAlpha()
  readonly lastName: string;

  @IsString({ message: 'Email should be a string' })
  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsString({ message: 'Country should be a string' })
  @IsNotEmpty({ message: 'Country must not be empty' })
  readonly country: string;

  @IsString({ message: 'City should be a string' })
  @IsNotEmpty({ message: 'City must not be empty' })
  readonly city: string;

  //yet to finish
  readonly referalCode?: string;

  @IsBoolean({ message: 'ownCar must be a boolean' })
  @IsNotEmpty({ message: 'ownCar must not be empty' })
  readonly ownCar: boolean;

  @IsString({ message: 'carType should be a string' })
  @IsNotEmpty({ message: 'carType must not be empty' })
  readonly carType: string;

  readonly createdAt?: string;
  readonly updatedAt?: string;
}
