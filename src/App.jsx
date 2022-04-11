import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Authentication,
  Home,
  WatchHistory,
  Playlist,
  LikedVideos,
  WatchLater,
  Profile,
  VideoListing,
  SingleVideo,
} from "./pages";
import Mockman from "mockman-js";
import { PlaylistDetails } from "./components/Playlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<VideoListing />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route path="/playlist" element={<Playlist />} />
      <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
      <Route path="/liked" element={<LikedVideos />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
    </Routes>
  );
}

export default App;
