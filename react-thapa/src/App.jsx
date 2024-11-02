export const App = () => {
  return (
    <div>
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
      <NetflixSeries />
    </div>
  );
};

const NetflixSeries = () => {
  return (
    <div>
      <div>
        <img src="Slide1.png" alt="img not found" width="30%" height="30%" />
      </div>
      <h2>Name: Queen of Starts</h2>
      <h3>Rating: 8.3</h3>
      <p>
        Summary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ratione, nihil nemo eaque voluptatibus reprehenderit accusantium omnis!
        Nisi eveniet similique qui ex, minima ipsum excepturi asperiores commodi
        sunt enim ullam quam quidem expedita assumenda porro optio tempora
        laudantium aliquam eos velit illo maxime! Atque debitis commodi
        suscipit.
      </p>
    </div>
  );
};
