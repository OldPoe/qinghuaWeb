<template>
  <div class="about">
    <h1>后台数据上传</h1>
    <!--    <T msg="Welcome to Your Vue.js App"/>-->
    <input
        type="file"
        @change="addFile"
        ref="inputer"
        accept="text/plain"
    >
  </div>
</template>
<script>
// import T from '@/components/T.vue'
import axios from 'axios'

export default {
  name: 'About',

  data() {
    return {
      formData: new FormData(),
      file: {} //文件数据
    }
  },
  methods: {
    //上传文件
    addFile: function () {
      const that = this;
      let inputDOM = this.$refs.inputer;
      // let oldLen = this.filLen;
      this.file = inputDOM.files[0];
      // let len = this.file.length;
      let size = Math.floor(this.file.size / 1024);
      if (size > 20 * 1024 * 1024) {
        alert("请选择20M以内的图片！");
        return false;
      }
      this.formData.append("file", this.file);
      axios.post('http://localhost:8081/getRule', that.formData, {
        headers: {
          // "Content-Type": "text/plain",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "X-Requested-With",
          "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS"
        }
      })
      // .then(function (response) {
      // })
      // .catch(function (response) {
      //   console.log("新建分享", err);
      // });
      // this.$http({
      //   method: "post",
      //   url: _this.HOST + api.upload,
      //   data: this.formData,
      //   headers: {
      //     "Content-Type": "multipart/form-data"
      //   }
      // })


    }
  }
}</script>