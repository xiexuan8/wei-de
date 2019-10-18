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
    <el-row>
      <div style="margin-top: 5px;margin-bottom: 5px">
        <span style="font-family: bold">输入配方编号：</span><el-input v-model="ingredientCode" placeholder="输入配方编号" style="width: 200px"></el-input>
        <span style="font-family: bold">输入产品编号：</span><el-input v-model="ingredientCode" placeholder="输入产品编号（选填）" style="width: 200px"></el-input>
      </div>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      empty-text="添加数据"
    >
      <el-table-column
        type="index"
        align="center"
        label="序号"
        width="80"
      />
      <el-table-column
        align="center"
        label="物料编号"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.materialCode" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="物料配比"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.ingredientProportion" /></div>
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
      ingredientCode: '',
      newRow: {
        materialCode: '',
        ingredientProportion: ''
      }
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    addRow() {
      this.tableData.push({
        materialCode: '',
        ingredientProportion: ''
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
