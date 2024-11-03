import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currElem) => (<SeriesCard key={currElem.id} currElem={currElem}/>))} 
      {/* in the above part you don't have to write return keyword as you are returing only single thing */}

      
      
    </ul>
  );
};

export default NetflixSeries;
