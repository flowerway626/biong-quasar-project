<template lang="pug">
q-card.product-Info.cursor-pointer
  q-img(:src="image" height="200px")
    .absolute-bottom.text-h6 {{ name }}

  q-card-actions
      q-btn(icon="mdi-shopping" flat :to="'/shopping/' + _id") 加入購物車
        //- q-skeleton(type="QBtn")
</template>

<script setup>
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
</script>
