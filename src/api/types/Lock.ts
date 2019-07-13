import { Field, ID, ObjectType } from 'type-graphql';

import { Pet } from './Pet';

@ObjectType({
    description: 'Lock object.',
})
export class Lock {

    @Field(type => ID)
    public Id: string;

    @Field({
        description: 'The first name of the user.',
    })
    public Name: string;

    @Field({
        description: 'The last name of the user.',
    })
    public Code: string;

    @Field(type => [Pet], {
        description: 'A list of pets which belong to the user.',
    })
    public pets: Pet[];

}
