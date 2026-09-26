import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Showcase from '../components/Showcase';
import WhyMe from '../components/WhyMe';
import Contact from '../components/Contact';
import usePageMeta from '../hooks/usePageMeta';

export default function Home() {
  usePageMeta();

  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Showcase />
      <WhyMe />
      <Contact />
    </>
  );
}
