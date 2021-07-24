<template>
  <div>
    <img class="logo" src="../assets/reslogo.jpg" />
    <h1>sign up</h1>
    <div class="register">
      <input
        type="text"
        name="name"
        placeholder="enter your name"
        v-model="name"
      /><br />
      <input
        type="text"
        name="email"
        placeholder="enter your email"
        v-model="email"
      /><br />
      <input
        type="text"
        name="password"
        placeholder="enter your password"
        v-model="password"
      /><br />
      <b-button variant="success" v-on:click="signup">Signup</b-button>
      <br /><br />
      <p>
        <router-link to="/login"
          ><b-button variant="success">Go to login page</b-button></router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "signUp",
  data() {
    return {
      name: "",
      email: " ",
      password: "",
    };
  },
  methods: {
    async signup() {
      console.log("signup", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        alert("signup done");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ path: "/" });
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
