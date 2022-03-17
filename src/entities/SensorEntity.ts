import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class SensorEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  data!: string;

  @CreateDateColumn()
  createDateColumn!: Date;

  @UpdateDateColumn()
  updateDateColumn!: Date;
}
