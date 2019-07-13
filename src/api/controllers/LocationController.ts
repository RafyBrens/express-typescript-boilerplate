import {
    Body, Get, JsonController, Post, Req
} from 'routing-controllers';

import { Location } from '../models/Location';
import { LocationService } from '../services/LocationService';

@JsonController('/locations')
export class LocationController {

    constructor(
        private locationService: LocationService
    ) { }

    @Get()
    public find(): Promise<Location[]> {
        return this.locationService.find();
    }

    @Get('/me')
    public findMe(@Req() req: any): Promise<Location[]> {
        return req.Location;
    }

    // @Get('/:id')
    // @OnUndefined(LocationNotFoundError)
    // public one(@Param('id') id: string): Promise<Location | undefined> {
    //     return this.locationService.findOne(id);
    // }

    @Post()
    public create(@Body() location: Location): Promise<Location> {
        return this.locationService.create(location);
    }

    // @Put('/:id')
    // public update(@Param('id') id: string, @Body() Location: Location): Promise<Location> {
    //     return this.locationService.update(id, Location);
    // }

    // @Delete('/:id')
    // public delete(@Param('id') id: string): Promise<void> {
    //     return this.locationService.delete(id);
    // }

}
