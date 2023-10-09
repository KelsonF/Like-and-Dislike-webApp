import { useContext } from "react";
import { TopicsDispatchContext } from "../contexts/TopicsDispatchContext";
import { Action } from "../reducers/TopicsReducer";

export function useTopicsDispatch(): React.Dispatch<Action> {
    return useContext(TopicsDispatchContext);
}