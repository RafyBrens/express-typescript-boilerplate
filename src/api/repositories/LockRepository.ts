import { EntityRepository, Repository } from 'typeorm';

import { Lock } from '../models/Lock';

@EntityRepository(Lock)
export class LockRepository extends Repository<Lock>  {

}
