<template lang="pug">
#data.q-ma-md
  .backH4.text-h4.text-center 資料統計
  .row
    .q-mb-md.q-ma-md-md.col-12.col-md-7
      Line.area(:data="ratingsData" :options="ratingsOptions" :style="style")
    .q-mb-md.q-ma-md-md.col-12.col-md
      q-table.table(title="收視表" hide-bottom :pagination="pagination" :rows-per-page-options="[0]" :columns="columns" :rows="rows" row-key="ep")
  .row
    .q-mb-md.q-ma-md-md.col-12.col-md
      Pie.area(v-if="loaded" :data="eventData" :options="eventOptions" :style="style")
    .q-mb-md.q-ma-md-md.col-12.col-md
      Bar.area(v-if="loaded" :data="productData" :options="productOptions" :style="style")
</template>

<script setup>
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend, Colors, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Pie, Line, Bar } from 'vue-chartjs'
import { apiAuth } from 'src/boot/axios'
import { ref } from 'vue'

ChartJS.register(ArcElement, Tooltip, Title, Legend, Colors, BarElement, CategoryScale, LinearScale, PointElement, LineElement)
ChartJS.defaults.color = '#fff'
ChartJS.defaults.plugins.title.font.size = '20px'
ChartJS.defaults.borderColor = '#555'
const eventData = {
  labels: [],
  datasets: [
    {
      data: []
    }
  ]
}
const ratingsData = {
  labels: ['ep.1', 'ep.2', 'ep.3', 'ep.4', 'ep.5', 'ep.6', 'ep.7', 'ep.8', 'ep.9', 'ep.10', 'ep.11', 'ep.12'],
  datasets: [
    {
      label: '第一季',
      data: [2.183, 2.460, 2.575, 2.637, 2.925, 3.069, 2.939, 3.523, 2.908, 3.813, 3.516, 2.741]
    },
    {
      label: '第二季',
      data: [2.105, 1.460, 0.544, 1.652, 2.554, 5.225, 1.642, 3.523, 4.908, 2.813, 4.544, 4.441]
    }
  ]
}
const productData = {
  labels: [],
  datasets: [
    {
      axis: 'y',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(255, 159, 64)',
        'rgba(255, 205, 86)',
        'rgba(75, 192, 192)',
        'rgba(54, 162, 235)',
        'rgba(153, 102, 255)',
        'rgba(201, 203, 207)'
      ]
    }
  ]
}

const columns = [
  {
    name: 'ep',
    label: '集數',
    required: true,
    field: 'ep',
    sortable: true
  },
  {
    name: 's1',
    label: '第一季',
    field: 's1',
    sortable: true,
    format: val => `${val}`
  },
  {
    name: 's2',
    label: '第二季',
    field: 's2',
    sortable: true,
    format: val => `${val}`
  }
]
const rows = []
for (let i = 0; i < ratingsData.labels.length; i++) {
  rows.push({
    ep: ratingsData.labels[i],
    s1: ratingsData.datasets[0].data[i],
    s2: ratingsData.datasets[1].data[i]
  })
}

const eventOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'left'
    },
    title: {
      display: true,
      text: '活動報名人數'
    }
  }
}
const ratingsOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: '收視率折線圖'
    }
  }
}
const productOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: '商品售出數量'
    }
  }
}

const style = {
  height: '40vh',
  position: 'relative'
}

const loaded = ref(false);

(async () => {
  try {
    loaded.value = false
    const result = await Promise.all([apiAuth.get('/events/chart'), apiAuth.get('/orders/all')])
    for (const eve of result[0].data.result) {
      eventData.labels.push(eve.name)
      eventData.datasets[0].data.push(eve.count)
    }
    for (const order of result[1].data.result) {
      for (const pd of order.products) {
        productData.labels.push(pd.p_id.name)
        productData.datasets[0].data.push(pd.quantity)
      }
    }
    // api 接到資料後才顯示 chart
    loaded.value = true
  } catch (error) {

  }
})()
</script>

<style lang="sass">
#data
  .area
    background: #222
    padding: 16px
    border-radius: 16px
    box-shadow: 0px 0px 16px #111
  .table
    height: 400px
    tr th
      position: sticky
      z-index: 2
      background: #222

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
</style>
