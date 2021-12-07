<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" label-position="right" label-width="80px">
        <el-form-item label="线路号码:">
          <el-input v-model="formData.User" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="formData.PassWord" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="消费:">
          <el-input v-model="formData.Consumption" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="所属账号:">
          <el-input v-model="formData.Costomer" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="归属:">
          <el-input v-model="formData.Gs" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="区号:">
          <el-input v-model="formData.Qh" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" @click="save">保存</el-button>
          <el-button size="mini" type="primary" @click="back">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  createCdrLine,
  updateCdrLine,
  findCdrLine
} from '@/api/cdrLine' //  此处请自行替换地址
import infoList from '@/mixins/infoList'
export default {
  name: 'CdrLine',
  mixins: [infoList],
  data() {
    return {
      type: '',
      formData: {
        User: '',
        PassWord: '',
        Consumption: '',
        Costomer: '',
        Gs: '',
        Qh: '',
      }
    }
  },
  async created() {
    // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (this.$route.query.id) {
      const res = await findCdrLine({ ID: this.$route.query.id })
      if (res.code === 0) {
        this.formData = res.data.recdrLine
        this.type = 'update'
      }
    } else {
      this.type = 'create'
    }
  },
  methods: {
    async save() {
      let res
      switch (this.type) {
        case 'create':
          res = await createCdrLine(this.formData)
          break
        case 'update':
          res = await updateCdrLine(this.formData)
          break
        default:
          res = await createCdrLine(this.formData)
          break
      }
      if (res.code === 0) {
        this.$message({
          type: 'success',
          message: '创建/更改成功'
        })
      }
    },
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
