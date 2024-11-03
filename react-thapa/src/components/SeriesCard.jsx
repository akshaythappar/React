export const SeriesCard = (props) =>{
    console.log(props);
        return <>
        <li>
          <div>
            <img
              src={props.currElem.img_url}
              alt={props.currElem.name}
              width="30%"
              height="30%"
            />
          </div>
          <h2>Name: {props.currElem.name}</h2>
          <h3>Rating: {props.currElem.rating}</h3>
          <h3>Summary: {props.currElem.description}</h3>
          <h3>Genre: {props.currElem.genre}</h3>
          <p>Cast: {props.currElem.cast}</p>
          <a href={props.currElem.watch_url} target="_blank">
            <button>Watch</button>
          </a>
        </li>
        </>;    

}