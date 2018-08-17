<template>
  <div>
    <el-table
      :data="tableData"
      height="850"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="店铺名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="店铺地址"
        width="480">
      </el-table-column>
      <el-table-column
        prop="info"
        label="店铺介绍">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        width="360">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑
          </el-button>
          <el-button
            size="mini"
            type="Success"
            @click="addFood()">添加食品
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete()">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="编辑信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" :label-width="formLabelWidth">
          <el-input v-model="form.region" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" :label-width="formLabelWidth">
          <el-input v-model="form.desc" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺分类" :label-width="formLabelWidth">
          <el-select v-model="form.category" placeholder="请选择类型">
            <el-option label="快餐" value="南方"></el-option>
            <el-option label="面食" value="北方"></el-option>
            <el-option label="盖浇面" value="盖浇面"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="店铺图片" :label-width="formLabelWidth">
          <img v-if="form.imgpath" :src="baseUrl + form.imgpath" class="img">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<style>
  .el-table--border th .cell {
    text-align: center;
  }

  .el-collapse, .el-collapse-item {
    border: 1px solid #eee;
  }

  .el-collapse-item {
    margin-top: -2px;
  }

  .el-dialog__body {
    text-align: left;
  }

  .img {
    width: 150px;
    height: 150px;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData: [],
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          desc: '',
          phone: "",
          imgpath: "",
          category:""
        },
        formLabelWidth: '120px',
        baseUrl: '//elm.cangdu.org/img/'
      };
    },
    created: function () {
//      设置默认选中的代码，就是设置module的值
      let that = this;
      this.$http.get("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762", {}).then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
          let objshop = {};
          objshop.name = res.data[i].name;
          objshop.address = res.data[i].address;
          objshop.info = res.data[i].promotion_info;
          objshop.phone = res.data[i].phone;
          objshop.category = res.data[i].category;
          objshop.image_path = res.data[i].image_path;
          objshop.category = res.data[i].category;
          that.tableData.push(objshop)
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      handleEdit(index) {
//        在这对form赋值,让模态框显示出来
        this.dialogFormVisible = true;
        this.form.name = this.tableData[index].name;
        this.form.region = this.tableData[index].address;
        this.form.desc = this.tableData[index].info;
        this.form.phone = this.tableData[index].phone;
        this.form.imgpath = this.tableData[index].image_path;
        this.form.category = this.tableData[index].category;
      },
      handleDelete() {
        alert("删除")
      },
      addFood() {
        alert("增加")
      }
    }
  }
</script>
