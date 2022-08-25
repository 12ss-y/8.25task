<template>
  <div>
    <table>
      <caption>
        欢迎光临_vue开发的收银系统_水果店
      </caption>
      <thead>
        <tr>
          <th>'苹果{{ price }}/斤，折扣{{ discount }}'</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <span>请输入你要的斤数</span>
            <input type="number" v-model="num" />
          </td>
        </tr>

        <tr>
          <td>
            <button @click="Pay">结账买单</button>
          </td>
        </tr>

        <tr>
          <td>
            <span>结账单：</span>
            <span>总价：{{ sum }}￥</span>
            <span>折后价：{{ dis }}￥</span>
            <span>省了：{{ economical }}￥</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      price: 10,
      discount: "<8折>",
      num: 0,
      sum: 0,
      dis: 0,
      economical: 0,
    };
  },
  // 声明函数
  methods: {
    Pay() {
      this.sum = this.num * this.price;
      this.dis = this.sum * 0.8;
      this.economical = this.sum - this.dis;
    },
  },
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
table {
  width: 500px;
  height: 200px;
  border: 1px solid #000;
  margin: 50px auto;
  text-align: center;
}
th,
tr,
td {
  border: 1px solid #000;
  height: 50px;
}
</style>
