<template>
  <div>
    <!-- {{msg2 | toLower}} -->
    <!-- <a href="#" :title="hello" | toUpper>百度</a> -->

    {{msg | toUpper('======','------')}}
  </div>
</template>

<script>


export default {
  data() {
    return {
      msg:'hi',
     msg2:'HELLO'
    };
  },
  // filter(msg2) {
  //   return msg2.toLower()
  // },
  // filters: {
  //   toUpper(msg) {
  //     return msg.toUpperCase()
  //   }
  // }
  filters: {
    toUpper(msg,arg1,arg2) {
      console.log(arg1,arg2);
      return msg.toUpperCase()
    }
  }
};
</script>

<style scoped>

</style>