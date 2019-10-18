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
        prop="productionCode"
        align="center"
        label="产品编号"
      />
      <el-table-column
        prop="productionName"
        align="center"
        label="产品名"
      />
      <el-table-column
        prop="ingredientCode"
        align="center"
        label="配方编号"
      />
      <el-table-column
        prop="frictionOfNormal"
        align="center"
        label="正常摩擦系数"
        sortable
      />
      <el-table-column
        prop="frictionOfHeatNormal"
        align="center"
        label="热摩擦系数"
        sortable
      />
      <el-table-column
        prop="hardness"
        align="center"
        label="硬度"
        sortable
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ProductionInfo',
  data() {
    return {
      tableData: [
        {
          productionCode: 'prod1',
          productionName: '产品1',
          ingredientCode: 'PF001',
          frictionOfNormal: '0.466',
          frictionOfHeatNormal: '0.34',
          hardness: 79
        },
        {
          productionCode: 'prod2',
          productionName: '产品2',
          ingredientCode: 'PF002',
          frictionOfNormal: '0.46',
          frictionOfHeatNormal: '0.84',
          hardness: 60
        },
        {
          productionCode: 'prod3',
          productionName: '产品3',
          ingredientCode: 'PF003',
          frictionOfNormal: '0.467',
          frictionOfHeatNormal: '0.38',
          hardness: 78
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
