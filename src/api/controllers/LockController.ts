import {
    Body, Get, Post, Req, Controller
} from 'routing-controllers';

import { Lock } from '../models/Lock';
import { LockService } from '../services/LockService';

@Controller('/locks')
export class LockController {

    constructor(
        private lockService: LockService
    ) { }

    @Get()
    public find(): Promise<Lock[]> {
        console.log('a');
        return this.lockService.find();
    }

    @Get('/me')
    public findMe(@Req() req: any): Promise<Lock[]> {
        return req.Lock;
    }

    // @Get('/:id')
    // @OnUndefined(LockNotFoundError)
    // public one(@Param('id') id: string): Promise<Lock | undefined> {
    //     return this.LockService.findOne(id);
    // }

    @Post()
    public create(@Body() lock: Lock): Promise<Lock> {
        return this.lockService.create(lock);
    }

    // @Put('/:id')
    // public update(@Param('id') id: string, @Body() Lock: Lock): Promise<Lock> {
    //     return this.LockService.update(id, Lock);
    // }

    // @Delete('/:id')
    // public delete(@Param('id') id: string): Promise<void> {
    //     return this.LockService.delete(id);
    // }

}
