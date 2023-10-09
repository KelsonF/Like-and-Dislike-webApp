import { FormEvent, useContext, useRef } from "react";
import styles from "./styles.module.css";
import { Topic } from "../../core/interfaces/Topic";
import { ulid } from "ulidx";
import { ActionType } from "../../core/reducers/TopicsReducer";
import { TopicsDispatchContext } from "../../core/contexts/TopicsDispatchContext";

export function TopicForm() {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const dispatch = useContext(TopicsDispatchContext)

  const onAddTopic = (description: string) => {
    const topic: Topic = {
      id: ulid(),
      description: description,
      created_at: new Date(),
      upvote: 0,
      downvote: 0,
      autor: {
        id: 'id_teste',
        name: 'Kelson',
        city: 'Teresina',
        country: 'Brazil',
      },
      active: true,
      tags: ['tag1', 'tag2'],
    };

    const init = {
      method: 'POST',
      body: JSON.stringify(topic),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('http://localhost:3000/topics', init).then((response) => {
      if (response.ok) {
        dispatch({ type: ActionType.Added, payload: { topic } });
      }
    });
  };

  const handleAddTopicFunction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const description = descriptionRef.current!.value;

    onAddTopic(description);
  };

  return (
    <div className={styles.form_wrapper}>
      <form onSubmit={handleAddTopicFunction} className={styles.form}>
        <input
          type="text"
          placeholder="Description here"
          className={styles.description_input}
          ref={descriptionRef}
        />
        <input type="submit" value="submit" className={styles.submit_button} />
      </form>
    </div>
  );
}
