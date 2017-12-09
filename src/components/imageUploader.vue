<template>
    <div>
        <p class="text-left">
            <img :src="value" class="img-thumbnail">
        </p>
        <input type="text" class="form-control" id="picture" v-model="picture"
               placeholder="picture">
        <input type="file" class="hidden" ref="image" @change="upload">
        <button v-if="!isUploading" class="btn btn-sm pull-left" type="button" @click="selectNewImage">
            Выбрать новую картинку
        </button>
        <div v-else class="pull-left">Загружется <i class="fa fa fa-spinner fa-spin"></i></div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'ImageUploader',
    props: {
      value: {
        required: true,
        type: String
      },
      clientId: {
        reqired: true,
        type: String
      }
    },
    data () {
      return {
        picture: null,
        isUploading: false
      }
    },
    mounted: function () {
      this.picture = this.value
    },
    methods: {
      selectNewImage: function () {
        this.$refs.image.click()
      },
      upload: function () {
        this.isUploading = true
        const url = 'https://api.imgur.com/3/image'
        const data = new FormData()
        data.append('image', this.$refs.image.files[0])

        const config = {
          headers: {
            'Authorization': `Client-ID ${this.clientId}`
          }
        }
        axios.post(url, data, config).then(
          (res) => {
            this.isUploading = false
            this.$emit('input', res.data.data.link)
            this.$refs.image.value = ''
          }
        )
      }
    }

  }
</script>