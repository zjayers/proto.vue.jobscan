<template>
    <div class="jx-input-wrapper">
        <span class="jx-input-container">
            <input :id="id" :name="id" class="jx-input" v-model="inputState" :type="type" />
            <label :for="id" class="jx-label">{{ label }}</label>
        </span>
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
        label() {
            return this.context
                .split(/([A-Z][a-z]+)/)
                .filter(e => e)
                .join(" ")
                .toLowerCase();
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
@import "../../scss/_theme.scss";

.jx-input-wrapper {
    width: 240px;
    margin: 10px;
}

.jx-input-container {
    position: relative;
    display: block;
    clear: both;
    max-width: 500px;
    margin: 0 auto;
}

.jx-label {
    transform: translateY(50%);
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 4%;
    left: 1em;
    background: none;
    color: #b3b3b3;
    font-weight: normal;
    cursor: text;
    pointer-events: none;
    text-transform: capitalize;
}

.jx-input {
    display: block;
    border-radius: 3px;
    transition: border-color;
    box-sizing: border-box;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #ddd;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.06);
    font-size: 1em;
    margin-right: 0;
    margin-bottom: 0.75em;
    padding: 0.5em 0.5em;
    width: 90%;
    margin-top: 5px;
}

.jx-input:focus ~ .jx-label,
.jx-input.hascontent ~ .jx-label {
    top: -40%;
    font-size: 0.8em;
    padding: 0 0.3em;
    background: $gray-100;
    border-radius: 100px;
}
</style>
