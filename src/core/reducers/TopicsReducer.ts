import { ulid } from "ulidx";
import { Topic } from "../interfaces/Topic";

export interface TopicState {
     topics: Topic[];
}

export enum ActionType {
     Added
}

type TopicAdded = { type: ActionType.Added, payload: { description: string } }

const TopicsReducer = (state: TopicState, action: TopicAdded): TopicState => {

     const new_topic = {
          id: ulid(),
          created_at: new Date().toJSON().slice(0, 10),
          active: true,
          description: action.payload.description,
          upvote: 0,
          downvote: 0,
          tags: ["teste", "teste2"],
          autor: {
               id: "id_teste",
               name: "Kelson",
               country: "Brazil",
               city: "Teresina",
          },
     };

     return { topics: [new_topic, ...state.topics] }
}

export { TopicsReducer }