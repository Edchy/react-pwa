import { useEffect, useState } from "react";
import { getData } from "../utils/api";
import PageNavButton from "./PageNavButton";
import Beer from "./Beer";
import { RotatingLines } from "react-loader-spinner";

function BeerList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const jsonData = await getData();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <RotatingLines
            visible={true}
            height="46"
            width="46"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          {" "}
          <ul className="mt-12 gap-4 grid grid-cols-autofit-250">
            {data.map((beer) => (
              <Beer key={beer._id} beer={beer} />
            ))}
          </ul>
          <PageNavButton path={-1} />
        </>
      )}
    </>
  );
}

export default BeerList;
