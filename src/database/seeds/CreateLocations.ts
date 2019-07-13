import { Factory, Seed } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { Location } from '../../../src/api/models/Location';

export class CreateLocations implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<any> {
        await factory(Location)().seedMany(10);
    }

}
