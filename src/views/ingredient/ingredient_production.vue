<template>
  <div>
    <el-table
      :data="tableData"
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
        prop="ingredientCode"
        align="center"
        label="配方编号"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="light" content="查看详细信息" placement="top-start">
            <a style="color: blue" @click="readComplexIngredientInfo(scope.row)">{{ scope.row.ingredientCode }}</a>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column
        prop="productionCode"
        align="center"
        contenteditable="true"
        label="产品信息"
      >
        <template slot-scope="scope">
          <el-tooltip class="item" effect="light" content="查看详细信息" placement="top-start">
            <a style="color: blue" @click="readComplexProdInfo(scope.row)">{{ scope.row.productionCode }}</a>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="配方详细信息"
      :visible.sync="ingredientStatus"
      width="30%"
      center>
      <span>查询配方</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ingredientStatus = false">取 消</el-button>
        <el-button type="primary" @click="ingredientStatus = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="产品详细信息"
      :visible.sync="productionStatus"
      width="30%"
      center>
      <span>查询产品</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="productionStatus = false">取 消</el-button>
        <el-button type="primary" @click="productionStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'IngredientProduction',
  data() {
    return {
      ingredientStatus: false,
      productionStatus: false,
      tableData: [
        {
          ingredientCode: 'PF001',
          productionCode: 'prod1'
        },
        {
          ingredientCode: 'PF002',
          productionCode: 'prod2'
        },
        {
          ingredientCode: 'PF003',
          productionCode: 'prod3'
        },
        {
          ingredientCode: 'PF004',
          productionCode: 'prod4'
        }
      ]
    }
  },
  methods: {
    readComplexIngredientInfo(row) {
      this.ingredientStatus = true
      console.log('配方详细信息')
    },
    readComplexProdInfo(row) {
      this.productionStatus = true
      console.log('产品详细信息')
    }
  }
}
</script>

<style scoped>

</style>
