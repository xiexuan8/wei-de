<template>
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
      prop="machineCode"
      label="生产批号"
      align="center"
    />
    <el-table-column
      prop="curTime"
      label="时间"
      align="center"
    />
    <el-table-column
      prop="describeInfo"
      label="详情"
      align="center"
    />
    <el-table-column
      prop="dealWay"
      label="处理"
      align="center"
    />
  </el-table>
</template>

<script>
import { getHtError } from '@/api/produce'
export default {
  name: 'HpError',
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
      getHtError().then(res => {
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
