import TravelItem from "./TravelItem";
import classes from "./TravelList.module.css";

const TravelList = (props) => {
  return (
    <ul className={classes.list}>
      {props.travels.map((travel) => (
        <TravelItem
          key={travel.id}
          id={travel.id}
          image={travel.image}
          title={travel.title}
          country={travel.country}
        />
      ))}
    </ul>
  );
};

export default TravelList;
