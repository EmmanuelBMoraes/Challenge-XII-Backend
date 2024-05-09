export class DriversDto {
  readonly id?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly country: string;
  readonly city: string;
  readonly referalCode?: string;
  readonly ownCar: boolean;
  readonly carType: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
