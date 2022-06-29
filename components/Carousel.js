import Button from './Button';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper';
// import Swiper css
import 'swiper/css/bundle';
// import carousel data
import { CarouselData } from './Alldata/Carousel.data';
import { Icon } from '@iconify/react';

export default function Carousel() {
  return (
    <header className="relative">
      <div className="py-5">
        <Swiper
          loop={true}
          modules={[Navigation, EffectFade, Autoplay]}
          effect={'fade'}
          navigation={{
            nextEl: '.next_slide',
            prevEl: '.prev_slide',
          }}
          autoplay={{
            delay: 8000,
          }}
          className="mySwiper1"
        >
          {CarouselData.map((item) => (
            <SwiperSlide
              key={item.id}
              className="bg-white py-5 sm:py-10 lg:py-20 h-screen md:h-full"
            >
              {({ isActive }) => (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  <div className="flex justify-center relative py-10">
                    <motion.img
                      src={item.productImg}
                      alt={item.title}
                      layout="fill"
                      className="flex z-30"
                      animate={isActive ? imageAnimation : ''}
                    />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] max-h-[400px] bg-orange-100 rounded-xl rotate-45"></span>
                  </div>
                  <div className="px-5 translate-x-0 z-30">
                    <h2 className="text-2xl sm:text-3xl capitalize font-semibold font-inter">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-lg my-2 md:mt-5 mb-4 text-gray-600 md:pr-20">
                      {item.subtitle}
                    </p>
                    <div className="mt-5">
                      <Button label="Explore" />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button className="border-2 p-2 xmd:p-4 text-slate-800 border-slate-900 rounded-full absolute left-5 sm:left-10 top-1/2 -translate-y-2/4 z-10 hover:bg-slate-800 hover:border-slate-800 hover:text-slate-50 transition-all duration-300 hover:shadow-lg prev_slide">
        <Icon icon="akar-icons:chevron-left" />
      </button>
      <button className="border-2 p-2 xmd:p-4 text-slate-800 border-slate-900 rounded-full absolute right-5 sm:right-10 top-1/2 -translate-y-2/4 z-10 hover:bg-slate-800 hover:border-slate-800 hover:text-slate-50 transition-all duration-300 hover:shadow-lg next_slide">
        <Icon icon="akar-icons:chevron-right" />
      </button>
    </header>
  );
}

const imageAnimation = {
  scale: [0, 1],
  transition: {
    duration: 1,
  },
};
