<template>
  <div class="p-address">
    <mt-header title="选择收获地址">
      <mt-button icon="back" slot="left" @click="handleBack"></mt-button>
    </mt-header>
    <mt-search v-model="keyword" cancel-text="取消" placeholder="请输入地址">
    </mt-search>
    <template v-if="locations.length==0">
      <mt-cell class="lab-current" title="当前地址"></mt-cell>
      <mt-cell class="val-current" :title="getAddress">
        <i class="mo-ele-iconfont icon-locate" :class="{'f-locating':islocating}"></i>
        <span @click="handleGetCurrentPosition">重新定位</span>
      </mt-cell>
    </template>
    <template v-else>
      <mt-cell v-for="location in locations" :title="location.name" :value="location.name" :key="location.id">
      </mt-cell>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {

  name: 'address',

  data() {
    return {
      keyword: '',
      locations: []
    };
  },

  computed: {
    ...mapState(['islocating']),
    ...mapGetters([
      'getAddress'
    ])
  },

  methods: {
    handleBack() {
      this.$emit('back');
    },
    handleGetCurrentPosition() {
      if (this.islocating) return;
      this.getCurrentPosition();
    },
    ...mapActions([
      'getCurrentPosition'
    ])
  }
};

</script>
<style lang='scss'>
$bk-color:#f4f4f4;
.p-address {
  background-color: $bk-color;
  color: #000;

  .mint-search {
    height: inherit;

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
          font-weight: 200;
        }
      }
      .mint-searchbar-cancel {
        font-size: 12px;
        font-weight: 200;
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
        font-weight: 200;
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
          animation: rotate 1.5s infinite linear;
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
