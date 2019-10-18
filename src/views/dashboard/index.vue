<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card style="margin-left: 5px;margin-top: 5px">
          <div slot="header" class="clearfix">
            <span style="font-family: bold">搜索配方：</span>
            <el-input
              v-model="search"
              placeholder="搜索配方号..."
              size="normal"
              style="width: 300px; margin-left: 10px"
            />
          </div>
          <el-table
            ref="multipleFormulaTable"
            :data="formula.filter(data => !search || data.code.toLowerCase().includes(search.toLowerCase()))"
            :span-method="formulaSpanMethod"
            border
            style="width: 100%; margin-top: 20px"
            @selection-change="formulaSelectionChange"
          >
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              prop="code"
              label="配方号"
            />
            <el-table-column
              prop="partIngredient"
              label="成分"
            />
            <el-table-column
              prop="weight"
              label="重量（KG）"
            />
          </el-table>
        </el-card>
      </el-col>

      <el-col :span="12">
        <div style="float: right;margin-top: 5px">
          <el-button type="primary" plain @click="nextStep">下一步（混料）<i class="el-icon-arrow-right el-icon--right" />
          </el-button>
        </div>
        <el-card style="margin-left: 5px;margin-top: 50px">

          <el-table
            :data="selectedFormula"
            :span-method="formulaSpanMethod"
            border
            style="width: 100%; margin-top: 20px"
          >
            <el-table-column
              prop="code"
              label="配方号"
            />
            <el-table-column
              prop="partIngredient"
              label="成分"
            />
            <el-table-column
              prop="weight"
              label="重量（KG）"
            />
          </el-table>
          <el-button @click="test">测试</el-button>
          <!--<el-form :label-position="labelPosition" label-width="50px" :>-->

          <!--</el-form>-->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  getAllFormula,
  selectOneFormula
} from '@/api/process_step1'

export default {
  name: 'IngredientInfo',
  data() {
    return {
      labelPosition: 'left',
      productionNum: '',
      step: '',
      produceCode: '',
      stepEditStatus1: '',
      formula: [],
      count_first: [], // 记下每个配方表第一个成分的位置，长度是多少个配方表
      count: [], // 每个配方表多少成分
      search: '',
      selectedFormula: [],
      selectedFormula1: [],
      selectedFormulaCode: [],
      multipleFormulaSelection: [],
      selectCount: 0
    }
  },
  //
  // watch: {
  //   selectedFormulaCode() {
  //     // console.log(this.selectedFormulaCode)
  //     this.selectedFormula = []
  //
  //     for (const i in this.selectedFormulaCode) {
  //       for (const j in this.formula) {
  //         if (this.formula[j].code === this.selectedFormulaCode[i]) {
  //           this.selectedFormula.push(this.formula[j])
  //         }
  //       }
  //     }
  //     console.log(this.selectedFormula)
  //   }
  // },

  created() {
    if (this.$route.query.stepEditStatus === 1) {
      this.stepEditStatus = false
    } else {
      this.stepEditStatus = true
      // this.calculateNum()
    }
    this.getRouterData()
    this.getAllList()
  },

  methods: {
    getAllList() {
      getAllFormula().then(res => {
        // this.count = []
        // this.count_first = []

        for (let j = 0; j < res.data.length;) {
          let i = j

          for (; i < res.data.length; i++) {
            if (res.data[j].id === res.data[i].id) {
              this.formula.push({
                code: res.data[i].id,
                partIngredient: res.data[i].partIngredient,
                weight: res.data[i].weight
              })
            } else { break }
          }
          this.count_first.push(j)
          this.count.push(i - j)
          j = i
        }
      })
    },

    getOneIngredient(FormulaCode) {
      selectOneFormula(FormulaCode).then(res => {
        this.selectedFormula.push(res.data)
        // console.log('------',this.selectedFormula)
      })
    },

    formulaSelectionChange(val) {
      // console.log(val)
      this.selectedFormulaCode = []

      if (val.length > 2) {
        alert('最多同时选两种配方')
        this.$refs.multipleFormulaTable.clearSelection()
      } else {
        for (const i in val) {
          this.selectedFormulaCode.push(val[i].code)
        }
      }

      // this.test()
      // this.selectedFormula.push({
      //   code: '1111'
      // })
    },

    test() {
      this.selectedFormula.push({
        code: ''
      })
    },

    // 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex
    formulaSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        let i = 0
        for (; i < this.count.length; i++) {
          if (rowIndex === this.count_first[i]) {
            return {
              rowspan: this.count[i],
              colspan: 1
            }
          }
        }
        return {
          rowspan: 0,
          colspan: 0
        }
      }
    },

    getRouterData() {
      this.step = this.$route.query.step
      this.produceCode = this.$route.query.produceCode
    },
    calculateNum() {
      if (!isNaN(this.productionNum)) {
        var temp = this.ingredient.data
        for (var i = 0; i < temp.length; i++) {
          temp[i].materialNum = this.productionNum * temp[i].ingredientProportion
          temp[i].storeRemain = temp[i].storeNum - temp[i].materialNum
        }
        this.ingredient.data = temp
      } else {
        this.$message({
          message: '请输入数字',
          type: 'warning'
        })
        this.productionNum = ''
      }
    },
    nextStep: function() {
    }
  }
}
</script>

<style scoped>

</style>
