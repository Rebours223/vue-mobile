<template>
  <div class="app-login">
    <!-- 登录页头部 -->
    <header class="mui-bar mui-bar-nav mui-bar-nav-bg">
      <a href="#" class="mui-pull-left">
        <span class="mui-icon mui-icon-arrowleft"></span>
      </a>
      <h3>登录</h3>
    </header>
    <!-- logo -->
    <!-- 登录页表单 -->
    <form class="mui-input-group">
      <div class="mui-input-row">
        <input type="text" class="mui-input-clear" placeholder="手机号" v-model="uname">
      </div>
      <div class="mui-input-row">
        <input type="password" class="mui-input-password" placeholder="登录密码" v-model="upwd">
      </div>
      <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-success" @click="btnLogin">登录</button>
      </div>
    </form>
    <!-- 登录页链接 -->
      <div class="myhref">
        <a href="#">注册新用户</a>
        <span>|</span>
        <a href="#">找回密码</a>
      </div>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data () {
    return {
      uname: '',
      upwd: '',
      uid: ''
    }
  },
  methods: {
    btnLogin () {
      var u = this.uname
      var p = this.upwd
      var regPhone = /^1[34578]\d{9}$/
      if (!regPhone.test(u)) { Toast(`用户名格式错误`); return }
      this.$http.get('http://127.0.0.1:3100/login',
        {
          params: {uname: u, upwd: p}
        }).then(res => {
        if (res.data.code === 1) {
          Toast(`登录成功`)
          var ses = window.sessionStorage
          ses.setItem('uid', res.data.info[0].uid)
          ses.setItem('uname', res.data.info[0].uname)
          ses.setItem('name', res.data.info[0].name)
          this.$router.push('/user')
        } else {
          Toast(`用户名或密码有误`)
        }
      })
    }
  }
}
</script>

<style scoped>
  .app-login{background:#fff;height:100%;}
  .myhref{margin:1rem 0;text-align:center;}
  form{padding-top:8rem;}

</style>
