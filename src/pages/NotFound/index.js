import "./_index.scss";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <main className="bl_page404">
        <h1 className="msg-error">Error 404. The page does not exist</h1>
        <p className="decription"></p>
        <div className="bl_page404__wrapper">
          <img
            src="https://github.com/BlackStar1991/Pictures-for-sharing-/blob/master/404/bigBoom/cloud_warmcasino.png?raw=true"
            alt="cloud_warmcasino.png"
          />
          <div className="bl_page404__el1"></div>
          <div className="bl_page404__el2"></div>
          <div className="bl_page404__el3"></div>
          <Link className="bl_page404__link" to={"/"}>
            go home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
