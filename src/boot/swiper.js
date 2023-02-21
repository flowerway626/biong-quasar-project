import { boot } from 'quasar/wrappers'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'
import 'swiper/css/effect-cards'

export default boot(({ app }) => {
  app.use(Swiper)
  app.use(SwiperSlide)
})
