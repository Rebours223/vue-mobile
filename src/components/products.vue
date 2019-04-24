<template>
  <div class="app-products">
    <!-- 头部导航栏 -->
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">欧洲线路</h1>
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
      <a class="mui-icon mui-icon-bars mui-pull-right"></a>
    </header>
    <!-- 商品列表 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../assets/img/index/carousel1.jpg">
          <div class="mui-media-body">
            <p class='mui-ellipsis'>希腊系列近期特价,出行计划一网打尽</p>
            <p>
              <span>满意度97%</span>
              <span>销量564</span>
              <span>¥8800起</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
    <!-- 脚部 -->
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
}
</script>

<style scoped>
.mui-media-object{height:74px;width:110px;max-width:110px;line-height:110px;}
.mui-media-body p:nth-child(2){margin-top:2rem;}
.mui-media-body p:nth-child(2) span{margin:0.5rem;}
.footer{margin:5px 0;text-align:center;}
</style>
