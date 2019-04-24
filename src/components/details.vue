<template>
  <div class="app-details">
    <!-- 头部 -->
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">线路详情</h1>
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <a class="mui-icon mui-icon-bars mui-pull-right"></a>
    </header>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="myswipe">
      <mt-swipe-item>
          <img :src="pic">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 商品标题 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner pro-title">
          <p>{{product.title}}</p>
          <P>
          <span>¥{{product.price}}起</span>
          <span>564人出游</span>
          <span>97%满意</span>
          </P>
        </div>
      </div>
    </div>
    <!-- 出行日期 -->
    <div class="mui-card">
      <div class="mui-card-header">
      <h5>出发日期</h5>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <a href="#">
            <span>04-22</span>
            <span>¥8800起</span>
          </a>
          <a href="#">
            <span>04-26</span>
            <span>¥8800起</span>
          </a>
          <a href="#">
            <span>04-29</span>
            <span>¥8800起</span>
          </a>
          <a href="#">
            <span class="more-date">更多团期</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 游客问答 -->
    <div class="mui-card">
      <div class="mui-card-header">
      <h5>游客问答</h5>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>本产品暂无问答内容!
            <button class="mui-btn mui-btn-success">去提问</button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品详情介绍1 -->
    <div class="mui-card">
      <!-- 头部 -->
      <div class="mui-card-header">
        <h5>简要行程</h5>
      </div>
      <!-- 介绍板块 -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>{{product.details}}</p>
          <img :src="pic">
        </div>
      </div>
    </div>
    <!-- 商品详情介绍2 -->
    <div class="mui-card">
      <!-- 头部锚点 -->
      <div class="mui-card-header">
        <h5>签约流程</h5>
      </div>
      <!-- 介绍板块 -->
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>网上预订：直接通过网站下单，在线选择产品并填写相关信息后，提交订单。</p>
          <p>在线预订：拨打咨询/预订电话，由客服帮助您完成信息的确认和下单操作。</p>
        </div>
      </div>
    </div>
    <!-- 脚部导航 -->
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
      pid: '',
      pic: '',
      product: ''
    }
  },
  created () {
    this.loadPro()
  },
  methods: {
    loadPro () {
      var url = 'http://127.0.0.1:3100/details'
      this.pid = ((location.href).split('=')[1])
      this.$http.get(url, {params: {pid: this.pid}}).then(result => {
        this.product = result.data.product[0]
        this.pic = 'http://127.0.0.1:3100/' + result.data.pic[0].url
      })
    }
  }
}
</script>

<style scoped>
  .myswipe{width:375;height:200px;}
  .mint-swipe-item img{width:100%;height:100%;}
  .footer{margin:5px 0;text-align:center;}
  .mui-card{margin:1rem 0}
  .mui-card-content-inner>a{display:inline-block;width:6.4rem;height:4.2rem;margin-right: 0.16rem;padding: 0.16rem 0;text-align: center;vertical-align: top;border: 1px solid #e5e5e5;border-radius: 0.08rem;}
  .mui-card-content-inner>a>span:first-child{color:#666;display:block;font-size:0.32rem;}
  .mui-card-content-inner>a>span:nth-child(2){display:block;color:#f70;margin-top:0.08rem;font-size: 0.32rem;}
  .mui-card-content-inner>a:last-child>span{text-align:center;line-height:4.2rem;}
  .mui-card-content-inner>p>button{margin:0 2rem;}
  .mui-card-content-inner>img{max-width: 100%;}
  .pro-title>p:nth-child(2){text-align:center;color:#f70;}
  .pro-title>p:nth-child(2)>span{display:inline-block;margin:0 1rem;}
  .more-date{color:#2dbb55 !important;}
  .mui-card-header h5{border-left:2px solid #2dbb55;padding-left:0.5rem;}
</style>
