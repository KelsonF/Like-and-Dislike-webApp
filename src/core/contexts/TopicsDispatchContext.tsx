import { createContext } from "react";
import { Action } from "../reducers/TopicsReducer";

export const TopicsDispatchContext = createContext<React.Dispatch<Action>>((action: Action) => { action });