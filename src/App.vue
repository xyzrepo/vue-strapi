<template>
  <div id="app">
    <button @click="login">Login</button> X
    <button @click="logout">Logout</button>
    <div v-if="$strapi.user">
      {{ $strapi.user }}
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    login() {
      this.$strapi.login({
        identifier: "baker@shamlan.sa",
        password: "a813424B"
      });
    },
    logout() {
      this.$strapi.logout();
    }
  }
};
</script>
