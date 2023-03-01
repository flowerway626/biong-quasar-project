<template lang="pug">
.q-ma-md.text-center
  .q-gutter-md.q-mb-md
    q-btn(v-if="view === 'news'" label="公告管理" color="secondary" size="15px" push @click="view = 'news'")
    q-btn(v-else label="公告管理" color="secondary" size="15px" outline @click="view = 'news'")

    q-btn(v-if="view === 'events'" label="活動管理" color="pink" size="15px" push @click="view = 'events'")
    q-btn(v-else label="活動管理" color="pink" size="15px" outline @click="view = 'events'")

    q-btn(v-if="view === 'photos'" label="相簿管理" color="warning" size="15px" push @click="view = 'photos'")
    q-btn(v-else label="相簿管理" color="warning" size="15px" outline @click="view = 'photos'")

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
