import { usePlaylist } from "../../context";
import { Link } from "react-router-dom";
const PlaylistListing = () => {
  const { playlistState } = usePlaylist();
  return (
    <div className="cursor-pointer playlist-card d-flex align-center justify-content-center">
      {playlistState.playlists.length &&
        playlistState.playlists.map(({ _id, name }) => (
            
          <Link className="no-link playlist-link" to={`/playlist/${_id}`} key={_id}>
            <h3>{name}</h3>
          </Link>
        ))}
    
    </div>
  );
};

export { PlaylistListing };
