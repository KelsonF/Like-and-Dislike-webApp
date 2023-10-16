import styles from "./styles.module.css";
import { TopicListItem } from "../TopicListItem";
import { useTopics } from "../../core/hooks/useTopics";
import { Topic } from "../../core/interfaces/Topic";
import { useEffect } from "react";
import { ActionType } from "../../core/reducers/TopicsReducer";
import { useLoaderData } from "react-router-dom";
import { useTopicsDispatch } from "../../core/hooks/useTopicsDispatch";

export function TopicList() {
  const topics = useTopics()
  const data = useLoaderData()
  const dispatch = useTopicsDispatch()

  useEffect(() => {
    (
      async () => {
        const topics = data as Topic[];
        dispatch({ type: ActionType.Loaded, payload: { topics } });
      }
    )()
  }, []);

  return (
    <>
      <h3>This is our topics of the day</h3>
      <ul className={styles.topic_list}>
        {topics.map((topic: Topic) => (
          <TopicListItem topic={topic} key={topic.id} />
        ))}
      </ul>
    </>
  );
}
