<template lang="pug">
q-card.product-Info.cursor-pointer
  div.mask
    q-img(:src="image" height="200px")
      .absolute-bottom.text-h6 {{ name }}

    q-card-actions
      //- q-skeleton(type="QBtn")
      q-btn(icon="mdi-shopping" flat :to="'/shopping/' + _id" @click="editCart({_id, quantity: 1})") 加入購物車
</template>

<script setup>
import { useUserStore } from '@/stores/user'

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  sell: {
    type: Boolean,
    default: false
  }

})

const user = useUserStore()
const { editCart } = user

</script>

<style lang="scss">
.mask {
  // &:hover {
  background: rgba(0, 0, 0, 0.5);
  // }
}
</style>
