<template>
  <div>
    <a href="url" @click.prevent>百度</a><br/>

    <div class="father" @click="clickFather">1
      <div class="son" @click.stop="clickSon">2</div>
      
    </div><br/>
    
    <button @click.once="sayHi">点击打印hi</button>
  </div>
</template>
<script>
export default {
  data() {
    url: "http://www.baidu.com";
    return {};
  },
  methods: {
    goBaidu(e) {
      // e.preventDefault();
    },
    clickFather() {
      console.log("点击了大盒子1");
    },
    clickSon(e) {
      console.log("点击了小盒子2");
    },
    sayHi() {
      console.log("hi");
    },
  },
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
/* h1 {
  background-color: blueviolet;
} */

.father {
  /* position: absolute; */
  width: 200px;
  height: 200px;
  background-color: pink;
}
.son {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: lime;
}
</style>
