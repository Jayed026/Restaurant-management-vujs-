<template>
  <div>
    <Navbar />
    <h1>this is update page</h1>

    <form class="update">
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
      <b-button variant="success" v-on:click="updateRestaurant"
        >Update Restaurat</b-button
      >
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
export default {
  name: "update",

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
    async updateRestaurant() {
      const result = await axios.put(
        "http://localhost:3000/restaurant/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ path: "/" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ path: "/signup" });
    }
    console.log(this.$route.params.id);
    const result = await axios.get(
      "http://localhost:3000/restaurant/" + this.$route.params.id
    );
    this.restaurant = result.data;
  },
};
</script>

<style scoped>
.update input {
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
