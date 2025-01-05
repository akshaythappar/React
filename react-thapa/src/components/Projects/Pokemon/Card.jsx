export const Card= ({elem}) =>{
    return (
        <div key={elem.name} className="card">
        <img
          src={elem.sprites.other.dream_world.front_default}
          alt=""
        />
        <p className="name">{elem.name}</p>
        <div className="firstrow">
          <p>Height: {elem.height}</p>
          <p>Weight: {elem.weight}</p>
          <p>Speed: {elem.stats[5].base_stat}</p>
        </div>
      </div>
    );
}