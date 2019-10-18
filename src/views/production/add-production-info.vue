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
        prop="productionCode"
        align="center"
        contenteditable="true"
        label="产品编号"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.productionCode" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="产品名"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.productionName" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="配方编号"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.ingredientCode" /></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="materialNum"
        align="center"
        label="正常摩擦系数"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.frictionOfNormal" /></div>
        </template>
      </el-table-column>
      <el-table-column
        prop="materialUnit"
        align="center"
        label="热摩擦系数"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.frictionOfHeatNormal" /></div>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="硬度"
        width="80"
      >
        <template slot-scope="scope">
          <div><el-input v-model="scope.row.hardness" /></div>
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
        productionCode: '',
        productionName: '',
        ingredientCode: '',
        frictionOfNormal: '',
        frictionOfHeatNormal: '',
        hardness: ''
      }
    }
  },

  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    addRow() {
      this.tableData.push({
        productionCode: '',
        productionName: '',
        ingredientCode: '',
        frictionOfNormal: '',
        frictionOfHeatNormal: '',
        hardness: ''
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
