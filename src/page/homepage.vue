<template>
  <div class="homepage">
    <h1 class="title">数据统计</h1>
    <el-row>
      <el-button type="success">当日数据</el-button>
      <el-button>{{addNewUserCount}}新增用户</el-button>
      <el-button>{{addNewOrder}}新增订单</el-button>
      <el-button>{{addNewAdminCount}}新增管理员</el-button>
    </el-row>
    <el-row>
      <el-button type="primary">总数据</el-button>
      <el-button>{{allUserCount}}注册用户</el-button>
      <el-button>{{allOrder}}总订单</el-button>
      <el-button>{{allAdminCount}}总管理员</el-button>
    </el-row>
    <div id="myChart" style="width:900px;height: 600px;" class="charts">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "homepage",
    data() {
      return {
        addNewAdminCount: "",
        addNewUserCount: "",
        allUserCount: '',
        allAdminCount: '',
        allOrder: "",
        addNewOrder: ""
      }
    },
    created: function () {
      let that = this;
      let date = this.getNowFormatDate();
      this.$http.get("https://elm.cangdu.org/statis/admin/:date/count", {params: {date: date}}).then(function (res) {
        if (res.data.status == 1) {
          that.addNewAdminCount = res.data.count
        }
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get("https://elm.cangdu.org/admin/count", {}).then(function (res) {
        if (res.data.status == 1) {
          that.allAdminCount = res.data.count
        }
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get("https://elm.cangdu.org/statis/user/:date/count", {params: {date: date}}).then(function (res) {
        if (res.data.status == 1) {
          that.addNewUserCount = res.data.count
        }
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get("https://elm.cangdu.org/v1/users/count", {}).then(function (res) {
        if (res.data.status == 1) {
          that.allUserCount = res.data.count
        }
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get("https://elm.cangdu.org/statis/order/:date/count", {params: {date: date}}).then(function (res) {
        if (res.data.status == 1) {
          that.addNewOrder = res.data.count
        }
      }).catch(function (err) {
        console.log(err)
      })
      this.$http.get("https://elm.cangdu.org/bos/orders/count", {}).then(function (res) {
        if (res.data.status == 1) {
          that.allOrder = res.data.count
        }
      }).catch(function (err) {
        console.log(err)
      })
    },
    mounted: function () {
      this.drawLine();
    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '走势图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['邮件营销', '联盟广告', '视频广告']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
            right: 30
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '邮件营销',
              type: 'line',
              stack: '总量',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              stack: '总量',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'line',
              stack: '总量',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
          ]
        });
      }
    }
  }
</script>
<style scoped>
  .homepage {
    text-align: center;
  }

  .charts {
    margin: 20px auto;
  }

  .title {
    font-size: 24px;
  }

  .el-button {
    color: black;
    width: 180px;
    background-color: #E5E9F2;
    font-size: 16px;
    border-radius: 8px;
  }

  .el-button:first-child {
    color: white;
    background-color: #409EFF;
  }
</style>
