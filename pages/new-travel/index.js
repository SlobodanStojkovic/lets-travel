import { useRouter } from "next/router";
import NewTravelForm from "../../components/travels/NewTravelForm";

const NewTravel = () => {
  const router = useRouter();

  const addTravelHandler = async (enteredTravelData) => {
    const response = await fetch("/api/new-travel", {
      method: "POST",
      body: JSON.stringify(enteredTravelData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  };

  return <NewTravelForm onAddTravel={addTravelHandler} />;
};

export default NewTravel;
