<template lang="pug">
.q-ma-md
  .q-gutter-md
    q-btn(label="公告" color="secondary" outline @click="view = 'news'")
    q-btn(label="活動" color="pink" outline @click="view = 'events'")
    q-btn(label="相簿" color="warning" outline @click="view = 'photos'")
  NewSetting(v-if="view === 'news'")
  EventSetting(v-if="view === 'events'")
  PhotoSetting(v-if="view === 'photos'")
</template>

<script setup>
import { ref } from 'vue'
import EventSetting from '@/components/EventSetting.vue'
import NewSetting from '@/components/NewSetting.vue'
import PhotoSetting from '@/components/PhotoSetting.vue'

const view = ref('news')

</script>

<style lang="sass">
.event-table
  max-height: calc(100vh - 100px)

  // td:first-child
  //   background-color: #555 !important
  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    z-index: 2
    background: #333
    font-size: 14px
    font-weight: bold
    text-align: center

  thead tr:last-child th
    top: 48px
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    z-index: 3

  td:first-child
    z-index: 1

  td:first-child, th:first-child
    position: sticky
    left: 0

.my-card
  width: 100%
  max-width: 900px
</style>
