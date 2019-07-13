import { EntityRepository, Repository } from 'typeorm';

import { Location } from '../models/Location';

@EntityRepository(Location)
export class LocationRepository extends Repository<Location>  {

}
