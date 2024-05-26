<template lang="pug">
.q-ma-md
  q-table.member-table(:rows="memberData" :columns="columns" row-key="_id" :filter="filter" :loading="loading")
    template(v-slot:top-left)
      .row(style='min-width: 280px')
        q-btn.col-5.q-mr-md(label="新增成員" color="secondary" outline @click="dialogEdit(-1)")
        q-select.col(v-model='selectSession' :options='selectOptions' dense rounded outlined label='選擇季數' color="secondary")

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")

    template(v-slot:body-cell-image="props")
      q-td
        img(v-if="props.row.image" :src="props.row.image" :width="100" :height='100')
        span(v-else) ...NO IMAGE...

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(v-if="!edit" icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id)")
        q-btn(v-if="edit" icon="check" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(icon="delete" color="pink" size="sm" round @click="delMembers(props.row._id)")

q-dialog(v-model="layout" persistent transition-show="fade" transition-hide="fade")
  q-card.text-white
    q-form(@submit="editMembers")
      q-card-section(align="center")
        .text-h5.q-ma-sm.text-weight-bold {{ form._id.length > 0 ? '編輯成員' : '新增成員' }}
        .row
          .col.q-px-md
            .row
              .col.q-pr-md
                q-input.q-my-xs(v-model="form.session" label="季數" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
              .col
                q-input.q-my-xs(v-model="form.num" label="序號" type="number" color="warning" :rules="[$rules.required('欄位必填')]")
            q-input.q-my-xs(v-model="form.name" label="姓名" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
            q-input.q-my-xs(v-model="form.features" label="簡介" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
          .col.q-px-md
            img(v-if="members.find(about => about._id === form._id)" :src="members.find(about => about._id === form._id).image"
              :width="150")
            q-file.q-my-xs(v-model="form.image" outlined use-chips label="配圖")
        q-input.row.q-my-xs.q-px-md(v-model="form.story" v-html="form.story" label="詳細說明" type="textarea" color="warning" autogrow rows="4"
          :rules="[$rules.required('欄位必填')]")

        q-card-actions(align="center")
            q-btn(type="submit" size="md" color="secondary" padding="xs lg") 確定
            q-btn(size="md" color="pink" padding="xs lg" v-close-popup) 關閉
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar, QSpinnerPie } from 'quasar'
import Swal from 'sweetalert2'

const $q = useQuasar()
const layout = ref(false)
const loading = ref(false)
const filter = ref('')
const edit = ref(false)
const members = reactive([])
let memberData = reactive([])
let selectOptions = []
const selectSession = ref('All')
const form = reactive({
  idx: -1,
  _id: '',
  session: '',
  name: '',
  features: '',
  story: '',
  IGlink: '',
  num: 0,
  image: undefined
})

const columns = [
  {
    name: 'session',
    required: true,
    label: '季數',
    field: 'session'
  },
  {
    name: 'image',
    required: true,
    label: '圖片'
  },
  {
    name: 'name',
    required: true,
    label: '姓名',
    field: 'name'
  },
  {
    name: 'features',
    required: true,
    label: '簡介',
    field: 'features'
  },
  {
    name: 'story',
    required: true,
    label: '說明',
    field: 'story'
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
  const idx = members.findIndex((n) => n._id === id)
  console.log('idx :>> ', idx)
  if (idx === -1) {
    form._id = ''
    form.session = ''
    form.name = ''
    form.features = ''
    form.story = ''
    form.IGlink = ''
    form.num = 0
    form.image = undefined
  } else {
    form._id = members[idx]._id
    form.idx = idx
    form.session = members[idx].session
    form.name = members[idx].name
    form.features = members[idx].features
    form.story = members[idx].story
    form.IGlink = members[idx].IGlink
    form.num = members[idx].num
    form.image = undefined
  }
}

// 送出新增 / 編輯
const editMembers = async () => {
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
  for (const key in form) {
    fd.append(key, form[key])
  }
  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/members', fd)
      members.push(data.result)
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '新增成功',
        position: 'top'
      })
    } else {
      const { data } = await apiAuth.patch('/members/' + form._id, fd)
      console.log(data.result)
      members[form.idx] = data.result
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
  tableRefresh(selectSession.value)
  loading.value = false
  layout.value = false
  $q.loading.hide()
}

// 刪除
const delMembers = async (id) => {
  try {
    const idx = members.findIndex((info) => info._id === id)
    loading.value = true
    await apiAuth.delete('/members/' + id)
    loading.value = false
    members.splice(idx, 1)

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

const tableRefresh = (select) => {
  loading.value = true
  memberData = JSON.parse(JSON.stringify(members))
  memberData = select === 'All' ? memberData : memberData.filter(m => m.session === select)
  loading.value = false
}

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/members')
    members.push(...data.result)
    members.sort((a, b) => a.session !== b.session ? a.session - b.session : a.num - b.num)
    memberData = JSON.parse(JSON.stringify(members))
    selectOptions = ['All', ...new Set(members.map(m => m.session))]
    loading.value = false
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '取得成員資料錯誤！'
    })
  }
})()

watch(selectSession, (newVal) => {
  tableRefresh(newVal)
})
</script>

<style lang="sass">
.member-table
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
    max-width: 250px
    overflow: hidden
    text-overflow: ellipsis

  tr th:nth-child(5)
  tr td:nth-child(5)
    max-width: 450px
    overflow: hidden
    text-overflow: ellipsis

.edit-new-card
  width: 100%
  max-width: 600px
</style>
