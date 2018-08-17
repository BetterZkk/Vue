<template>
    <el-table
      :data="ordertableData"
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名">
              <span>{{ props.row.userName }}</span>
            </el-form-item>
            <el-form-item label="店铺名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="订单状态">
              <span>{{ props.row.status }}</span>
            </el-form-item>
            <el-form-item label="店铺 ID">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="店铺地址">
              <span>{{ props.row.shopaddress }}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{ props.row.useraddress}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="订单ID"
        prop="orderId">
      </el-table-column>
      <el-table-column
        label="总价格"
        prop="price">
      </el-table-column>
      <el-table-column
        label="订单状态"
        prop="status">
      </el-table-column>
    </el-table>
</template>
<style>
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

  .el-form-item {
    text-align: left;
  }

  .el-form--inline .el-form-item__content {
    vertical-align: middle;
  }

  .el-table th {
    text-align: center;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    name: "order",
    data() {
      return {
        ordertableData: []
      }
    },
    created: function () {
      let that = this;
      this.$http.get("https://elm.cangdu.org/bos/orders", {params: {offset: 0, limit: 16}}).then(function (res) {
        for (let i = 0; i < res.data.length; i++) {
          let orderobj = {};
          orderobj.orderId = res.data[i].id
          orderobj.status = res.data[i].status_code
          orderobj.name = res.data[i].restaurant_name
          orderobj.shopId = res.data[i].restaurant_id
          orderobj.userName = res.data[i].user_id
          orderobj.useraddress = res.data[i].address_id
          orderobj.shopaddress = "深圳市龙岗区"
          orderobj.price = res.data[i].total_amount
          that.ordertableData.push(orderobj)
        }
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
</script>
