import ProductCard from '../components/ProductCard';
import SomethingWrong from '../components/SomethingWrong';
import ProductContentLoader from '../components/ContentLoader/ProductContentLoader';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import useWindowsize from '../hooks/useWindowsize';
import ShopFilterMenuTop from '../components/ShopFilterMenuTop';
import Filteroptions from '../components/Filteroptions';

export default function Shop() {
  const width = useWindowsize();
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 5000,
  });
  const [selected, setSelected] = useState('');
  const { data, isLoading, isError } = useApi(selected ? selected : '/products');
  const [sort, setSort] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }, [show]);
  useEffect(() => {
    if (width > 767) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [width]);

  return (
    <>
      <ShopFilterMenuTop
        data={data}
        show={show}
        setShow={setShow}
        onClearFilters={() => {
          setPriceRange({ ...priceRange, min: 0, max: 5000 });
          setSelected('');
          setSort('');
        }}
        setSort={setSort}
      />
      <div className="px-5 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5 relative">
        <Filteroptions
          show={show}
          closeFilterMenu={() => setShow(false)}
          selected={selected}
          setSelected={setSelected}
          priceRange={priceRange}
          onChange={(e) => setPriceRange({ ...priceRange, [e.target.id]: e.target.value })}
        />
        {/* error messate show  */}
        {isError && (
          <div className="my-5 flex justify-center">
            <SomethingWrong />
          </div>
        )}
        {/* product show  */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {/*loading skeleton */}
          {isLoading && [1, 2, 3, 4].map((item) => <ProductContentLoader key={item} />)}
          {/* products grid  */}
          {data &&
            data
              .filter((item) => item.price >= priceRange.min && item.price <= priceRange.max)
              .map((p) => (
                <ProductCard
                  key={p.id}
                  image={p.image}
                  title={p.title.slice(0, 8)}
                  price={p.price}
                />
              ))}
        </div>
      </div>
      {/* load more button  */}
      {data && (
        <div className="text-center mt-16 mb-20">
          <Button label="More" />
        </div>
      )}
    </>
  );
}
