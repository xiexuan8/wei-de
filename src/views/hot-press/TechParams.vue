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
        prop="machineCode"
        label="设备编号"
        align="center"
      />
      <el-table-column
        prop="hpTemp"
        label="温度"
        align="center"
      />
      <el-table-column
        prop="hpPress"
        label="压力"
        align="center"
      />
      <el-table-column
        prop="constantTime"
        label="时长"
        align="center"
      />
      <el-table-column
        prop="tempAlert"
        label="温度警戒值"
        align="center"
      />
      <el-table-column
        prop="pressAlert"
        label="压力警戒值"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { getHpTechParams } from '@/api/produce'
export default {
  name: 'TechParams',
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
      getHpTechParams().then(res => {
        // console.log(res.data)
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
