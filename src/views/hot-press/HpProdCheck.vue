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
        prop="checkDate"
        label="检查日期"
        align="center"
      />
      <el-table-column
        prop="operatorCode"
        label="操作员"
        align="center"
      />
      <el-table-column
        prop="prodNum"
        label="产品总数"
        align="center"
      />
      <el-table-column
        prop="acceptNum"
        label="合格数"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { getHpProdCheck } from '@/api/produce'
export default {
  name: 'HpProdCheck',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getHpProdCheck().then(res => {
        // console.log(res)
        this.tableData = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
