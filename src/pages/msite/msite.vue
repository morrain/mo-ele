<template>
  <div id="msite">
    <header>
      <div class="container" @click="showAddress=true">
        <div class="left">
          <i class="mo-ele-iconfont icon-location"></i>
          <span>{{getAddress}}</span>
          <i class="mo-ele-iconfont icon-arrow-down"></i>
        </div>
        <div class="right">
          <div class="r-left">
            <span class="r-left-up">{{getWeather.temperature}}°</span>
            <span class="r-left-down">{{getWeather.text}}</span>
          </div>
          <div class="r-right">
            <img :src="getWeather.weather_pic" alt="">
          </div>
        </div>
      </div>
      <mt-popup v-model="showAddress" position="right">
        <page-address @back="showAddress=false"></page-address>
      </mt-popup>
    </header>
    <main>
    </main>
    <footer-guide></footer-guide>
  </div>
</template>
<script>
import footerGuide from '@/components/footerGuide'
import pageAddress from './address/address'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {

  name: 'msite',

  mounted() {
    this.getCurrentPosition();
  },

  methods: {
    ...mapActions([
      'getCurrentPositionInfo',
      'getCurrentPositionWeather'
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
      this.getCurrentPositionWeather({
        from: 1,
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
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
    ...mapState([]),
    ...mapGetters(['getWeather', 'getAddress'])
  },

  components: {
    footerGuide,
    pageAddress
  },

  data() {
    return {
      showAddress: false
    };
  }
};

</script>
<style lang='scss' scoped>
header {
  padding: 10px 14px 0;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  .mint-popup-right {
    height: 101%;
    width: 100%;
    background-color: #f4f4f4;
  }
  .container {
    display: flex;
    align-items: center;
    .left {
      flex: 1;
      display: flex;
      font-size: 16px;
      max-width: 84%;
      >span {
        @include text-overflow;
      }
    }
    .right {
      font-size: 12px;
      display: flex;
      .r-left {
        display: flex;
        flex-direction: column;
        width: 30px;
        font-weight: 100;
        .r-left-up {
          font-size: 14px;
          padding-left: 4px;
        }
        .r-left-down {
          font-size: 12px;
          font-weight: 400;
          transform: scale(0.80);
        }
      }
      .r-right {
        width: 28px;
        height: 28px;
        >img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

</style>
