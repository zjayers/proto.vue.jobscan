<template>
    <div class="jx-input-wrapper">
        <label :for="id" class="jx-input-label">{{ label }}</label>
        <textarea
            v-if="isTextArea"
            :id="id"
            v-model="inputState"
            :placeholder="`Enter your ${placeholder}`"
            :type="type"
            rows="8"
            class="jx-text-area"
        />
        <input
            v-else
            :id="id"
            class="jx-text-input"
            v-model="inputState"
            :placeholder="`Enter your ${placeholder}`"
            :type="type"
        />
    </div>
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
        },
        debounce: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        capitalizedContext() {
            return this.context.charAt(0).toUpperCase() + this.context.slice(1);
        },
        id() {
            return this.context.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
        },
        placeholder() {
            return this.context
                .split(/([A-Z][a-z]+)/)
                .filter(e => e)
                .join(" ")
                .toLowerCase();
        },
        label() {
            return this.placeholder;
        },
        inputState: {
            get() {
                return this.$store.getters[`get${this.capitalizedContext}`];
            },
            set(value) {
                const mutationContext = this.context.charAt(0).toUpperCase() + this.context.slice(1);
                this.$store.commit(`mutate${mutationContext}`, value);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.jx-input-wrapper {
    width: 100%;
    margin: 10px;
}

.jx-text-area,
.jx-text-input {
    width: 90%;
    margin-top: 5px;
}

.jx-input-label {
    text-transform: capitalize;
}
</style>
