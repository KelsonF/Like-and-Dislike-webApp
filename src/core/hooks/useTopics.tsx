import { useContext } from "react";
import { TopicsContext } from "../contexts/TopicsContext";

export function useTopics() {
    return useContext(TopicsContext);
}