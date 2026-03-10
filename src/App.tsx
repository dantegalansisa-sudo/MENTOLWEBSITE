import './App.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import CategoriesSection from './sections/CategoriesSection';
import WhyUsSection from './sections/WhyUsSection';
import StatsSection from './sections/StatsSection';
import DeliverySection from './sections/DeliverySection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <TrustBarSection />
      <CategoriesSection />
      <WhyUsSection />
      <StatsSection />
      <DeliverySection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
      <WhatsAppButton />
    </>
  );
}
