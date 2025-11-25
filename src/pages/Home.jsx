import Navbar from '../components/layouts/Navbar';
import Hero from '../components/layouts/Hero';
import HomeCards from '../components/layouts/HomeCards';
import JobListings from '../components/layouts/JobListings';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
};

export default Home;
