<template>
  <div>
    <span :class="{active : isActive}">hello, world</span><br/>
    <button @click="isActive = !isActive">切换状态</button>

    <!-- <p :style="{ ['background-color'] : 'lime'}">hi</p> -->
    <p :style="{backgroundColor : color}">hi</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
    isActive:true,
    color:'red'

    };
  },
  methods: {
    
    
    
  },
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
.active {
  background: lime;
}
</style>

