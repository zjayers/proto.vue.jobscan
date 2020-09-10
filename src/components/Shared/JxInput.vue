<template>
    <b-form-group :label="label" :label-for="id" class="jx-label">
        <b-form-textarea v-if="isTextArea"
                         :id='id'
                         v-model="inputState"
                         :placeholder="`Enter your ${placeholder}`"
                         :type="type"
                         debounce="500"
                         no-resize
                         rows="8"
                         trim/>
        <b-form-input v-else
                      :id='id'
                      v-model="inputState"
                      :placeholder="`Enter your ${placeholder}`"
                      :type="type"
                      debounce="500"
                      trim/>
    </b-form-group>
</template>

<script>
export default {
    name: "JxInput",
    props: {
        context: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        isTextArea: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        capitalizedContext() {
            return this.context.charAt(0).toUpperCase() + this.context.slice(1);
        },
        id() {
            return this.context.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
        },
        placeholder() {
            return this.context.split(/([A-Z][a-z]+)/).filter((e) => e).join(' ').toLowerCase();
        },
        label() {
            return this.placeholder;
        },
        inputState: {
            get() {
                return this.$store.getters[`get${this.capitalizedContext}`];
            },
            set(value) {
                const mutationContext = this.context.charAt(0).toUpperCase() + this.context.slice(1)
                this.$store.commit(`mutate${mutationContext}`, value)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.jx-label {
    text-transform: capitalize;
}
</style>
