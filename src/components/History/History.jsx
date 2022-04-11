import { Footer} from "..";
import { Header} from "..";
import { Navbar} from "..";
import { HistoryContent } from "./HistoryContent";


const History = () => {
  return (
    <div className="home-container">
      <Header />
      <Navbar />
      <HistoryContent />
      <Footer />
    </div>
  );
};

export { History };
