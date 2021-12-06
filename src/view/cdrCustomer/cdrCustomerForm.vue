<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" label-position="right" label-width="80px">
        <el-form-item label="账号信息[线路号]:">
          <el-input v-model="formData.User" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="名称:">
          <el-input v-model="formData.Name" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="余额:">
          <el-input v-model="formData.Balance" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="透支限额:">
          <el-input v-model="formData.Overdraft" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="套餐:">
          <el-input v-model.number="formData.SetmealOid" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="来区分代理商还是普通用户:">
          <el-input v-model="formData.PrantD" clearable placeholder="请输入" />
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
  createCdrCustomer,
  updateCdrCustomer,
  findCdrCustomer
} from '@/api/cdrCustomer' //  此处请自行替换地址
import infoList from '@/mixins/infoList'
export default {
  name: 'CdrCustomer',
  mixins: [infoList],
  data() {
    return {
      type: '',
      formData: {
        User: '',
        Name: '',
        Balance: '',
        Overdraft: '',
        SetmealOid: 0,
        PrantD: '',
      }
    }
  },
  async created() {
    // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (this.$route.query.id) {
      const res = await findCdrCustomer({ ID: this.$route.query.id })
      if (res.code === 0) {
        this.formData = res.data.recdrCustomer
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
          res = await createCdrCustomer(this.formData)
          break
        case 'update':
          res = await updateCdrCustomer(this.formData)
          break
        default:
          res = await createCdrCustomer(this.formData)
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
