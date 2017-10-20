<template>
  <div id="parallax_wrapper">
    <div id="parallax_field">
      <img alt="" class="js-plaxify" data-invert="true" data-xrange="0" data-yrange="20" height="415" id="parallax_bg" width="940" src="../assets/notfound/bg.jpeg" style="top: -24.0506px; left: -20px;">
    </div>
    <div id="parallax_illustration">
      <img alt="" class="js-plaxify" height="249" id="parallax_error_text" width="271" src="../assets/notfound/404.png" style="top: 74.0253px; left: 65.6259px;">
      <img alt="" class="js-plaxify" height="230" id="parallax_octocat" width="188" src="../assets/notfound/git.png" style="top: 96.0253px; left: 352.813px;">
      <img alt="" class="js-plaxify" height="156" id="parallax_speeder" width="440" src="../assets/notfound/boat.png" style="top: 152.025px; left: 428.813px;">
      <img alt="" class="js-plaxify" height="49" id="parallax_octocatshadow" width="166" src="../assets/notfound/shadow0.png" style="top: 299.025px; left: 367.813px;">
      <img alt="" class="js-plaxify" height="75" id="parallax_speedershadow" width="430" src="../assets/notfound/shadow1.png" style="top: 265.025px; left: 438.813px;">
      <img alt="" class="js-plaxify" data-yrange="20" height="123" id="parallax_building_1" width="304" src="../assets/notfound/house0.png" style="top: 68.9494px; left: 482.935px;">
      <img alt="" class="js-plaxify" data-yrange="30" height="50" id="parallax_building_2" width="116" src="../assets/notfound/house1.png" style="top: 106.924px; left: 785.403px;">
    </div>
  </div>
</template>
<script>
export default {

  name: 'NotFound',

  data() {
    return {

    };
  }
};

</script>
<style lang="css" scoped>
* {
  box-sizing: border-box;
}

#parallax_wrapper {
  position: relative;
  z-index: 0;
  transition: all 0.25s ease-in;
  width: 100%;
}

#parallax_field {
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  height: 370px;
  width: 100%;
}

#parallax_field #parallax_bg {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 110%;
  height: 425px;
  z-index: 1;
}

#parallax_illustration {
  display: block;
  margin: 0 auto;
  width: 940px;
  height: 370px;
  position: relative;
  overflow: hidden;
  clear: both;
}

#parallax_illustration img {
  position: absolute;
}

#parallax_illustration #parallax_error_text {
  top: 72px;
  left: 72px;
  z-index: 10;
}

#parallax_illustration #parallax_octocat {
  top: 94px;
  left: 356px;
  z-index: 9;
}

#parallax_illustration #parallax_speeder {
  top: 150px;
  left: 432px;
  z-index: 8;
}

#parallax_illustration #parallax_octocatshadow {
  top: 297px;
  left: 371px;
  z-index: 7;
}

#parallax_illustration #parallax_speedershadow {
  top: 263px;
  left: 442px;
  z-index: 6;
}

#parallax_illustration #parallax_building_1 {
  top: 73px;
  left: 467px;
  z-index: 5;
}

#parallax_illustration #parallax_building_2 {
  top: 113px;
  left: 762px;
  z-index: 4;
}

</style>
