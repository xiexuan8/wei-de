<template>
  <div>
    <el-row>
      <el-col :span="5">
        <el-select v-model="prodLineCode" placeholder="请选择产线" @change="chooserProdLine">
          <el-option
            v-for="item in prodLineInfo"
            :key="item.prodLineCode"
            :label="item.prodLineCode"
            :value="item.prodLineCode"
          />
        </el-select>
      </el-col>
      <el-col :span="5">
        <el-select v-model="deviceCode" placeholder="请选择设备" :disabled="isShow" @change="getHtCurTemp">
          <el-option
            v-for="item in deviceInfo"
            :key="item.machineCode"
            :label="item.machineCode"
            :value="item.machineCode"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <hr>
    </el-row>
    <el-row>
      <el-col :span="12">
        <span style="margin-left: 40%">温度实时数据</span>
        <hr>
        <el-table :data="tempData" height="500">
          <el-table-column
            type="index"
            align="center"
            label="序号"
          />
          <el-table-column
            prop="curTime"
            align="center"
            label="时间"
          />
          <el-table-column
            prop="htCurTemp"
            align="center"
            label="温度"
          />
        </el-table>
        <!--<div class="block">-->
        <!--<el-pagination-->
        <!--:current-page="currentPage4"-->
        <!--:page-sizes="[100, 200, 300, 400]"-->
        <!--:page-size="100"-->
        <!--layout="total, sizes, prev, pager, next, jumper"-->
        <!--:total="400"-->
        <!--@size-change="handleSizeChange"-->
        <!--@current-change="handleCurrentChange"-->
        <!--/>-->
        <!--</div>-->
      </el-col>
      <el-col :span="12">
        <span>这儿是温度图表</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getProdLineInfo, getHtDeviceByProdLine, getHtCurTemp } from '@/api/produce'
export default {
  data() {
    return {
      currentPage4: 1,
      form: {
        temp: '',
        press: ''
      },
      isShow: true,
      deviceInfo: [],
      deviceCode: '',
      prodLineCode: '',
      produceInfo: {},
      tempData: [],
      pressData: [],
      prodLineInfo: []
    }
  },
  created() {
    this.getProdLineInfoData()
  },
  mounted() {
    this.getProdLineInfoData()
  },
  methods: {
    getProdLineInfoData() {
      getProdLineInfo().then(res => {
        this.prodLineInfo = res.data
      }).catch(err => {
        console.log(err)
      })
    },

    chooserProdLine() {
      if (this.prodLineCode.length > 0) {
        this.isShow = false
        this.deviceCode = ''
        getHtDeviceByProdLine(this.prodLineCode).then(res => {
          this.deviceInfo = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    getHtCurTemp() {
      if (this.prodLineCode.length > 0 && this.deviceCode.length > 0) {
        getHtCurTemp(this.prodLineCode, this.deviceCode).then(res => {
          this.tempData = res.data
          // console.log(res.data)
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
