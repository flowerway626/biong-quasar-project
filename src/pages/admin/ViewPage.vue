<template lang="pug">
.q-ma-md.text-center
  .q-gutter-md.q-mb-md
    q-btn(v-if="view === 'news'" label="公告管理" color="secondary" size="15px" push @click="view = 'news'")
    q-btn(v-else label="公告管理" color="secondary" size="15px" outline @click="view = 'news'")

    q-btn(v-if="view === 'events'" label="活動管理" color="pink" size="15px" push @click="view = 'events'")
    q-btn(v-else label="活動管理" color="pink" size="15px" outline @click="view = 'events'")

  NewSetting(v-if="view === 'news'")
  EventSetting(v-if="view === 'events'")
</template>

<script setup>
import { ref } from 'vue'
import EventSetting from '@/components/EventSetting.vue'
import NewSetting from '@/components/NewSetting.vue'

const view = ref('news')
</script>
