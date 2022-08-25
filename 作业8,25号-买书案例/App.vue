<template>
  <div>
    <div>
      {{ msg }}<br/>
      <ul>
        <li v-for='(item,index) in arr' :key="index">
          <span>{{ item['name']}}</span>
          <button @click="buy(index)">买书</button>
        </li>
      </ul>
      <table border="1" width='500' cellspacing='0'>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>单价</th>
          <th>数量</th>
          <th>合计</th>
        </tr>
        <tr v-for='(item,index) in arr' :key='index'>
          <td>{{index + 1}}</td>
          <td>{{item['name']}}</td>
          <td>{{item['price']}}</td>
          <td>{{item['num']}}</td>
          <td>{{item['price']*item['num']}}</td>

        </tr>
      </table>
      <p>总价格为：{{ allPrice }}</p>
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "请选择你要购买的书籍",
      arr: [
        {
          name: '水浒传',
          price:107,
          num:0
        },
        {
          name: '西游记',
          price:192,
          num:0
        },
        {
          name: '三国演义',
          price:219,
          num:0
        },
        {
          name: '红楼梦',
          price:178,
          num:0
        },
      ],
    };
  },
  // 声明函数
  methods: {
    buy(index) {
      this.arr[index]['num']++
      
    },
  },
  computed: {
    allPrice() {
      return this.arr.reduce((sum,obj) => {
        return (sum += obj['price']*obj['num'])
      },0)
    }
  }
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped>
th,td {
  border: 1px solid #000;
  height: 30px;
   text-align: center;
}
</style>
