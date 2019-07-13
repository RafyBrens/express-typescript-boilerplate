import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Lock } from '../models/Lock';
import { events } from '../subscribers/events';
import { LockRepository } from '../repositories/LockRepository';

@Service()
export class LockService {

    constructor(
        @OrmRepository() private lockRepository: LockRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Lock[]> {
        this.log.info('Find all locks');
        return this.lockRepository.find({ relations: ['Location'] });
    }

    // public findOne(id: string): Promise<Lock | undefined> {
    //     this.log.info('Find one Lock');
    //     return this.lockRepository.findOne({ id });
    // }

    public async create(lock: Lock): Promise<Lock> {
        console.log('=============', lock);
        this.log.info('Create a new Lock => ', Lock.toString());
        lock.Id = uuid.v1();
        const newLock = await this.lockRepository.save(lock);
        this.eventDispatcher.dispatch(events.lock.created, newLock);
        return newLock;
    }

    // public update(id: string, Lock: Lock): Promise<Lock> {
    //     this.log.info('Update a Lock');
    //     Lock.id = id;
    //     return this.lockRepository.save(Lock);
    // }

    // public async delete(id: string): Promise<void> {
    //     this.log.info('Delete a Lock');
    //     await this.lockRepository.delete(id);
    //     return;
    // }

}
