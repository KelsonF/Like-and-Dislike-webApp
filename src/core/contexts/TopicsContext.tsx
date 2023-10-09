import { createContext } from "react";
import { Topic } from "../interfaces/Topic";

export const TopicsContext = createContext<Topic[]>([]);