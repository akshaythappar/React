import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ currElem }) => {
  // console.log(props);
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
    currElem;
  //   const btn_style = {
  //     padding: "1.2rem 2.4rem",
  //     border: "none",
  //     backgroundColor: `${rating>8.5?"#7dcea0":"#f7dc6f"}`,
  //     color: "var(--color)",
  //     fontWeight:"bold",
  //     cursor:"pointer",
  //   };

  // styled component using object
  //   const Button = styled.button({
  //     padding: "1.2rem 2.4rem",
  //     border: "none",
  //     backgroundColor: `${rating>8.5?"#7dcea0":"#f7dc6f"}`,
  //     color: "var(--color)",
  //     fontWeight:"bold",
  //     cursor:"pointer",
  //   });

  // styled component using string literal
  // using template literal imagine you are writing pure css as you are using earlier
  // in styled componet , you can pass the funciton within the template literal to dynamically set css properties based on props and states

  const Button = styled.button`
    padding: "1.2rem 2.4rem"
    border: "none"
    background-color: ${(props) => (props.rating > 8.5 ? "#7dcea0" : "#f7dc6f")}
    color: "var(--color)"
    font-weight:"bold"
    cursor:"pointer"
  `;
  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #7dcea0;
    text-transform: capitalize;
  `;
  const ratingClass = rating > 8.5 ? styles.super_hit : styles.average;
  return (
    <>
      <li className={styles.card}>
        <div>
          <img src={img_url} alt={name} width="30%" height="30%" />
        </div>
        <div className={styles["card-content"]}>
          <h2>Name: {name}</h2>
          {/* <h3>Rating: <span style={{backgroundColor:rating>8.5?"green":"red"}}>{rating}</span></h3> */}
          <Rating>
            Rating:{" "}
            <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </Rating>
          <p>Summary: {description}</p>
          <p>Genre: {genre.join(",")}</p>
          <p>Cast: {cast.join(",")}</p>
          <a href={watch_url} target="_blank">
            {/* <button style={btn_style}>Watch</button> */}
            <Button rating={rating}>Watch</Button>
          </a>
        </div>
      </li>
    </>
  );
};
