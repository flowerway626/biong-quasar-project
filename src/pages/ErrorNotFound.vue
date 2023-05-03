<template lang="pug">
#page404.fullscreen.text-white.text-center.q-pa-md.flex.flex-center
  div
    div.text404(style='font-size: 30vh') 404
    .text-h2(style='opacity:.4') Oops. 什麼都沒有...
    q-btn.q-mt-xl(color='white' text-color='black' unelevated to='/' label='Go Home' no-caps)

  Pie(:data="data" :options="options" )
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import { apiAuth } from 'src/boot/axios'
import { reactive } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: [],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#DD1B16'],
      data: []
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

const events = reactive([]);

(async () => {
  try {
    const { data: chartData } = await apiAuth.get('/events/chart')
    events.push(...chartData.result)
    // console.log(events)
    for (const eve of events) {
      data.labels.push(eve.name)
      data.datasets[0].data.push(eve.count)
    }
    console.log(data.datasets[0].data)
  } catch (error) {

  }
})()
</script>

<style lang="scss">
#page404 {
  background: #111;
  .text-h2 {
    color: $warning;
  }
  .text404 {
    background: linear-gradient(135deg, #53C2BA 0%, #C0538A 100%);
    color: transparent;
    background-clip: text;
  }
}

</style>
