import {
  IsAlpha,
  IsNotEmpty,
  IsString,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class DriversDtoDomain {
  readonly id?: string;

  @IsString({ message: 'firstName must be a string' })
  @IsNotEmpty({ message: 'firstName must not be empty' })
  @IsAlpha()
  readonly firstName: string;

  @IsString({ message: 'lastName must be a string' })
  @IsNotEmpty({ message: 'lastName must not be empty' })
  @IsAlpha()
  readonly lastName: string;

  @IsString({ message: 'email should be a string' })
  @IsNotEmpty({ message: 'email must not be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsString({ message: 'country should be a string' })
  @IsNotEmpty({ message: 'country must not be empty' })
  readonly country: string;

  @IsString({ message: 'city should be a string' })
  @IsNotEmpty({ message: 'city must not be empty' })
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
