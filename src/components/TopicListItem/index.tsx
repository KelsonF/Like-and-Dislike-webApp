import styles from "./styles.module.css";
import { Topic } from "../../core/interfaces/Topic";
import { useState } from "react";

interface TopicListItemProps {
  topic: Topic;
}

export function TopicListItem({ topic }: TopicListItemProps) {
  const [likes, setLikes] = useState(topic.upvote);
  const [dislikes, setDislikes] = useState(topic.downvote);
  const [totalVotes, setTotalVotes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
    setTotalVotes(totalVotes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    setTotalVotes(totalVotes + 1);
  };

  return (
    <div className={styles.item_wrapper}>
      <p>Author: {topic.autor.name}</p>
      <p>{topic.description}</p>
      <p>date: {topic.created_at.toString()}</p>
      <div className={styles.vote_wrapper}>
        <input
          type="button"
          value="Like"
          onClick={handleLikes}
          className={styles.vote_button}
        />
        <meter
          id="votes_progress"
          value={likes}
          max={totalVotes}
          className={styles.meter}
        ></meter>
        <input
          type="button"
          value="Dislike"
          onClick={handleDislike}
          className={styles.vote_button}
        />
      </div>
    </div>
  );
}
