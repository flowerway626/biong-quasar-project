<template lang="pug">
.q-ma-md
  q-table.event-table(title="頁面管理" :rows="events" :columns="columns" row-key="_id")
    template(v-slot:body-cell-image="props")
      q-td
        img(:src="props.row.image" :width="200" :height='200')

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")
      q-btn(label="add" color="secondary" outline @click="dialogEdit(-1)")

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(v-if="!edit" icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id)")
        q-btn(v-if="edit" icon="check" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(icon="delete" color="pink" size="sm" round @click="delProduct(props.row._id)")

q-dialog#admin-view(v-model="layout" persistent transition-show="fade" transition-hide="fade")
  q-card.my-card.text-white
      q-form(@submit="editEvent")
        q-card-section(align="center")
          .text-h5.q-ma-sm.text-weight-bold {{ form._id.length > 0 ? '編輯活動' : '新增活動' }}
          .row
            .col.q-px-md
              q-input.q-my-xs(v-model="form.name" label="標題" type="text" color="warning"  :rules="[$rules.required('欄位必填')]")
              q-input.q-my-xs(v-model="form.description" label="說明" type="textarea" color="warning" rows="4"
              :rules="[$rules.required('欄位必填')]")
            .col.q-px-md
              q-input.q-my-xs(v-model="form.place" label="地點" color="warning")
              q-input.q-my-xs(v-model.number="form.number" label="人數" type="number" color="warning"  :rules="[$rules.required('欄位必填')]")
              .row.items-center.justify-between
                .col-5
                  q-input( v-model="form.date" mask="date" color="warning")
                    template(v-slot:append)
                        q-popup-proxy(cover transition-show='scale' transition-hide='scale')
                          q-date(v-model='form.date')
                            q-btn(v-close-popup label='Close' color="secodary" flat).
                .col-1
                  span -
                //- .col-5
                  q-input(v-model="form.date" mask="date")
                    template(v-slot:append)
                        q-popup-proxy(cover transition-show='scale' transition-hide='scale')
                          q-date(v-model='form.date')
                            q-btn(v-close-popup label='Close' color='primary' flat).
              q-file.q-my-xs(v-model="form.image" outlined use-chips)

        q-card-actions(align="center")
          q-btn(type="submit" size="md" color="secondary" ) 確定
          q-btn(size="md" color="pink" v-close-popup) 取消
</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import Swal from 'sweetalert2'

const $q = useQuasar()
const layout = ref(false)
const loading = ref(false)
const filter = ref('')
const edit = ref(false)
const dateRange = ref({ form: '', to: '' })
const events = reactive([])
const form = reactive({
  idx: -1,
  _id: '',
  name: '',
  description: '',
  date: '',
  place: '',
  image: undefined,
  number: 0
})

const columns = [
  {
    name: 'image',
    required: true,
    label: '圖片',
    field: row => row.image,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: '標題',
    field: row => row.name,
    sortable: true
  },
  {
    name: 'description',
    required: true,
    label: '說明',
    field: row => row.description,
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '活動日期',
    field: row => row.date,
    sortable: true
  },
  {
    name: 'place',
    required: true,
    label: '地點',
    field: row => row.place,
    sortable: true
  },
  {
    name: 'number',
    required: true,
    label: '人數',
    field: row => row.number,
    sortable: true
  },
  {
    name: 'other',
    label: '操作'
  }
]

const dialogEdit = (id) => {
  layout.value = true
  const idx = events.findIndex((event) => event._id === id)
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.description = ''
    form.date = ''
    form.place = ''
    form.image = undefined
    form.number = 0
  } else {
    form._id = events[idx]._id
    form.idx = idx
    form.name = events[idx].name
    form.description = events[idx].description
    form.date = events[idx].date
    form.place = events[idx].place
    form.image = undefined
    form.number = events[idx].number
    console.log(form)
  }
}

const editEvent = async () => {
  layout.value = true

  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('description', form.description)
  fd.append('date', form.date)
  fd.append('place', form.place)
  fd.append('image', form.image)
  fd.append('number', form.number)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/events', fd)
      events.push(data.result)
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '新增成功',
        position: 'top'
      })
    } else {
      const { data } = await apiAuth.patch('/events' + form._id, fd)
      events[form.idx] = data.result
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '編輯完成',
        position: 'top'
      })
    }
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
  layout.value = false
}

const delProduct = async (id) => {
  try {
    loading.value = true
    await apiAuth.delete('/events/' + id)
    loading.value = false

    $q.notify({
      type: 'positive',
      color: 'pink',
      message: '已刪除活動',
      position: 'top'
    })
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
}

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/events')
    events.push(...data.result)
    loading.value = false
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '商品錯誤！'
    })
  }
})()
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
