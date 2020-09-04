<template>
    <div>
        <div class="jscan-container fixed-left top-most">
            <hello-world/>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.jscan-container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    top: 0;
    height: 100vh;
    width: 180px;
    position: fixed;
    background: rgba(0, 0, 0, .4);
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
