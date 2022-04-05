import { Footer} from "../";
import { Header} from "../";
import { Navbar} from "../";
import { MainLikedVideos } from "./MainLikedVideos";


const LikedVideos = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <MainLikedVideos />
      <Footer />
    </div>
  );
};

export { LikedVideos };
