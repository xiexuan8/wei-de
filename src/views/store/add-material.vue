<template>
  <div>
    <el-row>
      <div style="margin-top: 10px;margin-bottom: 10px">
        <el-col :span="6">
          <el-button type="primary" icon="el-icon-plus" plain style="float: left;" @click="addRow">选择文件</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" icon="el-icon-plus" plain @click="addRow">添加一行</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="primary" icon="el-icon-upload2" plain @click="submitRowData">提交</el-button>
        </el-col>
      </div>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      empty-text="添加数据"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
      />
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
          <el-date-picker
            v-model="scope.row.date"
            type="date"
            placeholder="选择日期"
          />
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="材料编号"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.materialCode" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="名称"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.materialName" /></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="materialNum"
        align="center"
        label="数量"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.materialNum" /></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="materialUnit"
        align="center"
        label="单位"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.materialUnit" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="测试料请选中"
        width="80"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.storeType"
            active-color="red"
            inactive-color="grey"
            active-value="true"
            inactive-value="false"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        align="center"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <div>
            <el-button type="text" size="small" style="color: red" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      newRow: {
        storeType: false,
        date: '',
        materialCode: '',
        materialName: '',
        materialNum: '',
        materialUnit: ''
      }
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    addRow() {
      this.tableData.push({
        date: '',
        materialCode: '',
        materialName: '',
        materialNum: '',
        materialUnit: ''
      })
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    submitRowData() {
      console.log('上传成功')
    }
  }
}
</script>
