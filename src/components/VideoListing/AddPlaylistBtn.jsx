import { usePlaylist } from "../../context";

const AddPlaylistBtn = () => {
    const { setShowCreatePlaylist } = usePlaylist();
    const handleCreatePlaylist = () => setShowCreatePlaylist(true);
    return (
        <button
            className="cursor-pointer d-flex align-center btn-primary  justify-content-center btn"
            onClick={handleCreatePlaylist}
        >
            <span>
                <i className="fas fa-plus"></i>
            </span>
            <p className="btn-text">Add new playlist</p>
        </button>
    );
};

export { AddPlaylistBtn };