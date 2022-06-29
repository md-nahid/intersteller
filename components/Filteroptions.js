import { Icon } from '@iconify/react';
import Accordion from './Accordion';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonTwo from './ButtonTwo';
import { shopFilterMenu } from './Alldata/FramerAnimation';
import PriceRange from './PriceRange';
import useWindowsize from '../hooks/useWindowsize';

export default function Filteroptions({
  show,
  closeFilterMenu,
  selected,
  setSelected,
  priceRange,
  onChange,
}) {
  const width = useWindowsize();
  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="max-w-full md:max-w-sm w-full h-full bg-slate-200 bg-opacity-90 md:bg-opacity-100 md:bg-slate-100 py-5 absolute left-0 top-0 md:static z-10 overflow-hidden"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={shopFilterMenu}
          >
            {width < 767 && (
              <div className="flex justify-end mr-5 mb-5">
                <ButtonTwo
                  showIcon={<Icon icon="codicon:chrome-close" />}
                  onClick={closeFilterMenu}
                />
              </div>
            )}
            <Accordion selected={selected} setSelected={setSelected} />
            <PriceRange value={priceRange} onChange={onChange} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
