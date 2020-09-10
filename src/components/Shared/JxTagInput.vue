<template>
    <div>
        <textarea
            v-model="inputState"
            :input-id="context"
            :placeholder="`Enter ${context}`"
            class="mb-2"
        ></textarea>
    </div>
</template>

<script>
export default {
    name: "JxTagInput",
    props: {
        context: {
            type: String,
            required: true
        },
    },
    computed: {
        capitalizedContext() {
            return this.context.charAt(0).toUpperCase() + this.context.slice(1);
        },
        inputState: {
            get() {
                return this.$store.getters[`get${this.capitalizedContext}`];
            },
            set(value) {
                this.$store.commit(`mutate${this.capitalizedContext}`, value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
