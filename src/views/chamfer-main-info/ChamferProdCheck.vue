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
        prop="longOut"
        label="长外"
        align="center"
      />
      <el-table-column
        prop="shortOut"
        label="短外"
        align="center"
      />
      <el-table-column
        prop="longInner"
        label="长内"
        align="center"
      />
      <el-table-column
        prop="shortInner"
        label="短内"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { getChProdCheck } from '@/api/produce'
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
      getChProdCheck().then(res => {
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
