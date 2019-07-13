import { HttpError } from 'routing-controllers';

export class LockNotFoundError extends HttpError {
    constructor() {
        super(404, 'Lock not found!');
    }
}
