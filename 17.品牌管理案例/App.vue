<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{ red: item.price > 100 }">{{ item.price }}</td>
            <td>{{ item.time | formatTime }}</td>
            <td><a a href=" " @click.prevent="del(item)">删除</a></td>
          </tr>
        </tbody>
        <!-- 
    <tfoot >
     <tr>
      <td colspan="5" style="text-align: center">暂无数据</td>
     </tr>
    </tfoot>
      --></table>

      <!-- 添加资产 -->
      <form class="form-inline" @submit.prevent>
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="资产名称"
              v-model.trim="name"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="价格"
              v-model.number="price"
            />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <!-- form表单 input：submit，button 触发表单提交事件 -->
        <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 下载yarn add bootstrap
// 2. 引入样式

export default {
  data() {
    return {
      name: "", // 名称
      price: 0, // 价格
      list: [
        { id: 100, name: "外套", price: 199, time: new Date("2010-08-12") },
        { id: 101, name: "裤子", price: 34, time: new Date("2013-09-01") },
        { id: 102, name: "鞋", price: 25.4, time: new Date("2018-11-22") },
        { id: 103, name: "头发", price: 19900, time: new Date("2020-12-12") },
      ],
    };
  },
  methods: {
    addFn() {
      //[1,2,3,4,5].at(索引值) 支持负数 取出-几的值
      // 0.合法性校验
      if (this.name === "" || this.price === 0) {
        return alert("请输入有效名称和价格");
      }
      //1.新建资产对象
      const id = this.list.length > 0 ? this.list.at(-1).id + 1 : 0;
      const asset = {
        // id:this.list[this.list.length-1].id+1,
        id,
        name: this.name,
        price: this.price,
        time: new Date(),
      };
      //2.添加
      this.list.push(asset);
      //3.清空数据
      this.name = "";
      this.price = 0;
    },
    del({ id }) {
      // 1.删除的是哪一个
      // 2.删除-->过滤
      //filter 的返回值：新数组
      //返回true -->将当前项保留
      //false -->将当前项移除
      //  this.list= this.list.filter((item)=>{
      // if(item.id===id){
      // return false
      // }else{
      // return true
      // }
      // })
      this.list = this.list.filter((item) => item.id !== id);
    },
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>