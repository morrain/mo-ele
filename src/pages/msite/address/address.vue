<template>
  <div class="p-address">
    <mt-header title="选择收获地址">
      <mt-button icon="back" slot="left" @click.native="handleBack"></mt-button>
    </mt-header>
    <mt-search v-model="keyword" cancel-text="取消" placeholder="请输入地址">
    </mt-search>
    <template v-if="locations.length==0">
      <mt-cell class="lab-current" title="当前地址"></mt-cell>
      <mt-cell class="val-current" :title="getAddress">
        <i class="mo-ele-iconfont icon-locate" :class="{'f-locating':islocating}"></i>
        <span @click="handleGetCurrentPosition">重新定位</span>
      </mt-cell>
      <div class="searching" v-if="isSearching">
        <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif">
        <h5>正在搜索中</h5>
      </div>
    </template>
    <template v-else>
      <mt-cell v-for="location in locations" is-link :title="location.name" :label="location.address" :key="location.id" @click.native="handleChangeLocation(location)">
      </mt-cell>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import _ from 'lodash'

export default {

  name: 'address',

  data() {
    return {
      keyword: '',
      isSearching: false,
      locations: []
    };
  },

  computed: {
    ...mapState(['islocating', 'address']),
    ...mapGetters([
      'getAddress'
    ])
  },

  watch: {
    keyword: function() {
      this.doSearch();
    }
  },

  methods: {
    doSearch: _.debounce(function() {
      if (this.keyword) {
        this.isSearching = true;
        this.$api.getNearby({
          offset: 0,
          limit: 20,
          keyword: this.keyword,
          longitude: this.address.longitude,
          latitude: this.address.latitude
        }).then(locations => {
          this.isSearching = false;
          this.locations = locations;
        }).catch(() => {
          this.isSearching = false;
          this.locations = [];
        });
      } else {
        this.isSearching = false;
        this.locations = [];
      }
    }, 1000),
    handleBack() {
      this.$emit('back');
    },
    handleChangeLocation(location) {
      this.setAddress(location);
      this.$emit('back');
    },
    handleGetCurrentPosition() {
      if (this.islocating) return;
      this.doGetGeoPosition();
    },
    ...mapActions([
      'doGetGeoPosition'
    ]),
    ...mapMutations([
      'setAddress'
    ])
  }
};

</script>
<style lang='scss'>
$bk-color:#f4f4f4;
.p-address {
  background-color: $bk-color;
  color: #000;

  .searching {
    text-align: center;
    >img {
      width: 50%;
      margin-top: 20px;
    }
    >h5 {
      color: #888;
    }
  }

  .mint-search {
    height: inherit;
    .mint-search-list {
      display: none;
    }

    .mint-searchbar {
      background-color: #ffffff;
      padding: 10px 16px;
      .mint-searchbar-inner {
        background-color: $bk-color;
        .mintui-search {
          font-size: 18px;
        }

        input {
          background-color: $bk-color;
          font-size: 12px;
          color: #999;
        }
      }
      .mint-searchbar-cancel {
        font-size: 12px;
      }
    }
  }
  .mint-cell {
    background-color: $bk-color;
    .mint-cell-wrapper {
      padding: 0 16px;
      .mint-cell-title {
        width: 76%;
        .mint-cell-text {
          display: inline-block;
          @include text-overflow;
        }
      }
      .mint-cell-value {
        color: #2395ff;
        font-size: 14px;
        >span {
          margin-left: 6px;
        }
      }
    }
    &.lab-current {
      height: 40px;
      min-height: 40px;
      .mint-cell-wrapper {
        padding-top: 10px;
        font-size: 12px;
        color: #666;
      }
    }
    &.val-current {
      background-color: #fff;
      height: 44px;
      min-height: 44px;
      .icon-locate {
        display: inline-block;
        &.f-locating {
          animation: rotate 1s infinite linear;
        }
        @keyframes rotate {
          0% {
            @include xuan-zhuan(0)
          }
          100% {
            @include xuan-zhuan(360)
          }
        }
      }
    }
  }
}

</style>
