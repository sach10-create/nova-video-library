import { Footer} from "../";
import { Header} from "../";
import { Navbar} from "../";
import { MainWatchLater } from "./MainWatchLater";


const WatchLater = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <MainWatchLater />
      <Footer />
    </div>
  );
};

export { WatchLater };
