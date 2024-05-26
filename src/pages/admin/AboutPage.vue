<template lang="pug">
.q-ma-md.text-center
  .q-gutter-md.q-mb-md
    q-btn(v-if="view === 'abouts'" label="節目資訊" color="secondary" size="15px" push @click="view = 'abouts'")
    q-btn(v-else label="節目資訊" color="secondary" size="15px" outline @click="view = 'abouts'")

    q-btn(v-if="view === 'members'" label="成員介紹" color="pink" size="15px" push @click="view = 'members'")
    q-btn(v-else label="成員介紹" color="pink" size="15px" outline @click="view = 'members'")

    q-btn(v-if="view === 'photos'" label="相簿管理" color="warning" size="15px" push @click="view = 'photos'")
    q-btn(v-else label="相簿管理" color="warning" size="15px" outline @click="view = 'photos'")

  AboutSetting(v-if="view === 'abouts'")
  PhotoSetting(v-if="view === 'photos'")
  MemberSetting(v-if="view === 'members'")
</template>

<script setup>
import { ref } from 'vue'
import PhotoSetting from '@/components/PhotoSetting.vue'
import AboutSetting from '@/components/AboutSetting.vue'
import MemberSetting from '@/components/MemberSetting.vue'

const view = ref('abouts')
</script>
