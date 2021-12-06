<template>
  <div>
    <div class="gva-search-box">
      <el-form :inline="true" :model="searchInfo" class="demo-form-inline">
        <el-form-item label="注册用户">
          <el-input v-model="searchInfo.sipUser" placeholder="搜索条件" />
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
          <el-button size="mini" icon="el-icon-refresh" @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="gva-table-box">
        <el-table
        ref="multipleTable"
        style="width: 100%"
        tooltip-effect="dark"
        :data="tableData"
        row-key="ID"
        @selection-change="handleSelectionChange"
        >
        <el-table-column type="selection" width="55" />

        <el-table-column align="left" label="注册用户" prop="sipUser" width="120" />
        <el-table-column align="left" label="注册地址" prop="sipHost" width="120" />
        <el-table-column align="left" label="地址" prop="presenceHosts" width="120" />
        <el-table-column align="left" label="联系地址" prop="contact" width="120" />
        <el-table-column align="left" label="状态" prop="status" width="120" />

        <el-table-column align="left" label="失效" prop="expires" width="120" />
        <el-table-column align="left" label="ping失效" prop="pingExpires" width="120" />
        <el-table-column align="left" label="用户代理" prop="userAgent" width="120" />
        <el-table-column align="left" label="服务器用户" prop="serverUser" width="120" />
        <el-table-column align="left" label="服务器地址" prop="serverHost" width="120" />
        <el-table-column align="left" label="配置文件名称" prop="profileName" width="120" />
        <el-table-column align="left" label="主机名" prop="hostname" width="120" />
        <el-table-column align="left" label="网络ip" prop="networkIp" width="120" />
        <el-table-column align="left" label="网络端口" prop="networkPort" width="120" />
        <el-table-column align="left" label="sip用户名" prop="sipUsername" width="120" />
        <el-table-column align="left" label="sip域" prop="sipRealm" width="120" />

        </el-table>
        <div class="gva-pagination">
            <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="page"
            :page-size="pageSize"
            :page-sizes="[10, 30, 50, 100]"
            :total="total"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            />
        </div>
    </div>
    <el-dialog v-model="dialogFormVisible" :before-close="closeDialog" title="弹窗操作">
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
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button size="small" @click="closeDialog">取 消</el-button>
          <el-button size="small" type="primary" @click="enterDialog">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {
  createSipRegistrations,
  deleteSipRegistrations,
  deleteSipRegistrationsByIds,
  updateSipRegistrations,
  findSipRegistrations,
  getSipRegistrationsList
} from '@/api/sipRegistrations' //  此处请自行替换地址
import infoList from '@/mixins/infoList'
export default {
  name: 'SipRegistrations',
  mixins: [infoList],
  data() {
    return {
      listApi: getSipRegistrationsList,
      dialogFormVisible: false,
      type: '',
      deleteVisible: false,
      multipleSelection: [],
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
    await this.getTableData()
  },
  methods: {
  onReset() {
    this.searchInfo = {}
  },
  // 条件搜索前端看此方法
    onSubmit() {
      this.page = 1
      this.pageSize = 10
      this.getTableData()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    deleteRow(row) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteSipRegistrations(row)
      })
    },
    async onDelete() {
      const ids = []
      if (this.multipleSelection.length === 0) {
        this.$message({
          type: 'warning',
          message: '请选择要删除的数据'
        })
        return
      }
      this.multipleSelection &&
        this.multipleSelection.map(item => {
          ids.push(item.ID)
        })
      const res = await deleteSipRegistrationsByIds({ ids })
      if (res.code === 0) {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        if (this.tableData.length === ids.length && this.page > 1) {
          this.page--
        }
        this.deleteVisible = false
        this.getTableData()
      }
    },
    async updateSipRegistrations(row) {
      const res = await findSipRegistrations({ ID: row.ID })
      this.type = 'update'
      if (res.code === 0) {
        this.formData = res.data.resipRegistrations
        this.dialogFormVisible = true
      }
    },
    closeDialog() {
      this.dialogFormVisible = false
      this.formData = {
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
    },
    async deleteSipRegistrations(row) {
      const res = await deleteSipRegistrations({ ID: row.ID })
      if (res.code === 0) {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        if (this.tableData.length === 1 && this.page > 1) {
          this.page--
        }
        this.getTableData()
      }
    },
    async enterDialog() {
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
        this.closeDialog()
        this.getTableData()
      }
    },
    openDialog() {
      this.type = 'create'
      this.dialogFormVisible = true
    }
  },
}
</script>

<style>
</style>
