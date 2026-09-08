
import HomeHero from '../components/Home/HomeHero';
import HomeExtra from '../components/Home/HomeExtra';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
   
      <HomeHero />
      <HomeExtra />
      
    </div>
  );
};

export default HomePage;