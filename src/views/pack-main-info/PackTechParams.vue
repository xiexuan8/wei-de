<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      empty-text="暂无数据"
    >
      <el-table-column
        label="序号"
        type="index"
        align="center"
      />
      <el-table-column
        prop="prodLineCode"
        label="生产批号"
        align="center"
      />
      <el-table-column
        prop="prodCode"
        label="产品编号"
        align="center"
      />
      <el-table-column
        prop="paintColor"
        label="上色"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'EmTechParams',
  data() {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
