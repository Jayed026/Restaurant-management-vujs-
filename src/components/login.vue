<template>
  <div>
    <img class="logo" src="../assets/reslogo.jpg" />
    <h1>Log In</h1>
    <div class="register">
      <input
        type="text"
        name="email"
        v-model="email"
        placeholder="enter mail"
      /><br />
      <input
        type="text"
        name="password"
        placeholder="enter your password"
        v-model="password"
      /><br />
      <b-button variant="success" v-on:click="login">login</b-button>
    </div>
    <br />
    <p>
      <router-link to="/signup"
        ><b-button variant="success">Go to SignUp page</b-button></router-link
      >
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?emai=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ path: "/" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: black;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid green;
}
.register button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: green;
  cursor: pointer;
}
</style>
