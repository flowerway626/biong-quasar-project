<template lang="pug">
q-page
  .row
    q-img(fit src="http://img.lifestyler.co.kr/uploads/programtemplate/20220614/f637908113779910034.jpg")

  h5.col-12.text-center 活動公告
  .row.flex-center.q-pa-xl
    .col
      q-card.eventCard.q-ma-auto
        img(src='https://cdn.quasar.dev/img/mountains.jpg')
        q-card-section
          .text-h6 直播快閃
          .text-subtitle2 2023/2/5 ~ 2023/2/10
        q-card-section.q-pt-none loremloremloremloremloremloremloremloremloremloremloremlorem
    .col
      q-table.eventTable.q-ma-auto(title='Events' :rows='rows' :columns='columns' row-key='name')

  .row.q-pa-xl
    .col
      .text-h6.text-center Contact Us
      q-form.q-mx-auto(style="width: 80%" @submit="contactUs")
        .row.justify-between
          .col-5
            q-input.q-my-xs(label="account" v-model="form.account" clearable clear-icon="close" dense=true
            :rules="[$rules.required('欄位必填')]")
          .col-5
            q-input.q-my-xs(label="標題" v-model="form.title" type="text" clearable clear-icon="close" dense=true
            :rules="[$rules.required('欄位必填')]")

        q-input.q-my-xs(label="email" v-model="form.email" clearable clear-icon="close"
        :rules="[$rules.required('欄位必填'), $rules.email('email 格式錯誤')]" dense=true)

        q-input.q-my-xs(label="內容" v-model="form.content" clearable clear-icon="close" dense=true
        :rules="[$rules.required('欄位必填'), $rules.maxLength(200, '內容過長')]" maxlength="200")

        .text-center
          q-btn.full-width(type="submit" size="sm" outline style="color: #53C2BA") 送出
    .col
      .text-h5.text-center lorem
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  account: '',
  email: '',
  title: '',
  content: ''
})

const columns = reactive([
  {
    name: 'newsId',
    // required: true,
    label: 'newsId',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true
  },
  {
    name: 'date',
    label: 'date',
    field: 'date',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
  },
  {
    name: 'title',
    align: 'center',
    label: 'title',
    field: 'title',
    sortable: true
  }
])

const rows = reactive([
  {
    name: 'Frozen Yogurt',
    title: 159,
    date: '24'
  },
  {
    name: 'Ice cream sandwich',
    title: 237,
    date: '1%'
  },
  {
    name: 'Eclair',
    title: 262,
    date: '7%'
  },
  {
    name: 'Cupcake',
    title: 305,
    date: '8%'
  },
  {
    name: 'Gingerbread',
    title: 356,
    date: '16%'
  },
  {
    name: 'Jelly bean',
    title: 375,
    date: '0%'
  }
])

const contactUs = () => {
  console.log('表單送出')
}
</script>

<style lang="scss">
.eventCard img {
  width: 100%;
  height: 200px;
}

.eventTable,
.eventCard {
  height: 350px;
  max-width: 500px;
}

.eventTable {
  td:first-child {
    background-color: #555 !important;
  }

  tr th {
    position: sticky;
    z-index: 2;
    background: #333;
  }

  thead tr:last-child th {
    top: 48px;
    z-index: 3;
  }

  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }
  tr:first-child th:first-child {
    z-index: 3;
  }

  td:first-child {
    z-index: 1;
  }

  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
  }
}
</style>
