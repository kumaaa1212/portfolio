import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
SwiperCore.use([Autoplay, Navigation, Pagination])

export default function Slider():JSX.Element  {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      className="mySwiper"
      >
        <div>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image1.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image2.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image3.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image4.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image5.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image6.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image7.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image8.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image9.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center">
          <Image src="/image10.jpg" width={300} height={300} alt={''} />
        </div>
      </SwiperSlide>
    </div>
    </Swiper>
  )
}

