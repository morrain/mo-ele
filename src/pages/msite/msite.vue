<template>
  <div id="msite">
    <header>
      <div class="container">
        <div class="left">
          <i class="mo-ele-iconfont icon-location"></i>
          <span>{{addr_title}}</span>
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
import { mapState, mapActions } from 'vuex'
export default {

  name: 'msite',

  mounted() {
    this.getCurrentPosition();
  },

  methods: {
    ...mapActions([
      'getCurrentPositionInfo'
    ]),
    /**
     * 获取到地理位置后的回调
     * @param  {[type]} position [description]
     * @return {[type]}          [description]
     */
    geoSuccess(position) {
      this.getCurrentPositionInfo({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });

      console.log(position);
    },
    /**
     * 获取当前位置，调用系统GPS API
     * @return {[type]} [description]
     */
    getCurrentPosition() {
      var position = {
        timestamp: +new Date(),
        coords: {
          latitude: 30.191601799999994,
          longitude: 120.1890461
        }
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.geoSuccess, (error) => {
          console.log(error);
          this.geoSuccess(position);
        }, {
          timeout: 10 * 1000,
          enableHighAccuracy: false,
          maximumAge: 5 * 60 * 1000
        });

        navigator.geolocation.watchPosition(this.geoSuccess);
      } else {
        console.log('浏览器不支持定位')
        this.geoSuccess(position);
      }
    }
  },

  computed: {
    ...mapState([
      'addr_title'
    ])
  },

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
      font-size: 12px;
      display: flex;
      .r-left {
        display: flex;
        flex-direction: column;
        width: 30px;
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
