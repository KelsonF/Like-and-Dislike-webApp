import { Topic } from "../interfaces/Topic";

export interface TopicState {
     topics: Topic[];
}

export enum ActionType {
     Added,
     Loaded
}

type TopicAdded = { type: ActionType.Added, payload: { topic: Topic } }
type TopicLoaded = { type: ActionType.Loaded, payload: { topics: Topic[] } }

export type Action = TopicAdded | TopicLoaded

const TopicsReducer = (state: TopicState, action: Action): TopicState => {
     console.table(action)
     
     switch (action.type) {
          case ActionType.Added: {
               return { topics: [action.payload.topic, ...state.topics] }
          }
          case ActionType.Loaded: {
               return { topics: [...action.payload.topics] }
          }
     }
}

export { TopicsReducer }