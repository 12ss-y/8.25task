<template>
  <div>
    <form action="">
      <div>
        <ladel>
          <span>账号</span>
          <input type="text" v-model="account" />
        </ladel>
      </div>

      <div>
        <ladel>
          <span>密码</span>
          <input type="password" v-model="paw" />
        </ladel>
      </div>

      <label>
        <span>男：</span>
        <input type="radio" name="gender" value="男" v-model="gender" />
      </label>

      <label>
        <span>女：</span>
        <input type="radio" name="gender" value="女" v-model="gender" />
      </label>

      <div>
        <label>
          <span>睡觉：</span>
          <input type="checkbox" value="睡觉" v-model="hobby" />
        </label>

        <label>
          <span>吃饭：</span>
          <input type="checkbox" value="吃饭" v-model="hobby" />
        </label>

        <label>
          <span>学习：</span>
          <input type="checkbox" value="学习" v-model="hobby" />
        </label>
      </div>

      <h6>选择城市：</h6>
      <select v-model="city">
        <option value="beijing" >北京</option>
        <option value="hangzhou">杭州</option>
        <option value="guangzhou">广州</option>

      </select>

      <h6>收集用户意见：</h6>
      <textarea cols="30" rows="10" v-model="msg"></textarea>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: "",
      paw: "",
      gender: "",
      hobby: [],
      city:'beijing',
      msg:'',
    };
  },
  methods: {},
};
</script>
// scoped样式只作用于当前Vue文件，不加scoped样式会作用于所有的Vue文件
<style scoped></style>
