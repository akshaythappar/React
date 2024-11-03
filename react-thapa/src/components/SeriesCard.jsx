export const SeriesCard = (props) =>{
    console.log(props);
    const {id,img_url,name,rating,description,cast,genre,watch_url} = props.currElem;
        return <>
        <li>
          <div>
            <img
              src={img_url}
              alt={name}
              width="30%"
              height="30%"
            />
          </div>
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <h3>Summary: {description}</h3>
          <h3>Genre: {genre}</h3>
          <p>Cast: {cast}</p>
          <a href={watch_url} target="_blank">
            <button>Watch</button>
          </a>
        </li>
        </>;    

}