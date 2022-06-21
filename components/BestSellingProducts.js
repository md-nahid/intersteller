import SectionHeader from './SectionHeader';
import useSWR from 'swr';
import { fetcher, baseUrl } from '../lib/fetcher';
import ProductContentLoader from './ContentLoader/ProductContentLoader';
import SomethingWrong from './SomethingWrong';

export default function BestSellingProducts() {
  const { data, error } = useSWR(`${baseUrl}products`, fetcher);
  return (
    <section className="py-10 md:py-20">
      <SectionHeader
        title="best selling Products"
        subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta?"
      />
      <div className="my-10 px-20 grid grid-cols-4 gap-10">
        {error && <SomethingWrong />}
        {!data && !error && [1, 2, 3, 4].map((item) => <ProductContentLoader key={item} />)}
        {data && data.map((p) => <div key={p.id}>{p.title}</div>)}
      </div>
    </section>
  );
}
