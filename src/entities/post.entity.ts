import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'posts' })
export class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', nullable: false })
  title: string;

  @Column({ name: 'image_url', nullable: false })
  imageUrl: string;

  @Column({ name: 'description', nullable: false })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
