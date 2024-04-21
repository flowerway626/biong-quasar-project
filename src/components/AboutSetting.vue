<template lang="pug">
.q-ma-md
  q-table#about-table(:rows="abouts" :columns="columns" row-key="_id" :filter="filter" :loading="loading")
    template(v-slot:body-cell-image="props")
        q-td
          img(v-if="props.row.image" :src="props.row.image" :width="100" :height='100')
          span(v-else) ...NO IMAGE...

    template(v-slot:top-left)
      q-btn(label="新增資訊" color="secondary" outline @click="dialogEdit(-1)")

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")

    template(v-slot:body-cell-info='props')
      q-td.q-gutter-sm
        q-btn(icon="add" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id, 'view')")

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id, 'edit')")
        q-btn(icon="delete" color="pink" size="sm" round @click="delProduct(props.row._id)")

#edit-about
  q-dialog(v-model="layout" persistent transition-show="fade" transition-hide="fade")
    q-card.text-white
        q-form
          q-card-section(v-if="mainLayout" align="center")
            .text-h5.q-ma-sm.text-weight-bold {{ form._id.length > 0 ? '編輯資訊' : '新增資訊' }}
            .row
              .col.q-px-md
                .row
                  .col.q-pr-md
                    q-input.q-my-xs(v-model="form.session" label="季數" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
                  .col-10
                    q-input.q-my-xs(v-model="form.date" label="最後編輯日期" type="text" color="warning" disable)
                q-input.row.q-my-xs(v-model="form.intro" label="節目背景" type="textarea" color="warning" autogrow rows="4"
                  :rules="[$rules.required('欄位必填')]")
                div 詳細資訊
                q-btn(v-if="!infoLayout" icon="add" round unelevated size="sm" color='pink' @click="infoLayout = !infoLayout")
                q-btn(v-else icon="remove" round unelevated size="sm" color='pink' @click="infoLayout = !infoLayout")
              .col.q-px-md.row
                img(v-if="abouts.find(about => about._id === form._id)" :src="abouts.find(about => about._id === form._id).image"
                  :width="300" :height='450')
                q-file.q-my-xs(v-model="form.image" outlined use-chips label="配圖")
          q-card-section(v-if="infoLayout")
            .row
              .col.q-px-md
                q-input.q-my-xs(v-model="form.info.name" label="中文名稱" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
                .row
                  .col.q-pr-md
                    q-input.q-my-xs(v-model="form.info.alias.kor" label="韓文名稱" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
                  .col
                    q-input.q-my-xs(v-model="form.info.alias.eng" label="英文名稱" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
                .row
                  .col-5.q-pr-md
                    span 開始日期
                    q-input(v-model="form.info.dateStart" filled type="date" color="warning" borderless)
                  .col-5.q-pr-md
                    span 結束日期
                    q-input(v-model="form.info.dateEnd" filled type="date" color="warning" borderless)
                  .col
                    q-input.q-my-xs(v-model="form.info.episode" label="集數" type="text" color="warning" :rules="[$rules.required('欄位必填')]")
                .q-mt-md
                  span 固定嘉賓
                  div
                    template(v-for="(star, idx) in form.info.Starring" :key="star" align="left")
                      q-chip(v-if="form._id !== '' && edit === 'view'" :label='star' clickable outline color='warning' text-color='white')
                      q-chip(v-else :label='star' clickable outline removable @remove="chipEditArr('', idx)" color='warning' text-color='white')
                    q-chip(v-if="form._id === '' || edit === 'edit'" clickable outline @click="chipEdit('固定嘉賓', 'Starring')" color='warning' icon="add" text-color='white')
                .q-mt-md
                  span 製作導演
                  div
                    template(v-for="(pd, idx) in form.info.director" :key="pd" align="left")
                      q-chip(v-if="form._id !== '' && edit === 'view'" :label='pd' clickable outline color='warning' text-color='white')
                      q-chip(v-else :label='pd' clickable outline removable @remove="chipEditArr('', idx)" color='warning' text-color='white')
                    q-chip(v-if="form._id === ''|| edit === 'edit'" clickable outline @click="chipEdit('製作導演', 'director')" color='warning' icon="add" text-color='white')
                .q-mt-md
                  span 串流平台
                  div
                    template(v-for="(ott, idx) in form.info.TWott" :key="ott" align="left")
                      q-chip(v-if="form._id !== '' && edit === 'view'" :label='ott' clickable outline color='warning' text-color='white')
                      q-chip(v-else :label='ott' clickable outline removable @remove="chipEditArr('', idx)" color='warning' text-color='white')
                    q-chip(v-if="form._id === ''|| edit === 'edit'" clickable outline @click="chipEdit('串流平台', 'TWott')" color='warning' icon="add" text-color='white')
              .col
                q-input.q-my-xs(v-model="form.info.description" label="說明" type="textarea" color="warning" autogrow
                :rules="[$rules.required('欄位必填')]")

          q-card-actions(align="center")
            q-btn(v-if="mainLayout" size="md" color="secondary" padding="xs lg" @click="doubleCheck = !doubleCheck") 確定
            q-btn(size="md" color="pink" padding="xs lg" v-close-popup) 關閉

q-dialog(v-model='prompt')
  q-card(style='min-width: 350px')
    q-card-section
      .text-h6 新增 {{ chipDialog.title }}
    q-card-section.q-pt-none
      q-input(dense v-model='editVal' color="warning" autofocus @keyup.enter='prompt = false')
      span {{ chipDialog.data }}
    q-card-actions.text-primary(align='center')
      q-btn(push padding="xs lg" label='新增' color="warning" @click="chipEditArr(editVal, '')")

q-dialog(v-model='doubleCheck')
  q-card(style='min-width: 350px' align='center')
    q-card-section
      .text-h6 資料送出後無法再做修改
    q-card-actions.text-primary(align='center')
      q-btn(push padding="xs lg" label='確認送出' color="warning" @click="editabout()")

</template>

<script setup>
import { ref, reactive } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar, QSpinnerPie } from 'quasar'
import Swal from 'sweetalert2'

const $q = useQuasar()
const abouts = reactive([])
const loading = ref(false)
const filter = ref('')
const layout = ref(false) // 新增/編輯 dialog 開關顯示
const mainLayout = ref(false) // 新增/編輯 dialog > 共同資訊 開關顯示
const infoLayout = ref(false) // 新增/編輯 dialog > 詳細資訊 開關顯示
const prompt = ref(false) // chipDialog 開關顯示
const doubleCheck = ref(false) // chipDialog 開關顯示
const editVal = ref('') // chipDialog 新增 value
const edit = ref(false) // 表格 編輯/新增
const chipDialog = reactive({})
const form = reactive({
  idx: -1,
  _id: '',
  date: '',
  intro: '',
  session: '',
  info: {
    name: '',
    alias: {
      kor: '',
      eng: ''
    },
    description: '',
    dateStart: '',
    dateEnd: '',
    Starring: [],
    director: [],
    episode: '',
    TWott: []
  },
  image: undefined
})

const columns = [
  {
    name: 'session',
    required: true,
    label: '季數',
    field: row => row.session,
    sortable: true
  },
  {
    name: 'date',
    required: true,
    label: '編輯日期',
    field: row => row.date,
    format: val => `${new Date(val).toLocaleString()}`,
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    field: row => row.image
  },
  {
    name: 'intro',
    required: true,
    label: '簡介',
    field: row => row.intro
  },
  {
    name: 'info',
    required: true,
    label: '詳細資訊',
    field: row => row.info,
    sortable: true
  },
  {
    name: 'other',
    label: '操作'
  }
]

// 更新 chipDialog 標題和 data
const chipEdit = (title, key) => {
  prompt.value = !prompt.value
  editVal.value = ''
  chipDialog.title = title
  chipDialog.key = key
  chipDialog.data = form.info[key]
}

// 增修固定嘉賓/製作導演/串流平台
const chipEditArr = (val, idx) => {
  // 深層複製以防動到
  if (form._id.length > 0) {
    let data = abouts.find(about => about._id === form._id).info[chipDialog.key]
    data = data ? JSON.parse(JSON.stringify(data)) : []
    if (form.info[chipDialog.key].length === data.length) form.info[chipDialog.key] = data
  }
  chipDialog.data = form.info[chipDialog.key]
  if (val.length > 0) { // 增加
    prompt.value = true
    chipDialog.data.push(val)
    editVal.value = ''
  } else { // 移除
    chipDialog.data.splice(idx, 1)
  }
}

// 編輯視窗
const dialogEdit = (id, clickBtn) => {
  layout.value = true
  const idx = abouts.findIndex(about => about._id === id)
  if (idx === -1) {
    form._id = ''
    form.date = new Date().toLocaleString()
    form.intro = ''
    form.session = ''
    form.info = {}
    form.image = undefined
  } else {
    form._id = abouts[idx]._id
    form.idx = idx
    form.date = new Date(abouts[idx].date).toLocaleString()
    form.intro = abouts[idx].intro
    form.info = JSON.parse(JSON.stringify(abouts[idx].info))
    form.session = abouts[idx].session
    form.image = undefined
    // console.log(form)
  }
  infoLayout.value = true
  // eslint-disable-next-line no-unneeded-ternary
  mainLayout.value = clickBtn === 'view' ? false : true
  edit.value = clickBtn
  getinfoDialog(id)
}

// 編輯視窗
const infoDialogEdit = (id) => {
  infoLayout.value = true
  getinfoDialog(id)
}

// 取得節目資訊
const getinfoDialog = (id) => {
  const idx = abouts.findIndex(about => about._id === id)
  if (idx === -1) {
    form.info._id = ''
    form.info.name = ''
    form.info.alias = { kor: '', eng: '' }
    form.info.description = ''
    form.info.dateStart = ''
    form.info.dateEnd = ''
    form.info.Starring = []
    form.info.director = []
    form.info.episode = ''
    form.info.TWott = []
  } else {
    for (const key in form.info) {
      if (key !== 'idx') {
        form.info[key] = abouts[idx].info[key]
      }
    }
    form.info.idx = idx
    // console.log(form)
  }
}

// 送出新增 / 編輯
const editabout = async () => {
  layout.value = false
  doubleCheck.value = false
  $q.loading.show({
    spinner: QSpinnerPie,
    spinnerColor: 'warning',
    spinnerSize: 100,
    backgroundColor: 'black',
    message: 'loading...',
    messageColor: 'white'
  })
  const fd = new FormData()
  if (form.info._id === '') delete form.info._id
  form.info = JSON.stringify(form.info)
  for (const key in form) {
    fd.append(key, form[key])
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/abouts', fd)
      abouts.push(data.result)
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '新增成功',
        position: 'top'
      })
    } else {
      const { data } = await apiAuth.patch('/abouts/' + form._id, fd)
      abouts[form.idx] = data.result
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
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '發生錯誤！'
    })
  }
  $q.loading.hide()
}

// 刪除
const delProduct = async (id) => {
  try {
    loading.value = true
    const idx = abouts.findIndex(about => about._id === id)
    await apiAuth.delete('/abouts/' + id)
    abouts.splice(idx, 1)
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
    const { data } = await apiAuth.get('/abouts')
    console.log('data.result :>> ', data.result)
    abouts.push(...data.result)
    loading.value = false
  } catch (error) {
    Swal.fire({
      toast: true,
      timer: 1000,
      showConfirmButton: false,
      background: '#F5ABA5',
      icon: 'error',
      color: 'black',
      text: error?.response?.data?.message || '資訊錯誤！'
    })
  }
})()
</script>

<style lang="sass">
#about-table
  max-height: calc(100vh - 150px)

tr th
  position: sticky
  z-index: 2
  background: #333
  font-size: 14px
  text-align: center

tr td
  text-align: center
  font-size: 14px

tr th:nth-child(4)
tr td:nth-child(4)
  max-width: 300px
  overflow: hidden
  text-overflow: ellipsis
</style>
