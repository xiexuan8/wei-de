<template>
  <div style="margin-top: 20px">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="生产批号" >
        <el-input style="width: 200px" v-model="form.name" />
      </el-form-item>
      <el-form-item label="生产日期">
        <el-date-picker
          v-model="form.date1"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="配方编号">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="配方1" value="PF001"></el-option>
          <el-option label="配方2" value="PF002"></el-option>
        </el-select>
        <el-button type="primary" plain @click="aiSelect">输入参数产品进行选择</el-button>
      </el-form-item>
      <!--<el-form-item label="即时配送">-->
        <!--<el-switch v-model="form.delivery" />-->
      <!--</el-form-item>-->
      <el-form-item label="是否测试">
        <el-radio-group v-model="form.resource">
          <el-radio label="是" />
          <el-radio label="否" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注">
        <el-input style="width: 50%" v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      centerDialogVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form.date1)
    },
    aiSelect() {
      this.centerDialogVisible = true
    }
  }
}
</script>
