import ProductCard from '../components/ProductCard';
import SomethingWrong from '../components/SomethingWrong';
import ProductContentLoader from '../components/ContentLoader/ProductContentLoader';
import Button from '../components/Button';
import { useEffect, useState } from 'react';
import useApi from '../hooks/useApi';
import ShopFilterMenuTop from '../components/ShopFilterMenuTop';
import Filteroptions from '../components/Filteroptions';

export default function Shop() {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 5000,
  });
  const [star, setStar] = useState('');
  const [brand, setBrand] = useState('');
  const [selected, setSelected] = useState('');
  const { data, isLoading, isError } = useApi(selected ? selected : '/products');
  const [sort, setSort] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [show]);

  return (
    <>
      <ShopFilterMenuTop
        show={show}
        setShow={setShow}
        onClearFilters={() => {
          setPriceRange({ ...priceRange, min: 0, max: 5000 });
          setSelected('');
          setSort('');
          setStar('');
          setBrand('');
        }}
        setSort={setSort}
      />
      <Filteroptions
        show={show}
        selected={selected}
        setSelected={setSelected}
        priceRange={priceRange}
        onChange={(e) => setPriceRange({ ...priceRange, [e.target.id]: e.target.value })}
        star={star}
        setStar={setStar}
        brand={brand}
        setBrand={setBrand}
      />
      <div className="px-2">
        {isError && (
          <div className="my-5 flex justify-center">
            <SomethingWrong />
          </div>
        )}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {isLoading && [1, 2, 3, 4].map((item) => <ProductContentLoader key={item} />)}
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
