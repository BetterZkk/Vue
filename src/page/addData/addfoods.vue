<template>
  <div class="addfood">
    <el-form ref="form" :model="form" label-width="80px" status-icon :rules="rules">
      <el-form-item label="活动名称" prop="active">
        <el-input v-model.active="form.active" placeholder="请选择活动内容"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model.phone="form.phone" placeholder="请输入正确的手机号"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="深圳" value="深圳"></el-option>
          <el-option label="上海" value="上海"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                          style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    name: "addfoods",
    data() {
      var validateactive = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('活动内容不能为空'));
        } else {
          callback()
        }
      };
      var validatephone = (rule, value, callback) => {
        let regFormat = /^[1][3578][0-9]{9}$/; //正确手机号
        if (value === '') {
          callback(new Error('请输入联系方式'));
        } else if(!(regFormat.test(value))) {
          callback(new Error('请输入正确的手机号'));
        }else{
          callback()
        }
      };
      return {
        form: {
          active: "",
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          phone: ""
        },
        rules: {
          active: [
            {validator: validateactive, trigger: 'blur'}
          ],
          phone: [
            {validator: validatephone, trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.form)
      }
    }
  }
</script>
<style scoped>
  .el-form {
    border: 1px solid #B3C0D1;
    width: 1100px;
    margin: 0px auto;
    padding-top: 20px;
    text-align: left;
  }
</style>

