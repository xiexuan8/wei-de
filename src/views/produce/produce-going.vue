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
        prop="produceCode"
        align="center"
        label="生产批号"
      />
      <el-table-column
        prop="ingredientCode"
        align="center"
        label="配方编号"
      />
      <el-table-column
        prop="productionCode"
        align="center"
        label="产品编号"
      />
      <el-table-column
        prop="produceDateStart"
        align="center"
        label="开始日期"
      />
      <el-table-column
        prop="produceDateFinish"
        align="center"
        label="结束日期"
      />
      <el-table-column
        prop="produceStatus"
        align="center"
        label="生产状态"
      >
        <template slot-scope="scope">
          <el-tag type="info" v-if="scope.row.produceStatus===1">{{scope.row.produceStatusMsg}}</el-tag>
          <el-tag type="warning" v-else-if="scope.row.produceStatus===2">{{scope.row.produceStatusMsg}}</el-tag>
          <el-tag type="success" v-else>{{scope.row.produceStatusMsg}}</el-tag>
          <!--<el-tag :type="scope.row.productionStatus===1?'info':scope.row.productionStatus===2?'warning':'success'">{{scope.row.produceStatusMsg}}</el-tag>-->
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="80"
      >
        <template slot-scope="scope">
          <a style="color: blue" @click="showDetail(scope.row)">查看</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          produceCode: 'SH001',
          productionCode: 'CP1',
          ingredientCode: 'PF001',
          produceDateStart: '2019/9/5',
          produceDateFinish: '2019/9/7',
          produceStatus: 1,
          produceStatusMsg: '未开始'
        },
        {
          produceCode: 'SH001',
          productionCode: 'CP1',
          ingredientCode: 'PF001',
          produceDateStart: '2019/9/5',
          produceDateFinish: '2019/9/7',
          produceStatus: 2,
          produceStatusMsg: '进行中'
        },
        {
          produceCode: 'SH002',
          productionCode: 'CP2',
          ingredientCode: 'PF001',
          produceDateStart: '2019/9/5',
          produceDateFinish: '2019/9/7',
          produceStatus: 3,
          produceStatusMsg: '结束'
        }
      ]
    }
  },
  methods: {
    showDetail(row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
