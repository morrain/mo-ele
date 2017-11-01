<template>
  <div id="msite">
    <header>
      <div class="container">
        <div class="left">
          <i class="mo-ele-iconfont icon-location"></i>
          <span>广州市人民政府广州市人大常委会</span>
          <i class="mo-ele-iconfont icon-arrow-down"></i>
        </div>
        <div class="right">
          <div class="r-left">
            <span class="r-left-up">19°</span>
            <span class="r-left-down">阴天</span>
          </div>
          <div class="r-right">
            <i class="mo-ele-iconfont icon-night"></i>
          </div>
        </div>
      </div>
    </header>
    <main>
    </main>
    <footer-guide></footer-guide>
  </div>
</template>
<script>
import footerGuide from '@/components/footerGuide'
export default {

  name: 'msite',

  components: {
    footerGuide
  },

  data() {
    return {

    };
  }
};

</script>
<style lang='scss' scoped>
header {
  padding: 10px 14px 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  .container {
    display: flex;
    align-items: center;
    .left {
      flex: 1;
      display: flex;
      font-size: 16px;
      >span {
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right {
      width: 52px;
      font-size: 12px;
      display: flex;
      .r-left {
        display: flex;
        flex-direction: column;
        .r-left-up {
          font-size: 14px;
          padding-left: 2px;
        }
        .r-left-down {
          font-size: 12px;
          font-weight: 400;
          transform: scale(0.80);
        }
      }
      .r-right {
        .mo-ele-iconfont {
          font-size: 28px;
        }
      }
    }
  }
}

</style>
