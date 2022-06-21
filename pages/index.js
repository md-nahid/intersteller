import BestSellingProducts from '../components/BestSellingProducts';
import Carousel from '../components/Carousel';
import CategorySlider from '../components/CategorySlider';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <CategorySlider />
      <BestSellingProducts />
    </Layout>
  );
}
