import TravelList from "../components/travels/TravelList";

const DUMMY_TRAVELS = [
  {
    id: "t1",
    title: "Travel to Egypt",
    image: "https://wallpaperaccess.com/full/3780.jpg",
    country: "Egypt",
    description:
      "Lets visit Egypt, see pyramids and then go to beautiful beaches of Hurghada.",
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

const Homepage = (props) => {
  return (
    <>
      <TravelList travels={props.travels} />
    </>
  );
};

export async function getStaticProps() {
  // code written here is executed during build process and never on the clients machines during their visit
  //fetch data

  return {
    props: { travels: DUMMY_TRAVELS },
    revalidate: 1,
    /* revalidate: 3600 this means that date will rebuild on our backend every hour, so the page is updated regularly after deployment, if data changes fast, then 1 second is a good option, if it doesnt then we can set a higher number */
  };
}

/* 
export async function getServerSideProps(context) {
  // this function runs always on server after deployment
  //fetch data from an API or other serverside code
  //this function is guaranteed to run for every request to the server - but that means we need that page needs to be generated every time, its good for use when page data changes very ofthen, in other cases getStaticProps is better because it will be faster.
  const req = context.req; //request
  const res = context.res; //response 
  return {
    props: { travels: DUMMY_TRAVELS },
  };
} */

export default Homepage;
