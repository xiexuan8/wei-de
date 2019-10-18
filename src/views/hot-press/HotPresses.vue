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
        prop="operatorCode"
        label="操作员"
        align="center"
      />
      <el-table-column
        prop="machineCode"
        label="设备"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { getHpMainInfo } from '@/api/produce'
export default {
  name: 'HotPresses',
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
      getHpMainInfo().then(res => {
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
