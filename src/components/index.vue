<template>
  <div class="app-index">
    <!-- 头部导航栏 -->
    <header class="mui-bar mui-bar-nav mui-bar-nav-bg">
      <a id="icon-menu" class="mui-action-back mui-pull-left">
        <img src="../assets/img/logo.png" alt="logo" class="logo">
      </a>
      <router-link class="mui-pull-right" to="/login">
        <span class="mui-icon mui-icon-person"></span>
      </router-link>
    </header>
    <!-- 商品轮播图 -->
    <mt-swipe :auto="4000" class="myswipe">
      <mt-swipe-item v-for="item of list" :key="item.pid">
        <router-link :to="{path:'/details',query:{pid:item.pid}}"><img :src="item.img_url"></router-link>
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <a href="#">
          <img src="../assets/img/index/carousel1.jpg">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="../assets/img/index/carousel2.jpg">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="../assets/img/index/carousel3.jpg">
        </a>
      </mt-swipe-item> -->
    </mt-swipe>
    <!-- 六宫格导航栏 -->
    <ul class="mui-table-view mui-grid-view mui-grid-6">
      <!-- 第一行 -->
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/index/menu1.jpg" alt="">
          <div class="mui-media-body">出境</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/index/menu2.jpg" alt="">
          <div class="mui-media-body">国内</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/index/menu3.jpg" alt="">
          <div class="mui-media-body">四川</div>
        </a>
      </li>
      <!-- 第二行 -->
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/index/menu4.jpg" alt="">
          <div class="mui-media-body">线路</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/index/menu5.jpg" alt="">
          <div class="mui-media-body">问答</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../assets/img/index/menu6.jpg" alt="">
          <div class="mui-media-body">特价</div>
        </a>
      </li>
    </ul>
    <!-- 主页1楼 -->
    <div class="mui-card">
      <!-- 1楼标题 -->
      <div class="mui-card-header mui-card-media">
        <h5 style="float:left" class="title">特价优惠</h5>
      </div>
      <!-- 1楼图片 -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="mui-row">
            <div class="mui-col-sm-6 mui-col-xs-6">
                <a href="#">
                  <img src="../assets/img/index/1.jpg">
                </a>
            </div>
            <div class="mui-col-sm-6 mui-col-xs-6">
              <div class="mui-row">
                <div class="mypic">
                  <a href="#">
                    <img src="../assets/img/index/2.jpg">
                  </a>
                </div>
                <div class="mypic">
                  <a href="#">
                    <img src="../assets/img/index/3.jpg">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 主页2楼 -->
    <div class="mui-card">
      <!-- 2楼标题 -->
      <div class="mui-card-header mui-card-media">
        <h5 style="float:left" class="title">线路</h5>
      </div>
      <!-- 2楼图片 -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="mui-row">
            <!-- <div class="mui-col-sm-6 mui-col-xs-6 pr-2">
              <a href="#">
                <img src="../assets/img/index/1.jpg" alt="">
                <p class="detail">
                  俄罗斯欢游9日游【雪国童话】川航直飞俄罗斯、全程精选四星酒店、探秘世界四大博物馆之一的冬宫（艾尔米塔什皇宫博物馆、圣彼得堡自由活动一天
                </p>
                <h4>¥2300起</h4>
              </a>
            </div> -->
            <!-- <div class="mui-col-sm-6 mui-col-xs-6 pl-2">
              <a href="#">
                <img src="../assets/img/index/1.jpg" alt="">
                <p class="detail">
                  俄罗斯欢游9日游【雪国童话】川航直飞俄罗斯、全程精选四星酒店、探秘世界四大博物馆之一的冬宫（艾尔米塔什皇宫博物馆、圣彼得堡自由活动一天
                </p>
                <h4>¥2300起</h4>
              </a>
            </div> -->
            <!-- 动态生成 -->
            <div class="mui-col-sm-6 mui-col-xs-6 pl-2" v-for="item of product" :key="item.pid">
              <router-link :to="{path:'/details',query:{pid:item.pid}}">
                <img :src="'http://127.0.0.1:3100/'+item.pic">
                <p class="detail">
                  {{item.details}}
                </p>
                <h4 class="orange">¥{{item.price}}起</h4>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 2楼按钮 -->
      <div class="mui-card-footer">
        <button type="button" class="mui-btn mui-btn-warning btn-more">
          加载更多
        </button>
      </div>
    </div>
    <!-- 主页3楼 -->
    <div class="mui-card">
      <!-- 3楼标题 -->
      <div class="mui-card-header mui-card-media">
        <h5 style="float:left" class="title">特价</h5>
      </div>
      <!-- 3楼图片 -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <router-link :to="{path:'/details',query:{pid:special.pid}}">
            <img :src="'http://127.0.0.1:3100/'+special.pic" class="pic-3l">
            <h4 class="orange">{{special.title}}</h4>
            <p>
              {{special.details}}
            </p>
            <h4 class="orange">¥{{special.price}}起</h4>
          </router-link>
        </div>
      </div>
      <!-- 3楼按钮 -->
      <div class="mui-card-footer">
        <button type="button" class="mui-btn mui-btn-warning btn-more">
          加载更多
        </button>
      </div>
    </div>
    <!-- 底部导航栏 -->
    <footer>
      <div class="footer">
        <button type="button" class="mui-btn mui-btn-danger">在线咨询</button>
        <button type="button" class="mui-btn mui-btn-royal">联系我们</button>
        <button type="button" class="mui-btn mui-btn-primary">返回首页</button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      product: [],
      special: []
    }
  },
  created () {
    this.loadImgList()
    this.loadProList()
  },
  methods: {
    loadImgList () {
      var url = 'http://127.0.0.1:3100/imglist'
      this.$http.get(url).then(result => {
        this.list = result.data.data
      })
    },
    loadProList () {
      var url = 'http://127.0.0.1:3100/index'
      this.$http.get(url).then(result => {
        this.product = result.data
        this.special = this.product[0]
      })
    }
  }
}
</script>

<style scoped>
  .logo{width:150px;display:inline-block;margin-top:3px;}
  header a:nth-child(2){width:50px;}
  .myswipe{width:375;height:125px;}
  .mint-swipe-item a img{width:100%;height:100%;}
  .mui-table-view-cell>a>img{width:40%;}
  .mui-row>div>a>img{width:100%;height:150px;}
  .mypic{height:80px;margin-bottom:8px;margin-left:2px;}
  .mypic>a>img{height:75px !important;}
  ul.mui-table-view{margin-top:10px;}
  div.mui-card{margin:10px 0 0 0;}
  .footer{margin:5px 0;text-align:center;}
  .title{border-left:2px solid #ff6b1a;padding-left:5px;}
  .btn-more{margin:0 auto;}
  .detail{height:1rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}
  .pr-2{padding-right:2px;}
  .pl-2{padding-left:2px;}
  .orange{color:#ff6b1a;}
  .pic-3l{height:170px;width:340px;}
</style>
