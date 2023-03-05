import "./_index.scss";
import { useSelector, useDispatch } from "react-redux";

const Events = () => {
  const eventsData = useSelector((state) => state.event.value);
  const events = eventsData.map((event, index) => {
    return (
      <div index={index} className="card">
        <img src={event?.cover} className="img" alt="img-cover" />
        <div className="title">
          <h4>{event?.name}</h4>
          <p>{event?.date}</p>
        </div>
        <p>
          Missions: <span>{event?.mission}</span>
        </p>
        <p>
          Ladders: <span>{event?.Ladders}</span>
        </p>
        <p>
          Parrainage: <span>{event?.parrinage}</span>
        </p>
      </div>
    );
  });
  return <div className="events">{events}</div>;
};

export default Events;
