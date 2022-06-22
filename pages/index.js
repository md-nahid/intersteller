import BestSellingProducts from '../components/BestSellingProducts';
import Carousel from '../components/Carousel';
import CategorySlider from '../components/CategorySlider';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <CategorySlider />
      <BestSellingProducts />
      <Newsletter />
    </Layout>
  );
}
