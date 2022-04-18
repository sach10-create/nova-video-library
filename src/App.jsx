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
import { RequireAuth } from "./utils";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoListing />} />
      <Route path="/history" element={<WatchHistory />} />
      <Route
        path="/playlist"
        element={
          <RequireAuth>
            <Playlist />
          </RequireAuth>
        }
      />
      <Route path="/playlist/:playlistId" element={<PlaylistDetails />} />
      <Route
        path="/liked"
        element={
          <RequireAuth>
            <LikedVideos />
          </RequireAuth>
        }
      />
      <Route
        path="/watchlater"
        element={
          <RequireAuth>
            <WatchLater />
          </RequireAuth>
        }
      />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/mock" element={<Mockman />} />
      <Route path="/video/:videoId" element={<SingleVideo />} />
    </Routes>
  );
}

export default App;
