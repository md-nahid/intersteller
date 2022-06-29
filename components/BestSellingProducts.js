import SectionHeader from './SectionHeader';
import useSWR from 'swr';
import { fetcher, baseUrl } from '../lib/fetcher';
import ProductContentLoader from './ContentLoader/ProductContentLoader';
import SomethingWrong from './SomethingWrong';
import ProductCard from './ProductCard';
import Button from './Button';

export default function BestSellingProducts() {
  const { data, error } = useSWR(`${baseUrl}/products`, fetcher);
  return (
    <section className="py-10 md:py-20">
      <SectionHeader
        title="best selling Products"
        subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta?"
      />
      <div className="my-5 flex justify-center">{error && <SomethingWrong />}</div>
      <div className="mt-10 px-5 md:px-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {!data && !error && [1, 2, 3, 4].map((item) => <ProductContentLoader key={item} />)}
        {data &&
          data.map((p) => (
            <ProductCard key={p.id} image={p.image} title={p.title.slice(0, 8)} price={p.price} />
          ))}
      </div>
      {data && (
        <div className="text-center mt-16">
          <Button label="More" />
        </div>
      )}
    </section>
  );
}
