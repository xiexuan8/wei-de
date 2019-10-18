<template>
  <div>
    <el-table
      :data="tableData"
      height="800"
      border
      style="width: 100%"
    >
      <el-table-column
        type="index"
        align="center"
        label="序号"
        width="80"
      />
      <el-table-column
        prop="date"
        align="center"
        contenteditable="true"
        label="日期"
      >
        <template slot-scope="scope">
          <div v-if="!scope.row.rowEditStatus">{{ scope.row.date }}</div>
          <div v-else><el-input v-model="scope.row.date" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="材料编号"
      >
        <template slot-scope="scope">
          <div v-if="!scope.row.rowEditStatus">{{ scope.row.materialCode }}</div>
          <div v-else><el-input v-model="scope.row.materialCode" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="名称"
      >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <span>点击查看<span style="color: green">{{ scope.row.materialName }}</span>详细信息</span>
            <div slot="reference" class="name-wrapper">
              <a type="text" size="small" style="color: blue" @click="readComplexInfo(scope.row)">{{ scope.row.materialName }}</a>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        prop="materialNum"
        align="center"
        label="数量"
      >
        <template slot-scope="scope">
          <div v-if="!scope.row.rowEditStatus">{{ scope.row.materialNum }}</div>
          <div v-else><el-input v-model="scope.row.materialNum" /></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="materialUnit"
        align="center"
        label="单位"
      >
        <template slot-scope="scope">
          <div v-if="!scope.row.rowEditStatus">{{ scope.row.materialUnit }}</div>
          <div v-else><el-input v-model="scope.row.materialUnit" /></div>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <div v-if="scope.row.rowEditStatus">
            <el-button type="text" size="small" style="color: red" @click="confirmEditMaterialInfo(scope.row)">确认</el-button>
            <el-button type="text" size="small" style="color: red" @click="cancelEditMaterialInfo(scope.row)">取消</el-button>
          </div>
          <div v-else>
            <el-button type="text" size="small" @click="editMaterialInfo(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="deleteMaterialInfo(scope.row)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'StoreInfo',
  data() {
    return {
      centerDialogVisible: false,
      rowEditStatus: true,
      tableData: [{
        date: '2016-05-03',
        materialCode: 'ZJSF1',
        materialName: '重晶石粉',
        materialNum: 10,
        materialUnit: 'g',
        rowEditStatus: false
      }, {
        date: '2016-05-03',
        materialCode: 'BHWZ1',
        materialName: '玻化微珠',
        materialNum: 11,
        materialUnit: 't',
        rowEditStatus: false
      }, {
        date: '2016-05-03',
        materialCode: 'SZ1',
        materialName: '树脂',
        materialNum: 13,
        materialUnit: 'kg',
        rowEditStatus: false
      }, {
        date: '2016-05-03',
        materialCode: 'SHS1',
        materialName: '石灰石',
        materialNum: 14,
        materialUnit: 'kg',
        rowEditStatus: false
      }, {
        date: '2016-05-03',
        materialCode: 'NHJ1',
        materialName: '粘合剂',
        materialNum: 15,
        materialUnit: 'kg',
        rowEditStatus: false
      }, {
        date: '2016-05-03',
        materialCode: 'ZJSF2',
        materialName: '重晶石粉',
        materialNum: 16,
        materialUnit: 'kg',
        rowEditStatus: false
      }, {
        date: '2016-05-03',
        materialCode: 'ZJSF3',
        materialName: '重晶石粉',
        materialNum: 17,
        materialUnit: 'kg',
        rowEditStatus: false
      }]
    }
  },
  methods: {
    editMaterialInfo(row) {
      row.rowEditStatus = !row.rowEditStatus
      console.log('编辑：' + row)
    },
    deleteMaterialInfo(row) {
      console.log('删除：' + row)
    },
    confirmEditMaterialInfo(row) {
      row.rowEditStatus = false
    },
    cancelEditMaterialInfo(row) {
      row.rowEditStatus = false
    },
    readComplexInfo(row) {
      this.centerDialogVisible = true
      console.log('详细信息')
    }
  }
}
</script>

<style scoped>

</style>
