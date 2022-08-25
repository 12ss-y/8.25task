<template>
  <div>
    {{ arr }}<br />
    <button @click="onReverse">翻转</button>
    <button @click="del">删除</button>
    <button @click="change">变换数组</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
     arr: ['张三','李四','王二']
    };
  },
  methods: {
    onReverse() {
      this.arr.reverse()
    },
    del() {
      this.arr.splice(2,1)
    },
    change() {
      // this.arr[ths.arr.length - 1] = '小李'
      // this.arr = ['张三','李四','小李']
    //   this.arr = this.arr.map((item) => {
    //     if (item !== '王二') {
    //       return item
    //     } else {
    //       return '小李'
    //     }
    //   )}

this.arr = this.arr.map((item) => (item === '王二' ? '小李' : item))

    // this.$set(this.arr,2,'小李')
    }
    
  },
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>

