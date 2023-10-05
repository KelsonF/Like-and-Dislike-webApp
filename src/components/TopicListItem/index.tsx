import styles from "./styles.module.css";
import { Topic } from "../../core/interfaces/Topic";
import { useReducer } from "react";
import { ActionType, voteReducer } from "../../core/reducers/LikesReducer";

interface TopicListItemProps {
  topic: Topic;
}

export function TopicListItem({ topic }: TopicListItemProps) {
  const [likeState, LikeDispatch] = useReducer(voteReducer, { voteCount: topic.upvote })
  const [dislikeState, DislikeDispatch] = useReducer(voteReducer, { voteCount: topic.downvote })
  const [totalVotes, totalVotesDispatch] = useReducer(voteReducer, { voteCount: 0 })

  // Increase the like count for this topic.
  const handleLikes = () => {
    LikeDispatch({ type: ActionType.Like, payload: { topic } })
    totalVotesDispatch({ type: ActionType.AddTotalVotes, payload: { topic } })
  };

  // Increase the dislike count for this topic.
  const handleDislike = () => {
    DislikeDispatch({ type: ActionType.Dislike, payload: { topic } })
    totalVotesDispatch({ type: ActionType.AddTotalVotes, payload: { topic } })
  };

  return (
    <div className={styles.item_wrapper}>
      <p>Author: {topic.autor.name}</p>
      <p>{topic.description}</p>
      <p>date: {topic.created_at.toString()}</p>
      <div className={styles.vote_wrapper}>
        <input
          type="button"
          value="Dislike"
          onClick={handleDislike}
          className={styles.vote_button}
        />
        <meter
          id="votes_progress"
          value={likeState.voteCount}
          max={totalVotes.voteCount}
          className={styles.votes_progress_bar}
        ></meter>
        <input
          type="button"
          value="Like"
          onClick={handleLikes}
          className={styles.vote_button}
        />
      </div>
    </div>
  );
}