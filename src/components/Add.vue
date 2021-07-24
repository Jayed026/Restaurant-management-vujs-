<template>
  <div>
    <Navbar />
    <h1>this is add restaurant page</h1>
    <form class="add">
      <input
        type="text"
        placeholder="enter name"
        v-model="restaurant.name"
        name="name"
      />
      <br />
      <input
        type="text"
        placeholder="enter address"
        v-model="restaurant.address"
        name="address"
      />
      <br />
      <input
        type="text"
        placeholder="enter contact"
        v-model="restaurant.contact"
        name="contact"
      /><br />
      <b-button variant="success" v-on:click="addRestaurant"
        >Add new Restaurat</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
export default {
  name: "Add",

  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  components: {
    Navbar,
  },

  methods: {
    async addRestaurant() {
      console.log(
        this.restaurant.name,
        this.restaurant.address,
        this.restaurant.contact
      );
      let result = await axios.post("http://localhost:3000/restaurant", {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact,
      });
      console.log(result);
      if (result.status == 201) {
        alert("add restaurant done");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ path: "/" });
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ path: "/signup" });
    }
  },
};
</script>

<style scoped>
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: black;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid green;
}
</style>
