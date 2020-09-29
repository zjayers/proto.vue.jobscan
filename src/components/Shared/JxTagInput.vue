<template>
    <vue-tags-input
        v-model="tag"
        :allow-edit-tags="true"
        :avoid-adding-duplicates="true"
        :placeholder="placeholder || 'Add New Tag'"
        :tags="inputState"
        @tags-changed="handleTagsChanged"
    />
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";

export default {
    name: "JxTagInput",
    components: {
        VueTagsInput
    },
    data() {
        return {
            tag: ""
        };
    },
    props: {
        context: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false
        }
    },
    methods: {
        handleTagsChanged(newTags) {
            this.inputState = newTags;
            this.$store.commit("refreshTemplate", this.$store);
        }
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
                const mutationContext = this.context.charAt(0).toUpperCase() + this.context.slice(1);
                this.$store.commit(`set${mutationContext}`, value);
            }

        }
    }
};
</script>

<style lang="scss">

@import '../../scss/theme';

.vue-tags-input {
    margin-bottom: 10px;
}

.vue-tags-input .ti-input {
    padding: 4px 10px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid $gray-500;
    min-height: 2.5rem;
}


.vue-tags-input.ti-focus .ti-input {
    box-shadow: 0 0 0 1px $primary;
    border-radius: 4px;
    border-color: $primary;
    font-size: 16px;

}

.vue-tags-input .ti-autocomplete {
    background: $gray-200;
    border: 1px solid $gray-500;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -2px;
    color: $gray-900;
}

.vue-tags-input .ti-item.ti-selected-item {
    background: $primary-highlight;
    color: $gray-900;
}

.vue-tags-input .ti-tag {
    position: relative;
    background: $primary;
    color: $white;
}

.vue-tags-input .ti-tag.ti-invalid {
    background-color: $red;
}

.vue-tags-input .ti-new-tag-input.ti-invalid {
    color: $red;
}

.vue-tags-input .ti-duplicate span,
.vue-tags-input .ti-new-tag-input.ti-duplicate {
    text-decoration: line-through;
}

.ti-input ul li input {
    box-shadow: none !important;
}

.vue-tags-input .ti-tag:after {
    transition: transform .2s;
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    left: 0;
    top: calc(50% - 1px);
    background-color: $gray-900;
    transform: scaleX(0);
}

.vue-tags-input .ti-deletion-mark:after {
    transform: scaleX(1);
}

.vue-tags-input ::-webkit-input-placeholder,
.vue-tags-input ::-moz-placeholder,
.vue-tags-input :-ms-input-placeholder,
.vue-tags-input :-moz-placeholder {
    color: $gray-600;
    font-size: .9em;
}
</style>
