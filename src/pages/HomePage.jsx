import Navbar from '../components/layouts/Navbar';
import Hero from '../components/layouts/Hero';
import HomeCards from '../components/layouts/HomeCards';
import RecentJobs from '../components/layouts/RecentJobs';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <RecentJobs />
    </>
  );
};

export default HomePage;
