import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    // Added 'max-w-[1280px]' to stop it from getting too wide
    // Added 'mx-auto' to center it
    // Added 'overflow-x-hidden' to prevent side scrolling
<main className="w-full overflow-x-hidden relative">
         <Hero />
       <Services />
       <Testimonials />
       {/* Other Sections will go here */}
    </main>
  )
}
export default Home;