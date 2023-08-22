import Announcement from "../components/Announcement/Announcement";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Products from "../components/Product/Products";
import Slider from "../components/Slider/Slider";
function Home(props) {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products type="HOME" />
      <NewsLetter />
      <Footer />
    </div>
  );
}
export default Home;
