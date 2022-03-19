import TravelList from "../components/travels/TravelList";
import Layout from "../components/layout/Layout";

const DUMMY_TRAVELS = [
  {
    id: "t1",
    title: "Travel to Egypt",
    image: "https://wallpaperaccess.com/full/3780.jpg",
    country: "Egypt",
    description:
      "Lets visit Egypt, see piramids and then go to beautiful beaches of Hurghada.",
  },
  {
    id: "t2",
    title: "Travel to Dubai",
    image: "https://images3.alphacoders.com/737/737916.jpg",
    country: "Egypt",
    description:
      "Lets visit Dubai and see how one super modern city looks like.",
  },
];

const Homepage = () => {
  return (
    <>
      <Layout>
        <TravelList travels={DUMMY_TRAVELS} />
      </Layout>
    </>
  );
};

export default Homepage;
