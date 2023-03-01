<template lang="pug">
.q-ma-md
  q-table.new-table(:rows="news" :columns="columns" row-key="_id" :filter="filter" :loading="loading")
    template(v-slot:body-cell-image="props")
        q-td
          img(:src="props.row.image" :width="100" :height='100')

    template(v-slot:top-left)
      q-btn(label="新增公告" color="secondary" outline @click="dialogEdit(-1)")

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(v-if="!edit" icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id)")
        q-btn(v-if="edit" icon="check" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(icon="delete" color="pink" size="sm" round @click="delNew(props.row._id)")

q-dialog#edit-new(v-model="layout" persistent transition-show="fade" transition-hide="fade")
  q-card.edit-new-card.text-white
      q-form(@submit="editNew")
        q-card-section(align="center")
          .text-h5.q-ma-sm.text-weight-bold {{ form._id.length > 0 ? '編輯公告' : '新增公告' }}
              q-input.q-my-xs(v-model="form.title" label="標題" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
              q-input.q-my-xs(v-model="form.content" label="內文" type="textarea" color="warning" rows="4" autogrow
              :rules="[$rules.required('欄位必填')]")
              q-file.q-my-xs(v-model="form.image" outlined use-chips)

        q-card-actions(align="center")
          q-btn(type="submit" size="md" color="secondary") submit
          q-btn(size="md" color="pink" v-close-popup @click="loading = false") cancel

</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar, QSpinnerPie } from 'quasar'
import Swal from 'sweetalert2'

const $q = useQuasar()
const layout = ref(false)
const loading = ref(false)
const filter = ref('')
const edit = ref(false)
const news = reactive([])
const form = reactive({
  idx: -1,
  _id: '',
  title: '',
  content: '',
  date: '',
  image: undefined
})

const columns = [
  {
    name: 'image',
    required: true,
    label: '圖片'
  },
  {
    name: 'date',
    required: true,
    label: '發布日期',
    field: row => row.date,
    format: val => `${new Date(val).toLocaleString()}`,
    sortable: true
  },
  {
    name: 'title',
    required: true,
    label: '標題',
    field: 'title'
  },
  {
    name: 'content',
    required: true,
    label: '內文',
    field: 'content'
  },
  {
    name: 'other',
    label: '操作'
  }
]

// 編輯視窗
const dialogEdit = (id) => {
  layout.value = true
  loading.value = true
  const idx = news.findIndex((n) => n._id === id)
  if (idx === -1) {
    form._id = ''
    form.title = ''
    form.content = ''
    form.date = ''
    form.image = undefined
  } else {
    form._id = news[idx]._id
    form.idx = idx
    form.title = news[idx].title
    form.content = news[idx].content
    form.date = news[idx].date
    form.image = undefined
  }
}

// 送出新增 / 編輯
const editNew = async () => {
  loading.value = true
  $q.loading.show({
    spinner: QSpinnerPie,
    spinnerColor: 'warning',
    spinnerSize: 100,
    backgroundColor: 'black',
    message: 'loading...',
    messageColor: 'white'
  })
  const fd = new FormData()
  fd.append('title', form.title)
  fd.append('content', form.content)
  fd.append('image', form.image)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/news', fd)
      news.push(data.result)
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '新增成功',
        position: 'top'
      })
    } else {
      const { data } = await apiAuth.patch('/news/' + form._id, fd)
      console.log(data.result)
      news[form.idx] = data.result
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
  loading.value = false
  layout.value = false
  $q.loading.hide()
}

// 刪除
const delNew = async (id) => {
  try {
    const idx = news.findIndex((info) => info._id === id)
    loading.value = true
    await apiAuth.delete('/news/' + id)
    loading.value = false
    news.splice(idx, 1)

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
    const { data } = await apiAuth.get('/news')
    news.push(...data.result)
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
.new-table
  max-height: calc(100vh - 150px)

  tr td
    text-align: center
    font-size: 14px

  tr th
    position: sticky
    z-index: 2
    background: #333
    font-size: 14px
    text-align: center

  tr th:nth-child(4)
  tr td:nth-child(4)
    max-width: 350px
    overflow: hidden
    text-overflow: ellipsis

.edit-new-card
  width: 100%
  max-width: 600px
</style>
