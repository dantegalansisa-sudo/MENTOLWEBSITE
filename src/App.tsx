import './App.css';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import BrandsSection from './sections/BrandsSection';
import CategoriesSection from './sections/CategoriesSection';
import OffersSection from './sections/OffersSection';
import WhyUsSection from './sections/WhyUsSection';
import StatsSection from './sections/StatsSection';
import DeliverySection from './sections/DeliverySection';
import TestimonialsSection from './sections/TestimonialsSection';
import InstagramSection from './sections/InstagramSection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TrustBarSection />
        <BrandsSection />
        <CategoriesSection />
        <OffersSection />
        <WhyUsSection />
        <StatsSection />
        <DeliverySection />
        <TestimonialsSection />
        <InstagramSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
