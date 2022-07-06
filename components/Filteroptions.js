import Accordion from './Accordion';
import { motion, AnimatePresence } from 'framer-motion';
import { shopFilterMenu } from './Alldata/FramerAnimation';
import PriceRange from './PriceRange';
import RatingFilter from './RatingFilter';
import BrandsFilter from './BrandsFilter';

export default function Filteroptions({
  show,
  selected,
  setSelected,
  priceRange,
  onChange,
  star,
  setStar,
  brand,
  setBrand,
}) {
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className=" bg-slate-200 bg-opacity-90 overflow-hidden"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={shopFilterMenu}
          >
            <div className="py-5 grid grid-cols-1 xs:grid-cols-2 xmd:grid-cols-4 gap-5">
              <Accordion selected={selected} setSelected={setSelected} />
              <PriceRange value={priceRange} onChange={onChange} />
              <RatingFilter star={star} setStar={setStar} />
              <BrandsFilter brand={brand} setBrand={setBrand} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
