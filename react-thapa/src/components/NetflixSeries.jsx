import seriesData from "../api/seriesData.json";

const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((currElem) => {
        return (
        <li key={currElem.id}>
          <div>
            <img
              src={currElem.img_url}
              alt={currElem.name}
              width="30%"
              height="30%"
            />
          </div>
          <h2>Name: {currElem.name}</h2>
          <h3>Rating: {currElem.rating}</h3>
          <h3>Summary: {currElem.description}</h3>
          <h3>Genre: {currElem.genre}</h3>
          <p>Cast: {currElem.cast}</p>
          <a href={currElem.watch_url} target="_blank">
            <button>Watch</button>
          </a>
        </li>);
      })}
    </ul>
  );
};

export default NetflixSeries;
