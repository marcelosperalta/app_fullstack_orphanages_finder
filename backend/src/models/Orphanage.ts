import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// this a JavaScript class, and because of that, 
// the types (number, string, etc.) are different from the types configured in the Database.
@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;
}