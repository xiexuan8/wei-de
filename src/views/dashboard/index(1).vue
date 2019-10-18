<template>
  <div class="dashboard-container">
    <el-button v-print="'#printTest1'" icon="el-icon-printer" style="margin:0 0 20px 20px;" type="primary">打印</el-button>
    <el-button icon="el-icon-upload2" style="margin:0 0 20px 20px;" type="primary" @click="uploadData">导入数据</el-button>
    <div id="printTest1">
      <span style="font-size: 20px; margin-left: 10px">绍兴韦德汽配有限公司</span>
      <!--    <div style="border:1px solid #CCC; margin-left: 10px"></div>-->
      <hr>
      <h2 align="center" style="font-size: 30px">蔡斯试验机试验报告</h2>
      <!--<span>-->
      <table class="table1">
        <tr>
          <td>材质：{{ form.material }}</td>
          <td>实验编号：{{ form.testNum }}</td>
          <!--            <td>材质：1</td>-->
          <!--            <td>试验编号：2</td>-->
        </tr>
        <tr>
          <td>执行标准：{{ form.operativeNorm }}</td>
          <td>实验单位：{{ form.testUnit }}</td>
          <!--            <td>执行标准：3</td>-->
          <!--            <td>实验单位：4</td>-->
        </tr>
        <tr>
          <td align="center">质量/g</td>
          <td align="center">厚度/mm</td>
        </tr>
        <tr>
          <!--            <td>初始：5</td>-->
          <!--            <td align="center">6</td>-->
          <td>初始：<span style="float: right;margin-right: 50%">{{ form.initialQuality }}</span></td>
          <!--<td>初始：{{ form.initialQuality }}</td>-->
          <td align="center">{{ form.initialThickness }}</td>
        </tr>
        <tr>
          <!--            <td>最后：7</td>-->
          <!--            <td align="center">8</td>-->
          <td>最后：{{ form.finalQuality }}</td>
          <td align="center">{{ form.finalThickness }}</td>
        </tr>
        <tr>
          <!--            <td>磨损：9</td>-->
          <!--            <td align="center">10</td>-->
          <td>磨损：{{ form.wtQuality }}</td>
          <td align="center">{{ form.wtThickness }}</td>
        </tr>
        <tr>
          <!--            <td>磨损率：11</td>-->
          <!--            <td align="center">12</td>-->
          <td>磨损率：{{ form.wtrateQuality }}%</td>
          <td align="center">{{ form.wtrateThickness }}%</td>
        </tr>
        <tr>
          <!--            <td>正常摩擦系数：13</td>-->
          <!--            <td>热摩擦系数：14</td>-->
          <td>正常摩擦系数：{{ form.normalFirction }}</td>
          <td>热摩擦系数：{{ form.thermalFriction }}</td>
        </tr>
      </table>
    </div>
    <!--    <table style="margin-top: 5px">-->
    <div>
      <table class="table2" rules="none" frame="void">
        <tr align="center">
          <td>制动次数</td>
          <td>摩擦力/N</td>
          <td>温度/°C</td>
          <td>摩擦系数/μ</td>
          <td>制动次数</td>
          <td>摩擦力/N</td>
          <td>温度/°C</td>
          <td>摩擦系数/μ</td>
        </tr>
      </table>
    </div>
    <div>
      <table class="table3" rules="all">
        <!--        <tr align="center">第一次基线</tr>-->
        <tr>
          <td colspan="8">第一次基线</td>
        </tr>
        <tr v-for="list in firstBLLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
        <tr>
          <td colspan="8">第一次衰退</td>
        </tr>
        <tr v-for="list in firstDeclineLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
        <tr>
          <td colspan="8">第一次恢复</td>
        </tr>
        <tr v-for="list in firstRecoverLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
        <tr>
          <td colspan="8">磨损试验</td>
        </tr>
        <tr v-for="list in attritionTestLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
        <tr>
          <td colspan="8">第二次衰退</td>
        </tr>
        <tr v-for="list in secondDeclineLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
        <tr>
          <td colspan="8">第二次恢复</td>
        </tr>
        <tr v-for="list in secondRecoverLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
        <tr>
          <td colspan="8">第二次基线</td>
        </tr>
        <tr v-for="list in secondBLLists" align="center">
          <td>{{ list.brakingTimes }}</td>
          <td>{{ list.friction }}</td>
          <td>{{ list.temperature }}</td>
          <td>{{ list.frictionCoefficient }}</td>
          <td>{{ list.brakingTimes1 }}</td>
          <td>{{ list.friction1 }}</td>
          <td>{{ list.temperature1 }}</td>
          <td>{{ list.frictionCoefficient1 }}</td>
        </tr>
      </table>
    </div>
    <div>
      <table class="table4" rules="none" frame="void">
        <tr align="center">
          <td colspan="3">试验员：</td>
          <td colspan="3">检验日期：{{ form.inspectionData }}</td>
          <td colspan="2">审核：</td>
        </tr>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  const URL = 'http://127.0.0.1:8888/chaseReport'

  export default {
    data() {
      return {
        form: {
          wtrateThickness: '',
          wtrateQuality: '',
          wtThickness: '',
          wtQuality: '',
          finalThickness: '',
          finalQuality: '',
          initialQuality: 122,
          initialThickness: '',
          material: '', // 材质
          testNum: '19-193-10', // 实验编号
          operativeNorm: '', // 执行标准
          testUnit: '', // 实验单位
          inspectionData: '', // 检验日期
          qualityParamsList: [], // 质量参数
          thicknessParamsList: [], // 厚度参数
          normalFirction: '', // 正常摩擦系数
          thermalFriction: ''// 热摩擦系数
        },
        firstBLLists: [], // 第一次基线
        firstDeclineLists: [], // 第一次衰退
        firstRecoverLists: [], // 第一次恢复
        attritionTestLists: [], // 磨损试验
        secondDeclineLists: [], // 第二次衰退
        secondRecoverLists: [], // 第二次恢复
        secondBLLists: [] // 第二次基线
      }
    },

    mounted() {
      this.showChaseReport()
    },

    methods: {
      resizeArray(list) {
        // var listSize = list.length
        var temp = []
        var k = 0
        for (var i = 0; i < list.length; i = i + 2) {
          if (i + 1 >= list.length) {
            temp[k] = {
              brakingTimes: list[i].brakingTimes,
              friction: list[i].friction,
              temperature: list[i].temperature,
              frictionCoefficient: list[i].frictionCoefficient,
              brakingTimes1: '',
              friction1: '',
              temperature1: '',
              frictionCoefficient1: ''
            }
            break
          }
          temp[k] = {
            brakingTimes: list[i].brakingTimes,
            friction: list[i].friction,
            temperature: list[i].temperature,
            frictionCoefficient: list[i].frictionCoefficient,
            brakingTimes1: list[i + 1].brakingTimes,
            friction1: list[i + 1].friction,
            temperature1: list[i + 1].temperature,
            frictionCoefficient1: list[i + 1].frictionCoefficient
          }
          k++
        }

        return temp
        // console.log(temp)
        // output = temp
      },
      showChaseReport() {
        axios.get(`${URL}/showChaseReport`, {
          params: {
            testNum: this.form.testNum
          }
        }).then(res => {
          for (var key in res.data.chaseBaseParamsData) {
            if (key === 'firstRecoverList') {
              this.firstRecoverLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
            } else if (key === 'firstDeclineList') {
              this.firstDeclineLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
            } else if (key === 'secondDeclineList') {
              this.secondDeclineLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
            } else if (key === 'secondRecoverList') {
              console.log(res.data.chaseBaseParamsData[ key ])
              this.secondRecoverLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
            } else if (key === 'attritionTestList') {
              this.attritionTestLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
            } else if (key === 'firstBaselineList') {
              // this.firstBLLists =
              this.firstBLLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
              // console.log(this.resizeArray(this.firstBLLists))
            } else if (key === 'secondBaselineList') {
              this.secondBLLists = this.resizeArray(res.data.chaseBaseParamsData[ key ])
            }
          }
        }).catch(error => {
          console.log(error)
        })
      },
      uploadData() {}
    }
  }
</script>

<style lang="scss" scoped>
  .dashboard {
    &-container {
      margin: 30px;
    }

    &-text {
      font-size: 30px;
      line-height: 46px;
    }
  }
</style>

<style type="text/css" scoped>
  .table1 {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
  }

  .table1 td {
    border: 1px solid black;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .table2 {
    width: 100%;
    margin-top: 5px;
    table-layout: fixed;
  }

  .table2 td {
    padding: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }

  .table3 {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    text-align: center;
    margin-top: 5px;
    table-layout: fixed;
  }

  .table3 td {
    border: 1px solid black;
    padding: 5px;
    word-break: break-all;
    word-wrap: break-word;
  }

  .table4 {
    width: 100%;
    margin-top: 5px;
    font-size: 20px;
  }
</style>

