import axios from "axios";
import { useEffect , useState} from "react";

const getCategoriesDatahook = () => {
  const [categoriesData, setcategoriesData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/categories`);
        setcategoriesData(response.json().categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return categoriesData;
};

export { getCategoriesDatahook };
