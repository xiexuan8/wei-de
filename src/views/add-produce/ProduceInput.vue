<template>
  <div class="main">
    <el-row>
      <el-col :span="12">
        <el-form
          ref="form"
          :model="form"
          label-width="100px"
          label-position="right"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="生产批号：">
                <el-input v-model="form.prodLineCode" style="width: 200px;" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="开始日期：">
                <el-date-picker v-model="form.produceDateStart" style="width: 200px;" placeholder="请选择" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="配方编号：">
                <el-select v-model="form.ingredientCode" style="width: 200px" placeholder="请选择">
                  <el-option
                    v-for="item in ingredients"
                    :key="item.ingredientCode"
                    :label="item.ingredientCode"
                    :value="item.ingredientCode"
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="总重：">
                <el-input v-model="form.prodFinalWeight" style="width: 200px" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="热压温度：">
                <el-input v-model="form.hpTemp" style="width: 200px" />
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="热压压力：">
                <el-input v-model="form.hpPress" style="width: 200px" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <hr>
            <header align="center">热处理参数</header>
            <hr>
            <el-table
              border
              width="80%"
              icon="el-icon-plus"
              :data="form.htTechParams"
            >
              <el-table-column
                label="温度"
                align="center"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.htSetTemp" />
                </template>
              </el-table-column>
              <el-table-column
                prop="constantTime"
                label="时长"
                align="center"
              >
                <template slot-scope="scope">
                  <el-input v-model="scope.row.constantTime" />
                </template>
              </el-table-column>
              <el-table-column
                label=" "
                align="center"
              >
                <template>
                  <el-button type="info" icon="el-icon-circle-plus" circle />
                  <el-button type="danger" icon="el-icon-remove" circle />
                </template>
              </el-table-column>
              <template>
                <el-button>添加</el-button>
              </template>
            </el-table>
          </el-row>
        </el-form>
      </el-col>
      <el-col :span="12">
        <el-row>
          <div v-if="form.ingredientCode.length>0&&form.prodFinalWeight.length>0">
            <header align="center">配比详情</header>
            <hr>
            <el-table
              border
              width="100%"
              :data="ingredientDetail"
            >
              <el-table-column
                type="index"
                label="序号"
                width="80"
                align="center"
              />
              <el-table-column
                prop="materialName"
                label="材料名称"
                align="center"
              />
              <el-table-column
                prop="materialCode"
                label="材料编号"
                align="center"
              />
              <el-table-column
                prop="materialCode"
                label="材料比例"
                align="center"
              />
              <el-table-column
                prop="materialProportion"
                label="称重"
                align="center"
              />
              <el-table-column
                prop="materialProportion"
                label="库存"
                align="center"
              />
            </el-table>
            <hr>
          </div>
        </el-row>
        <el-row>
          <div>
            <header align="center">热处理温度模拟曲线</header>
            <hr>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        prodLineCode: '',
        produceDateStart: '',
        hpTemp: '',
        hpPress: '',
        ingredientCode: '',
        prodFinalWeight: '',
        htTechParams: [
          {
            htSetTemp: '',
            constantTime: ''
          }
        ]
      },
      ingredients: [],
      ingredientDetail: []
    }
  }
}
</script>

<style scoped>
  .main{
    margin-left: 10px;
    margin-top: 10px;
  }

</style>
