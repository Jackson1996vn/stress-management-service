import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity()
export class Stress {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    stressLevel: number;

    @Column()
    imageUrl: string;

    @Column( { type: 'timestamptz'} )
    createdDate: Date
}