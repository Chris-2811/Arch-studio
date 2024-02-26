import HeroHome from '@/components/Home/HeroHome';
import Welcome from '@/components/Home/Welcome';
import Team from '@/components/Home/Team';
import Featured from '@/components/Home/Featured';

function Home() {
  return (
    <>
      <HeroHome />
      <Welcome />
      <Team />
      <Featured />
    </>
  );
}

export default Home;
