export const SeriesCard = ({ currElem }) => {
  // console.log(props);
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    currElem;
  return (
    <>
      <li className="card">
        <div>
          <img src={img_url} alt={name} width="30%" height="30%" />
        </div>
        <div className="card-content">
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Summary: {description}</p>
          <p>Genre: {genre}</p>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button style={{ padding: "1.2rem 2.4rem" ,border:'none',backgroundColor:"var(--btn-hover-bg-color)",color:"var(--color)"}}>Watch</button>
          </a>
        </div>
      </li>
    </>
  );
};
