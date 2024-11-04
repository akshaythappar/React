export const SeriesCard = ({currElem}) =>{
    // console.log(props);
    const {id,img_url,name,rating,description,cast,genre,watch_url} = currElem;
        return <>
        <li className="card">
          <div>
            <img
              src={img_url}
              alt={name}
              width="30%"
              height="30%"
            />
          </div>
          <div className="card-content">
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p style={{margin:"1.2rem 0rem"}}>Summary: {description}</p>
          <p style={{margin:"1.2rem 0rem"}}>Genre: {genre}</p>
          <p style={{margin:"1.2rem 0rem"}}>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button>Watch</button>
          </a>
          </div>
        </li>
        </>;    

}