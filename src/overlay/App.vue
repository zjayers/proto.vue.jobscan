<template>
  <div>
    <div class="jscan-container fixed-left top-most">
      <hello-world></hello-world>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.jscan-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  bottom: 0;
  height: 100vh;
  width: 180px;
  position: fixed;
  background: dodgerblue;
}

.fixed-left {
  left: 0;
}

.top-most {
  z-index: 99999;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
