import { PropsWithChildren, useReducer } from "react"
import { TopicsReducer } from "../reducers/TopicsReducer"
import { TopicsContext } from "../contexts/TopicsContext";
import { TopicsDispatchContext } from "../contexts/TopicsDispatchContext";

export function TopicsProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(TopicsReducer, { topics: [] });

    return (
        <TopicsContext.Provider value={state.topics}>
            <TopicsDispatchContext.Provider value={dispatch}>
                {children}
            </TopicsDispatchContext.Provider>
        </TopicsContext.Provider>   
    )
}