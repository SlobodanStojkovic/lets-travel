import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewTravelForm.module.css";

const NewTravelForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const countryInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const travelData = {
      title: enteredTitle,
      image: enteredImage,
      country: enteredCountry,
      description: enteredDescription,
    };

    props.onAddTravel(travelData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Travel Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Travel Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="country">Country</label>
          <input type="text" required id="country" ref={countryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Travel</button>
        </div>
      </form>
    </Card>
  );
};

export default NewTravelForm;
