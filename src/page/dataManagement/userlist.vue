<template>
  <div>
    <el-table
      ref="singleTable"
      :data="tableData"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width: 100%">
      <el-table-column
        type="index"
        width="50">
      </el-table-column>
      <el-table-column
        property="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        property="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        property="address"
        label="地址"
      width="180">
      </el-table-column>
      <el-table-column
        property="id"
        label="id"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      @current-change="changeCurrentpage"
      :total="1000">
    </el-pagination>
  </div>
</template>
<style>
  .el-table {
    height: 820px;
  }
  .el-pagination {
    margin-top: 20px;
  }
  .el-table th{text-align: center;}
</style>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData: [],
        currentRow: null
      }
    },
    created: function () {
      var that=this;//注意回调函数中调用this的时候，这this是不是vue对象
      this.$http.get("https://elm.cangdu.org/v1/users/list", {params: {offset: 0, limit: 20}}).then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
          var userobj = {};
          userobj.date = res.data[i].registe_time;
          userobj.name = res.data[i].username;
          userobj.address=res.data[i].city;
          userobj.id=res.data[i].user_id;
          that.tableData.push(userobj);
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      changeCurrentpage(val) {
//        点击上一页或上一页的时候，都是调用这个函数
        let tonum=val*20;
        let that=this;
        this.$http.get("https://elm.cangdu.org/v1/users/list",{params:{offset:tonum,limit:20}}).then(function (res) {
          for (let i = 0; i < res.data.length; i++) {
            var userobj = {};
            userobj.date = res.data[i].registe_time;
            userobj.name = res.data[i].username;
            userobj.address=res.data[i].city;
            userobj.id=res.data[i].user_id;
            that.tableData.splice(i,1,userobj);
          }
        }).catch(function (err) {
          console.log(err)
        })
      },
    }
  }
</script>
