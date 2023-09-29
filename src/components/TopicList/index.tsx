import styles from "./styles.module.css";
import { Topic } from "../../core/interfaces/Topic";
import { TopicListItem } from "../TopicListItem";

interface TopicListProps {
  topics: Topic[];
}

export function TopicList({ topics }: TopicListProps) {
  return (
    <>
      <h3>This is our topics of the day</h3>
      <ul className={styles.topic_list}>
        {topics.map((topic) => (
          <TopicListItem topic={topic} key={topic.id}/>
        ))}
      </ul>
    </>
  );
}
