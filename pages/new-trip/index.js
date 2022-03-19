import NewTravelForm from "../../components/travels/NewTravelForm";

const NewTravel = () => {
  
  const addTravelHandler = (enteredTravelData) => {
    console.log(enteredTravelData);
  };

  return <NewTravelForm onAddTravel={addTravelHandler} />;
};

export default NewTravel;
