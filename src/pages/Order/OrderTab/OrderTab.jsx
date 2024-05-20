import FoodCard from "../../../components/FoodCard/FoodCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>"
    },
  }
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
              className='mySwiper'>
              <div className='grid md:grid-cols-3 gap-10'>
                  
        <SwiperSlide>
          {items.map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </SwiperSlide>
              </div>
      </Swiper>
    </div>
  )
}

export default OrderTab
