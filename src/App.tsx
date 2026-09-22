import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import QualityNutrition from "./pages/QualityNutrition";
import Manufacturing from "./pages/Manufacturing";
import Recipes from "./pages/Recipes";
import News from "./pages/News";
import WhereToBuy from "./pages/WhereToBuy";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { PrivacyPolicy, TermsConditions } from "./pages/Legal";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/quality-nutrition" element={<QualityNutrition />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/news" element={<News />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}
