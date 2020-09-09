<template>
    <div class="toast-container">
        <b-button class="toast-btn mb-2" variant="success" @click="$bvToast.show('toast-content')">
            <b-icon-plus/>
        </b-button>
        <b-toast id="toast-content" class="toast-content" no-auto-hide static title="Add Job To Tracker">
            Hello, world! This is a toast message.
        </b-toast>
    </div>
</template>

<script>
export default {
    name: "JxJobSave"
}
</script>

<style scoped>
.toast-container {
    position: relative;
}

.toast-btn {
    position: absolute;
    padding: 5px;
    bottom: -40px;
    left: -35px;
    display: flex;
    width: 30px;
    height: 30px;
    text-align: center;
    justify-content: center;
}

.toast-content {
    position: absolute !important;
    bottom: 30px;
    left: -30px;
}
</style>
