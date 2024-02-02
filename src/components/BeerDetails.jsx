import { v4 as uuidv4 } from "uuid";
import { translations } from "../utils/translations";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import PageNavButton from "./PageNavButton";

function BeerDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://filthy-colt-fedora.cyclic.app/beers/?_id=${id}`
        );
        // const res = await fetch(`http://localhost:3000/beers?_id=${id}`);
        const beer = await res.json();

        setData(beer[0]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
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
          data && (
            <article className="beer mt-20">
              <div className="flex items-center gap-4 justify-center">
                <img
                  width="40px"
                  className="flag"
                  src={`https://flagsapi.com/${
                    translations[data.land]
                  }/flat/64.png`}
                  alt="country flag"
                ></img>
                <h2 className="text-4xl uppercase">{data.namn}</h2>
                <p className="text-gray-400">{data.ekologisk ? "Eko" : ""}</p>

                <span className="text-gray-400 ">{data.alkohol}</span>
              </div>
              <div className="flex flex-col items-center">
                <p>Typ: {data.typ}</p>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                    href={`https://www.systembolaget.se/sortiment/?q=${data.nr}`}
                  >
                    Nr: {data.nr}
                  </a>
                </p>
                <p>Pris: {data.pris}</p>

                <div className="flex gap-1">
                  Förpackning: <p>{data.forpackning}</p>
                  <p>{data.volym}</p>
                </div>
                <p>Ursprung: {data.land}</p>
                <p>Producent: {data.producent}</p>
                <div className="flex flex-col gap-2 mt-6">
                  <details>
                    <summary>Serveringstips</summary>
                    {data.serveringstips.map((item) => (
                      <p key={uuidv4()}>{item}</p>
                    ))}
                  </details>
                  <details>
                    <summary>Smakbeskrivning.</summary>
                    {Object.entries(data.smakbeskrivning).map(
                      ([key, value]) => (
                        <p key={key}>{`${key}: ${value}`}</p>
                      )
                    )}
                  </details>
                </div>
              </div>
            </article>
          )
        )}
      </>
      <PageNavButton path={-1} />
    </div>
  );
}

export default BeerDetails;
