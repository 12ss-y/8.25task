<template>
  <div>
    <!-- <input type="text" @keydown.enter="onInput"> -->
    <input type="text" v-model="msg"/>

  </div>
</template>
<script>
export default {
  data() {
    
    return {
       msg: 'hello world'
    };
   
  },
  methods: {}
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>

</style>
