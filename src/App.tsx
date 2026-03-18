import './App.css';
import { QuoteProvider } from './context/QuoteContext';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import AnnouncementBar from './components/AnnouncementBar';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import QuotePanel from './components/QuotePanel';
import ToastContainer from './components/ToastContainer';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import BrandsSection from './sections/BrandsSection';
import CategoriesSection from './sections/CategoriesSection';
import OffersSection from './sections/OffersSection';
import CatalogSection from './sections/CatalogSection';
import FinancingSection from './sections/FinancingSection';
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
    <QuoteProvider>
      <Preloader />
      <ScrollProgress />
      <AnnouncementBar />
      <CustomCursor />
      <Navbar />
      <QuotePanel />
      <ToastContainer />
      <main id="main-content">
        <HeroSection />
        <TrustBarSection />
        <BrandsSection />
        <CategoriesSection />
        <OffersSection />
        <CatalogSection />
        <FinancingSection />
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
    </QuoteProvider>
  );
}
