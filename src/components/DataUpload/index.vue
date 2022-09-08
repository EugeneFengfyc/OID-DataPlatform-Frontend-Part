<template>
  <div class="upload-container">
    <el-upload
      :action="action"
      :headers="headers"
      :multiple="false"
      :limit="1"
      :before-upload="beforeUpload"
      :on-success="onSuccess"
      :on-error="onError"
      :on-remove="onRemove"
      :file-list="fileList"
      :on-exceed="onExceed"
      :disabled="disabled"
      drag
      show-file-list
      accept=".xls, .xlsx"
    >
      <i class="el-icon-upload" />
      <div v-if="fileList.length === 0" class="el-upload__text">
        Please drag your file here or click <em>upload</em>
      </div>
      <div v-else class="el-upload__text">The file has been uploaded</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    fileList: {
      type: Array,
      default() {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      action: '${process.env.VUE_APP_BASE_API}/HR/upload'
    }
  },
  computed: {
    headers() {
      return {
        Authorization: 'Bearer ${getToken()}'
      }
    }
  },
  methods: {
    beforeUpload(file) {
      console.log(file)
      this.$emit('beforeUpload', file)
    },
    onSuccess() {},
    onError(err) {
      console.log({ err })
      const errMsg = (err.message) || 'Upload failed'
      this.$message({
        message: errMsg.msg && 'Upload failed because: ${errMsg.msg}' || 'Upload failed',
        type: 'error'
      })
    },
    onRemove() {},
    onExceed() {
      this.$message({
        message: 'Please upload one excel doc at one time',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
</style>
