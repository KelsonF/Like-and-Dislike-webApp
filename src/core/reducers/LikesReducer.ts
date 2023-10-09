import { Topic } from "../interfaces/Topic";

export interface voteState {
     voteCount: number;
}


export enum ActionType {
  Like,
  Dislike,
  AddTotalVotes,
  Added
}

type LikedAction = {
     type: ActionType.Like;
     payload: {
          topic: Topic;
     };
};

type DislikeAction = {
     type: ActionType.Dislike;
     payload: {
          topic: Topic;
     };
};

type TotalVotesAction = {
     type: ActionType.AddTotalVotes;
     payload : {
          topic: Topic
     }
}

type Action = LikedAction | DislikeAction | TotalVotesAction


const voteReducer = (state: voteState, action: Action): voteState => {
     switch (action.type) {
          case ActionType.Like: {
               return {
                    ...state,
                    voteCount: state.voteCount + 1,
               };
          }
          case ActionType.Dislike: {
               return {
                    ...state,
                    voteCount: state.voteCount + 1,
               };
          }
          case ActionType.AddTotalVotes : {
               return {
                    ...state,
                    voteCount: state.voteCount + 1
               }
          }
     }
};


export { voteReducer };