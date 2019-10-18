<template>
  <div>
    <el-table
      :data="tableData1"
      stripe
      border
      style="width: 100%"
      :span-method="objectSpanMethod"
      empty-text="暂无数据"
    >
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
        prop="htSetTemp"
        label="温度"
        align="center"
      />
      <el-table-column
        prop="constantTime"
        label="时长"
        align="center"
      />
      <el-table-column
        prop="tempChange"
        label="温度变化率"
        align="center"
      />
      <el-table-column
        label="温度曲线"
        align="center"
      >
        <template slot-scope="scope">
          <div :id="scope.row.machineCode" style="width: 100%;height: 300px" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getHtTechParams } from '@/api/produce'
export default {
  name: 'HtTechParams',
  data() {
    return {
      tableData: [
        {
          prodLineCode: 'CX1',
          htSetTemp: 100,
          constantTime: 1,
          tempChange: 0.5,
          recordNum: 10
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 100,
          constantTime: 2,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 120,
          constantTime: 2.5,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 120,
          constantTime: 3.5,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 135,
          constantTime: 4,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 135,
          constantTime: 5,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 150,
          constantTime: 5.5,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 150,
          constantTime: 6.5,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 160,
          constantTime: 7,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX1',
          htSetTemp: 160,
          constantTime: 11,
          tempChange: 0.5,
          recordNum: null
        },
        {
          prodLineCode: 'CX2',
          htSetTemp: 10,
          constantTime: 1,
          tempChange: 0.5,
          recordNum: 2
        },
        {
          prodLineCode: 'CX2',
          htSetTemp: 10,
          constantTime: 1,
          tempChange: 0.5,
          recordNum: null
        }
      ],
      tableData1: [],
      prodLinePic: []
    }
  },
  mounted() {
    this.getData()
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getHtTechParams().then(res => {
        // console.log(res)
        this.tableData1 = res.data
        this.initEcharts()
      }).catch(err => {
        console.log(err)
      })
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 5 || columnIndex === 1) {
        if (row.recordNum !== null) {
          return {
            rowspan: row.recordNum,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    initEcharts() {
      var index = 0
      var flag = true
      // console.log(this.tableData1)
      while (flag) {
        const myChart = this.$echarts.init(document.getElementById(this.tableData1[index].machineCode))

        var xdata = []
        var ydata = []
        var xydata = []
        xdata[0] = 0
        ydata[0] = 23
        xydata[0] = [0, 23]
        var sum = 0.5
        var j = 1
        for (var i = index; i < this.tableData1[index].recordNum + index; i++) {
          ydata[j] = this.tableData1[i].htSetTemp
          xdata[j] = sum
          xydata[j] = [xdata[j], ydata[j]]
          j++
          sum = sum + this.tableData1[i].constantTime
          ydata[j] = this.tableData1[i].htSetTemp
          xdata[j] = sum
          xydata[j] = [xdata[j], ydata[j]]
          // sum = sum + 0.5
          if (i === this.tableData1.length - 1) {
            sum = sum + 0.5
          } else {
            sum = sum + (this.tableData1[i + 1].htSetTemp - this.tableData1[i].htSetTemp) / this.tableData1[i].tempChange
          }
          j++
        }
        // console.log(index)
        myChart.setOption({
          // title: {
          //   text: 'ECharts 数据统计'
          // },
          tooltip: {
            formatter: function(params) {
              return '时刻: ' + params.data[0].toFixed(1) + '<br>温度: ' + params.data[1]
            }
          },
          legend: {
            data: ['用户来源']
          },
          xAxis: {
            // data: ['Android', 'IOS', 'PC', 'Ohter']
            // data: xdata
          },
          yAxis: {
            max: 180
            // min: 90
          },
          series: [{
            name: '温度',
            type: 'line',
            // data: [500, 200, 360, 100]
            data: xydata
          }]
        })
        // console.log(myChart)
        index = index + this.tableData1[index].recordNum
        if (index === this.tableData1.length) {
          flag = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
