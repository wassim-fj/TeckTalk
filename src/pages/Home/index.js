import "./_index.scss";
import PlayerOfTheMonth from "./../../assets/imgs/PlayerOfTheMonth.png";
const Home = () => {
  return (
    <div className="Best-player-container">
      <div className="info-player">
        <h1>
          Joueur <span> du mois </span>
        </h1>
        <p className="name-bestPlayer">Ahmed Moli</p>

        <ul>
          <li>plus de 1200 classé partie</li>
          <li>690 coups de tête</li>
          <li>644 missions completes</li>
        </ul>
      </div>
      <img
        src={PlayerOfTheMonth}
        className="best-player-img"
        alt="player-month"
      />
    </div>
  );
};

export default Home;
