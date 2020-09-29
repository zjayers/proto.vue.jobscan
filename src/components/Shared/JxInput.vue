<template>
    <div class="jx-input-wrapper">
        <div class="jx-input-container">
            <textarea
                v-if="isTextArea"
                :id="id"
                v-model="inputState"
                :class="hasContent"
                :name="id"
                class="jx-input jx-text-area no-resize"
                rows="8"
                v-html="inputState"
            />

            <template v-else-if="isHtmlArea" class="jx-html-wrapper">
                <pre
                    id="jx-html-area"
                    :class="hasContent"
                    :name="id"
                    class="jx-input jx-text-area"
                    v-html="innerHTML"
                />

                <slot></slot>
            </template>


            <input
                v-else
                :id="id"
                v-model="inputState"
                :class="hasContent"
                :name="id"
                :type="type"
                class="jx-input"
                min="0"
            />
            <label :for="id" class="jx-label">{{ label }}</label>
        </div>
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
        isHtmlArea: {
            type: Boolean,
            required: false
        },
        content: {
            type: String,
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
                .filter((e) => e)
                .join(" ")
                .toLowerCase();
        },
        innerHTML() {
            return this.$store.getters[`get${this.capitalizedContext}`];
        },
        inputState: {
            get() {
                return this.$store.getters[`get${this.capitalizedContext}`];
            },
            set(value) {
                const mutationContext = this.context.charAt(0).toUpperCase() + this.context.slice(1);
                this.$store.commit(`set${mutationContext}`, value);
                this.$store.commit("refreshTemplate", this.$store);
            }
        },
        hasContent() {
            return this.inputState !== "" ? "has-content" : "";
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/_theme.scss";

.jx-input-wrapper {
    width: 100%;
}

.jx-input-container {
    position: relative;
    display: block;
    clear: both;
    max-width: 500px;
    margin: 0 auto;
    height: 100%;

    & label {
        margin: 0;
    }
}

.jx-text-area {
    height: 100% !important;
    word-wrap: break-word;
    overflow-y: scroll;
    line-height: 1.6;
}

#jx-html-area {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 12px !important;
    word-break: normal;
    padding-top: 16px;
}

.jx-html-wrapper p {
    font-size: 12px !important;
}

.jx-label {
    transform: translateY(50%);
    transition: all 0.1s ease-in-out;
    position: absolute;
    top: 2px;
    left: 16px;
    background: none;
    color: $gray-600;
    font-weight: normal;
    cursor: text;
    pointer-events: none;
    text-transform: capitalize;
    line-height: 1.2;
}


.jx-input {
    display: block;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: white !important;
    border: 1px solid $gray-500;
    font-size: 16px;
    margin-bottom: 0.75em;
    padding: 0.6em 0.5em;
    width: 100%;
    margin-top: 5px;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px $white;
    height: 40px;

    &:focus {
        border-color: $primary !important;
        outline-color: $primary !important;
    }
}

.no-resize {
    resize: none;
}

.jx-input:focus ~ .jx-label,
.jx-input.has-content ~ .jx-label {
    top: -14px;
    font-size: 14px;
    padding: 0 2px;
    background: $gray-100;
    border-radius: 100px;
}

.jx-input:focus ~ .jx-label,
.jx-text-area:focus ~ .jx-label {
    color: $primary;
}

.jx-text-area:focus ~ .jx-label,
.jx-text-area.has-content ~ .jx-label {
    top: -14px;
    font-size: 14px;
    padding: 0 2px;
    background: $gray-100;
    border-radius: 100px;
}
</style>

