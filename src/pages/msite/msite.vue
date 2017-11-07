<template>
  <div id="msite">
    <header>
      <div class="container" @click="showAddress=true">
        <div class="left">
          <i class="mo-ele-iconfont icon-location"></i>
          <span>{{getAddress}}</span>
          <i class="mo-ele-iconfont icon-arrow-down"></i>
        </div>
        <div v-if="weather" class="right">
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
      <section class="hot-words-wrap">
        <div class="hot-words">
          <a v-for="word in hotwords" class="hot-word">{{word.word}}</a>
        </div>
      </section>
      <section class="banner">
        <img src="//fuss10.elemecdn.com/1/4f/423cd895f75b33a0139470c435257png.png?imageMogr/format/webp/thumbnail/!750x210r/gravity/Center/crop/750x210/" alt="">
      </section>
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
    this.doGetGeoPosition();
  },

  watch: {
    address: function() {
      this.$api.getHotWords({
        latitude: this.address.latitude,
        longitude: this.address.longitude
      }).then(hotwords => {
        this.hotwords = hotwords;
      })
    }
  },

  methods: {
    ...mapActions([
      'doGetGeoPosition'
    ])
  },

  computed: {
    ...mapState(['weather', 'address']),
    ...mapGetters(['getWeather', 'getAddress'])
  },

  components: {
    footerGuide,
    pageAddress
  },

  data() {
    return {
      showAddress: false,
      hotwords: []
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
        width: inherit;
        font-weight: 400;
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

main {
  .banner {
    >img {
      width: 100%;
    }
  }
  .hot-words-wrap {
    background-image: linear-gradient(90deg, #0af, #0085ff);
    padding: 8px 14px 15px;

    .hot-words {
      white-space: nowrap;
      width: 100%;
      overflow-x: auto;
      .hot-word {
        color: #fff;
        margin-right: 15px;
        font-size: 12px;
      }
    }
  }
}

</style>
