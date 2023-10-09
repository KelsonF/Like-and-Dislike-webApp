import styles from "./styles.module.css";
import { TopicListItem } from "../TopicListItem";
import { useTopics } from "../../core/hooks/useTopics";
import { Topic } from "../../core/interfaces/Topic";
import { useContext, useEffect } from "react";
import { ActionType } from "../../core/reducers/TopicsReducer";
import { fetchAllTopics } from "../../providers/api";
import { TopicsDispatchContext } from "../../core/contexts/TopicsDispatchContext";

export function TopicList() {
  const topics = useTopics()
  const dispatch = useContext(TopicsDispatchContext)

  useEffect(() => {
    (
      async () => {

        const topics = await fetchAllTopics();

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
