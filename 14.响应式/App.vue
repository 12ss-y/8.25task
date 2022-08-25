<template>
  <div>
    {{person}}<br/>

    <button @click="edit">修改姓名</button>
    <button @click="del">删除名字</button>
    <button @click="add">新增地址</button>

  </div>
</template>
<script>
export default {
  data() {
    return {
      person: {
        name:"小王",
        age:18,
      }
    };
  },
  methods: {
    edit() {
      this.person.name = '小五'
    },
    del() {
    //  delete this.person.name
    // this.person = {
    //   age:18
    // }
    this.$set(this.person,'name',undefined)
    },
    add() {
      // this.person.address = '杭州'
      // this.person = {
      //   name:'小王',
      //   age:18,
      //   address:'杭州'
      // }

      this.$set(this.person,'address','杭州')
    }
  },
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>