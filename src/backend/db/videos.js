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
    profileURL : "https://yt3.ggpht.com/sPfMqJy05PF-Aujf21-OWve7qex3jm0eWPBI53NLMyk2J2b_JjaRezehA1ugLoxASUTWZ1x27A=s68-c-k-c0x00ffffff-no-rj",
    thumbnailURL : "https://i.ytimg.com/vi/LOiiOoRC5w0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC53wXYaff5Gbk1Xy6S9IPYt7zeRw",
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
    profileURL : "https://yt3.ggpht.com/sPfMqJy05PF-Aujf21-OWve7qex3jm0eWPBI53NLMyk2J2b_JjaRezehA1ugLoxASUTWZ1x27A=s68-c-k-c0x00ffffff-no-rj",
    thumbnailURL : "https://i.ytimg.com/vi/LOiiOoRC5w0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC53wXYaff5Gbk1Xy6S9IPYt7zeRw",
    likes : 220,
    category: [ "Gaming" ," Streaming"],
    description : "Valorant match"
  },
];
