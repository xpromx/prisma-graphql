import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number

  @Field()
  email: string

  @Field((type) => String, { nullable: true })
  name?: string | null

}
