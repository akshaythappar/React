export const SeriesCard = ({ currElem }) => {
  // console.log(props);
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    currElem;
    const btn_style={ padding: "1.2rem 2.4rem" ,border:'none',backgroundColor:"var(--btn-hover-bg-color)",color:"var(--color)"};
  return (
    <>
      <li className="card">
        <div>
          <img src={img_url} alt={name} width="30%" height="30%" />
        </div>
        <div className="card-content">
          <h2>Name: {name}</h2>
          {/* <h3>Rating: <span style={{backgroundColor:rating>8.5?"green":"red"}}>{rating}</span></h3> */}
          <h3>Rating: <span className={rating>8.5?"super-hit":"average"}>{rating}</span></h3>
          <p>Summary: {description}</p>
          <p>Genre: {genre.join(",")}</p>
          <p>Cast: {cast.join(",")}</p>
          <a href={watch_url} target="_blank">
            <button style={btn_style}>Watch</button>
          </a>
        </div>
      </li>
    </>
  );
};
