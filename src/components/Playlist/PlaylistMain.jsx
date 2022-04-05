import { Footer} from "../";
import { Header} from "../";
import { Navbar} from "../";
import { PlaylistListing } from "./PlaylistListing";


const PlaylistMain = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <PlaylistListing />
      <Footer />
    </div>
  );
};

export { PlaylistMain };
