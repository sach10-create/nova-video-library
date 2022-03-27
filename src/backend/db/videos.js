/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid} from "uuid"; 

export const videos = [
  {
    _id: uuid(),
    title: "Velocity vs Global 2",
    channelName: "The Esports Club 2",
    subscribers : 123,
    verified : false,
    views : 10,
    duration : "1:01:31",
    likes : 220,
    category: [ " Gaming2" ," Streaming2"],
    description : "Valorant match 2"
  },
  {
    _id: uuid(),
    title: "Velocity vs Global",
    channelName: "The Esports Club",
    verified : false,
    views : 10,
    duration : "1:01:31",
    likes : 220,
    category: [ " Gaming" ," Streaming"],
    description : "Valorant match"
  },
];
