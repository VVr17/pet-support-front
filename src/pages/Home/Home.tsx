import Hero from '@/components/Home/Hero';
import JoinUs from '@/components/Home/JoinUs';
import LookingHome from '@/components/Home/LookingHome';
import { useUserStore } from '@/store/useUserStore';

const Home = () => {
  const { user } = useUserStore();

  return (
    <>
      <Hero />
      <LookingHome />

      {!user && <JoinUs />}
    </>
  );
};

export default Home;
