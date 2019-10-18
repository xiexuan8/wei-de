<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card style="margin-left: 5px;margin-top: 5px" v-for="item in ingredient">
          <div slot="header" class="clearfix">
            <span style="font-family: bold">配方名：<span style="color: blue">{{ item.ingredientCode }}</span></span>
          </div>
          <el-table
            :data="item.data"
            border
            style="width: 100%"
          >
            <el-table-column
              prop="materialCode"
              align="center"
              label="物料名"
            />
            <el-table-column
              prop="ingredientProportion"
              align="center"
              contenteditable="true"
              label="配比"
            />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IngredientInfo',
  data() {
    return {
      ingredient: [
        {
          ingredientCode: 'PF001',
          data: [
            {
              materialCode: 'WL1',
              ingredientProportion: 0.2
            },
            {
              materialCode: 'WL2',
              ingredientProportion: 0.3
            },
            {
              materialCode: 'WL3',
              ingredientProportion: 0.4
            },
            {
              materialCode: 'WL5',
              ingredientProportion: 0.1
            },
            {
              materialCode: 'WL5',
              ingredientProportion: 0.1
            }
          ]
        },
        {
          ingredientCode: 'PF002',
          data: [
            {
              materialCode: 'WL1',
              ingredientProportion: 0.2
            },
            {
              materialCode: 'WL2',
              ingredientProportion: 0.3
            },
            {
              materialCode: 'WL3',
              ingredientProportion: 0.4
            },
            {
              materialCode: 'WL5',
              ingredientProportion: 0.1
            }
          ]
        },
        {
          ingredientCode: 'PF003',
          data: [
            {
              materialCode: 'WL1',
              ingredientProportion: 0.2
            },
            {
              materialCode: 'WL2',
              ingredientProportion: 0.3
            },
            {
              materialCode: 'WL3',
              ingredientProportion: 0.4
            },
            {
              materialCode: 'WL5',
              ingredientProportion: 0.1
            }
          ]
        },
        {
          ingredientCode: 'PF004',
          data: [
            {
              materialCode: 'WL1',
              ingredientProportion: 0.2
            },
            {
              materialCode: 'WL2',
              ingredientProportion: 0.3
            },
            {
              materialCode: 'WL3',
              ingredientProportion: 0.4
            },
            {
              materialCode: 'WL5',
              ingredientProportion: 0.1
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
