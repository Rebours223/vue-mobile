<template>
  <div class="app-user">
    <!-- 用户页头部 -->
    <header class="mui-bar mui-bar-nav mui-bar-nav-bg">
      <a href="#" class="mui-pull-left">
        <span class="mui-icon mui-icon-arrowleft"></span>
      </a>
      <h3>{{name}}的会员中心</h3>
    </header>
    <!-- 用户页1楼 -->
    <div class="user-1">
      <ul>
        <li>
            <img :src="picSrc" class="user-pic">
        </li>
        <li>
            <button class="mui-btn mui-btn-danger" @click="btnLogout">退出</button>
        </li>
      </ul>
    </div>
    <!-- 用户2楼 -->
    <div class="mui-card">
      <div class="mui-card-header">
        <h5>我的订单</h5>
      </div>
      <div class="mui-card-content">
        <div class="mui-row">
          <!-- 1 -->
          <div class="mui-col-xs-3 mui-col-sm-3">
            <li class="mui-table-view-cell">
              <a>
                <span class="mui-icon-extra mui-icon-extra-cart"></span>
                <h5>待付款</h5>
              </a>
            </li>
          </div>
          <!-- 2 -->
          <div class="mui-col-xs-3 mui-col-sm-3">
            <li class="mui-table-view-cell">
              <a>
                <span class="mui-icon-extra mui-icon-extra-holiday"></span>
                <h5>待消费</h5>
              </a>
            </li>
          </div>
          <!-- 3 -->
          <div class="mui-col-xs-3 mui-col-sm-3">
            <li class="mui-table-view-cell">
              <a>
                <span class="mui-icon-extra mui-icon-extra-order"></span>
                <h5>待点评</h5>
              </a>
            </li>
          </div>
          <!-- 4 -->
          <div class="mui-col-xs-3 mui-col-sm-3">
            <li class="mui-table-view-cell">
              <a>
                <span class="mui-icon-extra mui-icon-extra-custom"></span>
                <h5>退款</h5>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
    <!-- 用户3楼 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell">
        <router-link class="mui-navigate-right" to="/travels">我的游记</router-link>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right">我的收藏</a>
      </li>
      <li class="mui-table-view-cell">
        <a class="mui-navigate-right">常用信息</a>
      </li>
  </ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      name: '',
      uid: '',
      userList: [],
      picSrc: ''
    }
  },
  created () {
    this.name = sessionStorage.getItem('name')
    this.uid = sessionStorage.getItem('uid')
    this.loadUser()
  },
  methods: {
    loadUser () {
      var uid = this.uid
      var url = 'http://127.0.0.1:3100/user'
      this.$http.get(url, {params: {uid: uid}}).then(result => {
        this.userList = result.data.data[0]
        this.picSrc = 'http://127.0.0.1:3100/' + this.userList.avatar
        var ses = window.sessionStorage
        ses.setItem('writer_id', this.userList.writer_id)
        console.log(this.userList)
      })
    },
    btnLogout () {
      sessionStorage.removeItem('name')
      sessionStorage.removeItem('uname')
      sessionStorage.removeItem('uid')
      sessionStorage.removeItem('writer_id')
      Toast('3s后跳转首页')
      var _this = this
      setTimeout(function () { _this.$router.push('/index') }, 3000)
    }
  }
}
</script>

<style scoped>
  .mui-table-view-cell{list-style:none;}
  .mui-card{margin:0 0 1rem 0;}
  .user-pic{width:55px;}
  .user-1{height:5.5rem;background:url(../assets/img/login/user.jpg);background-size:contain;}
  .user-1 ul{list-style:none;padding:0;}
  .user-1 ul li{display:inline}
  .user-1 ul li:first-child img{margin:1rem;width:50px;display:inline-block;border-radius:50%;}
  .user-1 ul li:last-child button{margin-top:1.5rem;margin-left:18rem;}
</style>
