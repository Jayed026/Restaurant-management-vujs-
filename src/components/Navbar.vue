<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>

    <a v-on:click="logout" href="#">LogOut</a>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: rgb(92, 109, 54);
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: antiquewhite;
  color: #222;
}
</style>
