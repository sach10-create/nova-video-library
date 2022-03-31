import { Header, Footer , Navbar} from "../";
import { MainVideoListing } from "./MainVideoListing";
import { Filters } from "./Filters";


const VideoListing = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <Filters />
      <MainVideoListing/>
      <Footer />
    </div>
  );
};

export { VideoListing };
