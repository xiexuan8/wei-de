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
        type="date"
        align="center"
      />
      <el-table-column
        prop="staffName"
        label="操作员"
        align="center"
      />
      <el-table-column
        prop="innerArc"
        label="内弧"
        align="center"
      />
      <el-table-column
        prop="smallOneSide"
        label="小头1"
        align="center"
      />
      <el-table-column
        prop="smallAnotherSide"
        label="小头2"
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
import { getIgProdCheck } from '@/api/produce'
export default {
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
      getIgProdCheck().then(res => {
        this.tableData = res.data
        // console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
