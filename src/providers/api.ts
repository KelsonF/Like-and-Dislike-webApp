import { Topic } from "../core/interfaces/Topic"; 

const base_url = "http://localhost:3000/topics";

export async function fetchAllTopics(): Promise<Topic[]> {
  const response = await fetch(`${base_url}`);
  const data = await response.json();

  return data as Topic[];
}

export async function postNewTopic(topic: Topic): Promise<Topic> {
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(topic),
  };

  const response = await fetch(base_url, init);
  const data = await response.json();

  return data as Topic;
}