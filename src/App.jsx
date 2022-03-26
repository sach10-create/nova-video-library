import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Authentication ,Home , WatchHistory , Playlist , LikedVideos , WatchLater , Profile } from "./pages";
import Mockman from "mockman-js";

function App() {
  return (
<Routes>
  <Route path="/" element = {<Home/>} />
  <Route path="/history" element = {<WatchHistory/>} />
  <Route path="/playlist" element = {<Playlist/>} />
  <Route path="/liked" element = {<LikedVideos/>} />
  <Route path="/watchlater" element = {<WatchLater/>} />
  <Route path="/auth" element = {<Authentication/>} />
  <Route path="/profile" element = {<Profile/>} />
  <Route path="/mock" element = {<Mockman/>} />
</Routes>
  );
}

export default App;
