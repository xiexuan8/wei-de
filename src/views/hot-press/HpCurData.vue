<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div>
          <el-form ref="form" v-model="hpTechParam" label-width="80px" label-position="left" style="margin-left: 5px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="生产批号">
                  <el-select v-model="prodLineCode" placeholder="请选择" @change="changeStatus">
                    <el-option
                      v-for="item in prodLineInfo"
                      :key="item.prodLineCode"
                      :label="item.prodLineCode"
                      :value="item.prodLineCode"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="设备">
                  <el-select v-model="deviceCode" placeholder="请选择" :disabled="deviceStatus" @change="getData">
                    <el-option
                      v-for="item in deviceInfo"
                      :key="item.machineCode"
                      :label="item.machineCode"
                      :value="item.machineCode"
                    />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="温度">
                  <el-input v-model="hpTechParam.hpTemp" style="width: 188px" disabled/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="压强">
                  <el-input v-model="hpTechParam.hpPress" style="width: 188pxpx" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="温度阈值">
                  <el-input v-model="hpTechParam.tempAlert" style="width: 188px" disabled/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="压力阈值">
                  <el-input v-model="hpTechParam.pressAlert" style="width: 188pxpx" disabled />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <el-row><hr></el-row>
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
            prop="hpCurTemp"
            align="center"
            label="温度"
          />
        </el-table>
        <div class="block">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <span>这儿是温度图表</span>
      </el-col>
    </el-row>
    <el-row><hr></el-row>
    <el-row>
      <el-col :span="12">
        <span style="margin-left: 40%">压强实时数据</span>
        <hr>
        <el-table :data="pressData" height="500">
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
            prop="hpCurPress"
            align="center"
            label="压强"
          />
        </el-table>
        <div class="block">
          <el-pagination
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-col>
      <el-col :span="12">
        <span :offset="6">这儿是压强图表</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getProdLineInfo, getHpDeviceByProdLine, getHpCurTemp, getHpCurPress, getHpTechParamsByProdLine } from '@/api/produce'
export default {
  name: 'HpCurData',
  data() {
    return {
      currentPage4: 1,
      form: {
        temp: '',
        press: ''
      },
      prodLineCode: '',
      deviceCode: '',
      deviceStatus: true,
      hpTechParam: {},
      tempData: [],
      pressData: [],
      prodLineInfo: [],
      deviceInfo: []
    }
  },
  mounted() {
    this.getProdLineInfoData()
  },
  methods: {
    getProdLineInfoData() {
      getProdLineInfo().then(res => {
        // console.log(res.data)
        this.prodLineInfo = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    getHpDeviceByProdLineData() {
      if (this.prodLineCode.length > 0) {
        this.deviceCode = ''
        this.hpTechParam = {}
        getHpDeviceByProdLine(this.prodLineCode).then(res => {
          this.deviceInfo = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    getData() {
      if (this.prodLineCode.length > 0 && this.deviceCode.length > 0) {
        getHpTechParamsByProdLine(this.prodLineCode, this.deviceCode).then(res => {
          // console.log(res)
          this.hpTechParam = res.data
        }).catch(err => {
          console.log(err)
        })
        getHpCurTemp(this.prodLineCode, this.deviceCode).then(res => {
          this.tempData = res.data
        }).catch(err => {
          console.log(err)
        })
        getHpCurPress(this.prodLineCode, this.deviceCode).then(res => {
          this.pressData = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    changeStatus() {
      this.deviceStatus = false
      this.getHpDeviceByProdLineData()
    },
    handleCurrentChange() {},
    handleSizeChange() {}
  }
}
</script>

<style scoped>

</style>
