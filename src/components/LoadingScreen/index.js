import "./_index.scss";
const LoadingScreen = () => {
  return (
    <>
      <div className="container-loader">
        <div className="loader">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__ball"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
