import TravelDetail from "../../components/travels/TravelDetail";

const TravelDetails = () => {
  return (
    <>
      <TravelDetail
        image={"https://wallpaperaccess.com/full/3780.jpg"}
        title={"Travel to Egypt"}
        country={"Egypt"}
        description={
          "Lets visit Egypt, see pyramids and then go to beautiful beaches of Hurghada."
        }
      />
    </>
  );
};

export async function getStaticPaths() {
  //this function is needed when we use getStaticProps

  return {
    fallback: false, //when its false, if user enters t3 then user will get 404 page, if its true it will try to generate page for t3
    paths: [
      {
        params: {
          travelId: "t1",
        },
      },
      {
        params: {
          travelId: "t2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data for a single travel

  const travelId = context.params.travelId;

  return {
    props: {
      travelData: {
        image: "https://wallpaperaccess.com/full/3780.jpg",
        id: travelId,
        title: "Travel to Egypt",
        country: "Egypt",
        description:
          "Lets visit Egypt, see piramids and then go to beautiful beaches of Hurghada.",
      },
    },
  };
}

export default TravelDetails;
