import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'drivers' })
export class Drivers {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name', nullable: false })
  firstName: string;

  @Column({ name: 'last_name', nullable: false })
  lastName: string;

  @Column({ name: 'email', nullable: false, unique: true })
  email: string;

  @Column({ name: 'country', nullable: false })
  country: string;

  @Column({ name: 'city', nullable: false })
  city: string;

  @Column({ name: 'referal_code', nullable: true })
  referalCode: string;

  @Column({ name: 'own_car', nullable: false })
  ownCar: boolean;

  @Column({ name: 'car_type', nullable: false })
  carType: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
}
