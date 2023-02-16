<template lang="pug">
.q-ma-md
  q-table.event-table(title="相簿管理" :rows="photos" :columns="columns" row-key="_id" :filter="filter" :loading="loading")
    template(v-slot:body-cell-image="props")
        q-td
          img(:src="props.row.image" :width="100" :height='100')

    template(v-slot:top-right)
      q-input.q-mr-md(borderless dense debounce='300' v-model='filter' placeholder='Search')
        template(v-slot:append)
          q-icon(name="search")
      q-btn(label="新增相簿" color="secondary" outline @click="dialogEdit(-1)")

    template(v-slot:body-cell-other='props')
      q-td.q-gutter-sm
        q-btn(v-if="!edit" icon="edit" round unelevated size="sm" color='pink' @click="dialogEdit(props.row._id)")
        q-btn(v-if="edit" icon="check" round unelevated size="sm" color='pink' @click="edit = !edit")
        q-btn(icon="delete" color="pink" size="sm" round @click="delProduct(props.row._id)")

q-dialog#edit-event(v-model="layout" persistent transition-show="fade" transition-hide="fade")
  q-card.my-card.text-white.q-pa-sm
      q-form(@submit="editPhoto")
        q-card-section(align="center")
          .text-h5.text-weight-bold {{ form._id.length > 0 ? '編輯相簿' : '新增相簿' }}
          q-input(v-model="form.name" label="標題" type="text" color="warning"  :rules="[$rules.required('欄位必填')]")
          q-expansion-item.q-my-sm.shadow-1.overflow-hidden(default-opened style='border-radius: 10px' icon='album' label='封面' header-class='bg-warning text-black' expand-icon-class='text-black')
            q-img.q-ma-sm(v-if="image !== ''" :src="image" width="230px" height="170px")
            q-file.q-ma-md(v-model="form.image" label="封面圖" outlined use-chips style="width: 230px")

          q-expansion-item.q-my-sm.shadow-1.overflow-hidden(style='border-radius: 10px' icon='album' label='相片' header-class='bg-warning text-black' expand-icon-class='text-black')
            .row
              .col-3.q-ma-sm(v-if="form.idx >= 0" v-for="img in images" :key="img" width="130px" height="100px")
                q-img.fullwidth(:src="img")
                  .absolute-full.flex.flex-center(v-if="form.delImages.includes(img)")
                    q-icon(name="delete")
                q-checkbox(v-model="form.delImages" :val="img")

            //- q-img.q-ma-sm(v-if="image !== ''" v-for="img in images" :src="img" width="130px" height="100px")
            q-file.q-ma-sm(v-model="form.images" label="photos" outlined use-chips multiple style="width: 400px" )

          q-checkbox(v-model='tags' label='泳知' color="warning" val="youngji" checked-icon='task_alt' unchecked-icon='highlight_off')
          q-checkbox(v-model='tags' label='俞真' color="warning" val="youjin" checked-icon='task_alt' unchecked-icon='highlight_off')
          q-checkbox(v-model='tags' label='mimi' color="warning" val="mimi" checked-icon='task_alt' unchecked-icon='highlight_off')
          q-checkbox(v-model='tags' label='恩智' color="warning" val="eunji" checked-icon='task_alt' unchecked-icon='highlight_off')

              //- .row
              //-   .col-3(v-if="form.idx >= 0" v-for="img in products[form.idx]?.images" :key="img")
              //-     q-img.fullwidth(:src="img")
              //- q-file(v-model="form.images" label="請上傳補充圖片" filled multiple style="max-width: 300px")
              //-   template(v-slot:append)
              //-     q-icon(name="close" @click="clears")

        q-card-actions(align="center")
          q-btn(type="submit" size="md" color="secondary" ) submit
          q-btn(size="md" color="pink" v-close-popup) cancel

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
const tags = ref([])
const image = ref('')
const images = reactive([])
const photos = reactive([])
const form = reactive({
  idx: -1,
  _id: '',
  name: '',
  image: undefined,
  tags: [],
  images: [],
  delImages: []
})

const columns = [
  {
    name: 'date',
    required: true,
    label: '上傳日期',
    field: 'date',
    format: val => `${new Date(val).toLocaleString()}`,
    sortable: true
  },
  {
    name: 'name',
    required: true,
    label: '標題',
    field: 'name',
    sortable: true
  },
  {
    name: 'image',
    required: true,
    label: '圖片',
    field: 'image',
    sortable: true
  },
  {
    name: 'other',
    label: '操作'
  }
]

// 編輯視窗
const dialogEdit = (id) => {
  layout.value = true
  const idx = photos.findIndex((photo) => photo._id === id)
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.image = undefined
    form.images = []
    form.delImages = []
    form.tags = []
    image.value = ''
  } else {
    form._id = photos[idx]._id
    form.idx = idx
    form.name = photos[idx].name
    form.image = undefined
    form.images = []
    form.delImages = []
    form.tags = photos[idx].tags
    tags.value = form.tags
    image.value = photos[idx].image
    console.log(images)
    images.splice(0, images.length)
    images.push(...photos[idx].images)
  }
}

// 送出新增 / 編輯
const editPhoto = async () => {
  layout.value = true
  form.tags = tags.value
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('image', form.image)
  for (const p of form.images) {
    fd.append('images', p)
  }
  for (const del of form.delImages) {
    fd.append('delImages', del)
  }
  for (const t of form.tags) {
    fd.append('tags', t)
  }

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/photos', fd)
      photos.push(data.result)
      $q.notify({
        type: 'positive',
        color: 'pink',
        message: '新增成功',
        position: 'top'
      })
    } else {
      const { data } = await apiAuth.patch('/photos/' + form._id, fd)
      photos[form.idx] = data.result
      console.log(form.tags)

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

// 刪除
const delProduct = async (id) => {
  layout.value = true
  try {
    loading.value = true
    await apiAuth.delete('/photos/' + id)
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
  layout.value = true
}

(async () => {
  try {
    loading.value = true
    const { data } = await apiAuth.get('/photos')
    photos.push(...data.result)
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
