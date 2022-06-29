import BestSellingProducts from '../components/BestSellingProducts';
import Carousel from '../components/Carousel';
import CategorySlider from '../components/CategorySlider';
import FreeShipping from '../components/FreeShipping';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <Carousel />
      <CategorySlider />
      <BestSellingProducts />
      <Newsletter />
      <FreeShipping />
    </>
  );
}
