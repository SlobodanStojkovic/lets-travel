import classes from "./TravelDetail.module.css";

const TravelDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.country}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default TravelDetail;
