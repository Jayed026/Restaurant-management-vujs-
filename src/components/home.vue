<template>
  <div>
    <Navbar />
    <h1 style="color:orange">this is home page</h1>

    <table border="1px solid black">
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>
          <router-link :to="'/update/' + item.id">update</router-link>
          <b-button variant="success" v-on:click="deleteRestaurant(item.id)"
            >Delete</b-button
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";

export default {
  name: "home",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete("http://localhost:3000/restaurant/" + id);
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      console.log("User", user);
      this.name = JSON.parse(user).name;

      if (!user) {
        this.$router.push({ path: "/signup" });
      }
      let result = await axios.get("http://localhost:3000/restaurant");

      console.log("output", result.data);
      this.restaurants = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
td {
  width: 200px;
  height: 50px;
}
</style>
