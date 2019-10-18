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
        label="生产批号"
        align="center"
      />
      <el-table-column
        prop="holeNum"
        label="孔数"
        align="center"
      />
      <el-table-column
        prop="holeRadius"
        label="孔径"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { getPunchTechParams } from '@/api/produce'
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
      getPunchTechParams().then(res => {
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
