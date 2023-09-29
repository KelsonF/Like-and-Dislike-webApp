import { Author } from "./Author";
import { ULID } from 'ulidx'

export interface Topic {
   id: ULID
   description: string
   autor: Author
   created_at: Date | string
   tags: string[]
   active: boolean
   upvote: number
   downvote: number
}