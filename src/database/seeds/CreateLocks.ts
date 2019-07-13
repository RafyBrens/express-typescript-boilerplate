import { Factory, Seed } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';

import { Lock } from '../../../src/api/models/Lock';

export class CreateLocks implements Seed {

    public async seed(factory: Factory, connection: Connection): Promise<any> {
        await factory(Lock)().seedMany(10);
    }

}
