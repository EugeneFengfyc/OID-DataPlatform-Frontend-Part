<template>
  <div>
    <el-form ref="postForm">
      <sticky :class-name="'sub-navbar'">
        <el-button v-if="!isEdit" @click="showGuide">Help</el-button>
        <el-button
          type="success"
          style="margin-left: 10px"
          @click="submitForm"
        >
          {{ isEdit ? 'Edit data':'Add data' }}</el-button>
      </sticky>
      <div class="detail-container">
        <el-row>
          <Warning />
          <el-col :span="24">
            <DataUpload
              :disabled="isEdit"
            />
          </el-col>
          <el-col :span="24">
            <el-form-item prop="Table Name">
              <MdInput :maxlength="100" required>
                Table Name
              </MdInput>
            </el-form-item>
          </el-col>

          <el-row>
            <el-col :span="12">
              <el-form-item label="First Name" :label-width="labelWidth">
                <el-input
                  placeholder="First Name"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Last Name" :label-width="labelWidth">
                <el-input
                  placeholder="Last Name"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="Email" :label-width="labelWidth">
                <el-input
                  placeholder="Email"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Role" :label-width="labelWidth">
                <el-input
                  placeholder="Role"
                />
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="12">
              <el-form-item label="University" :label-width="labelWidth">
                <el-input
                  placeholder="University"
                />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Project" :label-width="labelWidth">
                <el-select
                  placeholder="MSI"
                >
                  <el-option :value="HBCU">HBCU</el-option>
                  <el-option :value="HSI">HSI</el-option>
                  <el-option :value="AANAPISI">AANAPISI</el-option>
                  <el-option :value="ANNH">ANNH</el-option>
                  <el-option :value="PBI">PBI</el-option>
                  <el-option :value="TCU">TCU</el-option>
                  <el-option :value="NASNTI">NASNTI</el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import Warning from '@/views/HR/components/Warning'
import DataUpload from '../../../components/DataUpload'
import MdInput from '@/components/MDinput'
export default {
  components: { MdInput, Warning, Sticky, DataUpload },
  props: {
    isEdit: Boolean
  },
  data() {
    return {
      labelWidth: '100px'
    }
  },
  methods: {
    submitForm() {
    },
    showGuide() {
      console.log('show guide method')
    }
  }
}
</script>

<style scoped>
  .detail-container {
    padding: 40px 50px 20px;
  }
</style>
