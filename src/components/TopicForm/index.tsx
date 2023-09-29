import { FormEvent, useRef } from "react";
import styles from "./styles.module.css";

interface TopicFormProps {
  onAddTopic: (description: string) => void;
}

export function TopicForm({ onAddTopic }: TopicFormProps) {
  const descriptionRef = useRef<HTMLInputElement>(null);

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
