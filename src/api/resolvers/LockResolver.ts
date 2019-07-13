import { Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';

import { Lock } from '../types/Lock';
import { LockService } from '../services/LockService';

@Service()
@Resolver(of => Lock)
export class LockResolver {

    constructor(
        private lockService: LockService
        ) {}

    @Query(returns => [Lock])
    public locks(): Promise<any> {
      return this.lockService.find();
    }
}
