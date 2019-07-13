import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Location } from '../models/Location';
import { LocationRepository } from '../repositories/LocationRepository';

@Service()
export class LocationService {

    constructor(
        @OrmRepository() private locationRepository: LocationRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Location[]> {
        this.log.info('Find all Locations');
        return this.locationRepository.find({ relations: [] });
    }

    // public findOne(id: string): Promise<Location | undefined> {
    //     this.log.info('Find one Location');
    //     return this.locationRepository.findOne({ id });
    // }

    public async create(location: Location): Promise<Location> {
        this.log.info('Create a new Location => ', Location.toString());
        location.Id = uuid.v1();
        const newLocation = await this.locationRepository.save(location);
        return newLocation;
    }

    public update(id: string, location: Location): Promise<Location> {
        this.log.info('Update a Location');
        location.Id = id;
        return this.locationRepository.save(location);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete a Location');
        await this.locationRepository.delete(id);
        return;
    }

}
