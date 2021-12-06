<template>
  <div>
    <div class="gva-form-box">
      <el-form :model="formData" label-position="right" label-width="80px">
        <el-form-item label="callId字段:">
          <el-input v-model="formData.callId" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="注册用户:">
          <el-input v-model="formData.sipUser" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="注册地址:">
          <el-input v-model="formData.sipHost" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="地址:">
          <el-input v-model="formData.presenceHosts" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="联系地址:">
          <el-input v-model="formData.contact" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="状态:">
          <el-input v-model="formData.status" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="ping状态:">
          <el-input v-model="formData.pingStatus" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="ping次数:">
          <el-input v-model.number="formData.pingCount" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="ping时间:">
          <el-input v-model.number="formData.pingTime" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="失效:">
          <el-input v-model.number="formData.expires" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="ping失效:">
          <el-input v-model.number="formData.pingExpires" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="用户代理:">
          <el-input v-model="formData.userAgent" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="服务器用户:">
          <el-input v-model="formData.serverUser" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="服务器地址:">
          <el-input v-model="formData.serverHost" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="配置文件名称:">
          <el-input v-model="formData.profileName" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="主机名:">
          <el-input v-model="formData.hostname" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="网络ip:">
          <el-input v-model="formData.networkIp" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="网络端口:">
          <el-input v-model="formData.networkPort" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="sip用户名:">
          <el-input v-model="formData.sipUsername" clearable placeholder="请输入" />
        </el-form-item>
        <el-form-item label="sip域:">
          <el-input v-model="formData.sipRealm" clearable placeholder="请输入" />
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
  createSipRegistrations,
  updateSipRegistrations,
  findSipRegistrations
} from '@/api/sipRegistrations' //  此处请自行替换地址
import infoList from '@/mixins/infoList'
export default {
  name: 'SipRegistrations',
  mixins: [infoList],
  data() {
    return {
      type: '',
      formData: {
        callId: '',
        sipUser: '',
        sipHost: '',
        presenceHosts: '',
        contact: '',
        status: '',
        pingStatus: '',
        pingCount: 0,
        pingTime: 0,
        expires: 0,
        pingExpires: 0,
        userAgent: '',
        serverUser: '',
        serverHost: '',
        profileName: '',
        hostname: '',
        networkIp: '',
        networkPort: '',
        sipUsername: '',
        sipRealm: '',
      }
    }
  },
  async created() {
    // 建议通过url传参获取目标数据ID 调用 find方法进行查询数据操作 从而决定本页面是create还是update 以下为id作为url参数示例
    if (this.$route.query.id) {
      const res = await findSipRegistrations({ ID: this.$route.query.id })
      if (res.code === 0) {
        this.formData = res.data.resipRegistrations
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
          res = await createSipRegistrations(this.formData)
          break
        case 'update':
          res = await updateSipRegistrations(this.formData)
          break
        default:
          res = await createSipRegistrations(this.formData)
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
