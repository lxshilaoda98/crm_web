<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" label-position="right" label-width="80px">
        <el-form-item label="费率名称:">
          <el-input v-model="formData.Name" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="备注:">
          <el-input v-model="formData.Remarks" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="创建人:">
          <el-input v-model="formData.Create" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="规则时间:">
          <el-input v-model.number="formData.ChargingTime" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="超规则收费:">
          <el-input v-model="formData.LocalMoneyS" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="本地市话:">
          <el-input v-model="formData.LocalMoney" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="国内长途:">
          <el-input v-model="formData.DomesticMoney" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="国际长途:">
          <el-input v-model="formData.InternationMoney" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="套餐:">
          <el-input v-model.number="formData.SetMeal" clearable placeholder="请输入" />
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
  createCdrRate,
  updateCdrRate,
  findCdrRate
} from '@/api/cdrRate' //  此处请自行替换地址
import infoList from '@/mixins/infoList'
export default {
  name: 'CdrRate',
  mixins: [infoList],
  data() {
    return {
      type: '',
      formData: {
        Name: '',
        Remarks: '',
        Create: '',
        ChargingTime: 0,
        LocalMoneyS: '',
        LocalMoney: '',
        DomesticMoney: '',
        InternationMoney: '',
        SetMeal: 0,
      }
    }
  },
  async created() {
    // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (this.$route.query.id) {
      const res = await findCdrRate({ ID: this.$route.query.id })
      if (res.code === 0) {
        this.formData = res.data.recdrRate
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
          res = await createCdrRate(this.formData)
          break
        case 'update':
          res = await updateCdrRate(this.formData)
          break
        default:
          res = await createCdrRate(this.formData)
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
