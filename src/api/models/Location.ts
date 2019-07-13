
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import { Lock } from './Lock';

@Entity()
export class Location {

    @PrimaryColumn('uuid')
    public Id: string;

    @Column()
    public Name: string;

    @Column()
    public Lat: string;

    @Column()
    public Lng: string;

    @OneToMany(type => Lock, lock => lock.Location)
    public locks: Lock[];

    public toString(): string {
        return `${this.Id} ${this.Name} (${this.Lat}) (${this.Lng})`;
    }
}
