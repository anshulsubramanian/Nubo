import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ImageSection1 from '@/components/ImageSection1';
import Menu from '@/components/Menu';
import ImageSection2 from '@/components/ImageSection2';
import OnePercentClub from '@/components/OnePercentClub';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <ImageSection1 />
      <Menu />
      <ImageSection2 />
      <OnePercentClub />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
