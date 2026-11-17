import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import ExploreFiko from "@/components/ExploreFiko";
import SignatureFavourites from "@/components/SignatureFavourites";
import OurStory from "@/components/OurStory";
import OurCommunity from "@/components/OurCommunity";
import FikoExperience from "@/components/FikoExperience";
import Gallery from "@/components/Gallery";
import VisitFiko from "@/components/VisitFiko";
import Footer from "@/components/Footer";

export default function Home() {
  return <main><Navbar /><Hero /><Introduction /><ExploreFiko /><SignatureFavourites /><OurStory /><OurCommunity /><FikoExperience /><Gallery /><VisitFiko /><Footer /></main>;
}
