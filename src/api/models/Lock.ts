
import { Column, Entity,  PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Location } from './Location';

@Entity()
export class Lock {

    @PrimaryColumn('uuid')
    public Id: string;

    @Column()
    public Name: string;

    @Column()
    public Code: string;

    @Column()
    public LocationId: string;

    @ManyToOne(type => Location, location => location.locks)
    @JoinColumn({ name: 'LocationId' })
    public Location: Location;

    public toString(): string {
        return `${this.Name} ${this.Code} (${this.Id})`;
    }

}
