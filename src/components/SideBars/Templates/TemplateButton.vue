<template>
    <div
        :id="id"
        :class="[borderRadius, activeClass]"
        class="jx-template-btn ripple"
        @click="handleButtonClick"
    >
        <div class="jx-icon-slot__templates">
            <slot></slot>
        </div>
        <p class="jx-btn-text__templates">{{ title }}</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { templates } from "../../../data/Templates";

export default {
    name: "JxTemplateButton",
    props: ["icon", "title", "templateId", "left", "right"],
    computed: {
        ...mapGetters(["getActiveTemplate"]),
        borderRadius() {
            if (this.left) return "jx-template-btn-left";
            if (this.right) return "jx-template-btn-right";
            return "";
        },
        activeClass() {
            return this.getActiveTemplate === this.id ? "jx-active-btn__templates" : "";
        },
        id() {
            return `jx-template-${this.title}`;
        }
    },
    methods: {
        ...mapActions(["updateTemplateId", "updateContactType", "updateActiveTemplate", "updateTemplate"]),
        handleButtonClick(e) {
            this.setButtonAsActive(e.target);
            this.updateActiveTemplate(this.id);
            const splitId = this.id.split("-").pop();
            const updateKey = Object.keys(templates[splitId])[0];
            this.updateContactType(updateKey);
            this.$store.commit("refreshTemplate", this.$store);
        },
        setButtonAsActive(buttonToBeActivated) {
            // Get All Jx-Buttons From The DOM
            const jxButtons = document.querySelectorAll(".jx-template-btn");
            for (const button of jxButtons) {
                button === buttonToBeActivated
                    ? button.classList.add("jx-active-btn__templates")
                    : button.classList.remove("jx-active-btn__templates");
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/_theme.scss";

.jx-icon-slot__templates {
    padding: 0;
    margin: auto;
    width: 32px;
    height: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.jx-icon-slot__templates svg {
    fill: $primary;
    width: 26px;
    height: 26px;
    transition: fill 0.25s ease;
    pointer-events: none;
}

.jx-btn-text__templates {
    margin: 0;
    color: $primary;
    pointer-events: none;
    font-family: $font;
    font-size: 1em;
    font-weight: bold;
}

.jx-template-btn {
    display: inline-block;
    margin-bottom: 0;
    flex: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    padding: 6px 0px;
    user-select: none;
    color: $primary;
    background-color: $white;
    border: 2px solid $primary;
    margin-left: -2px;
    font-size: 12px;
}

.jx-active-btn__templates,
.jx-template-btn:hover {
    outline: none;
    box-shadow: none;
    color: $white;
    background-color: $primary;
    border-color: $primary;

    & .jx-icon-slot__templates svg {
        fill: $white;
    }

    & .jx-btn-text__templates {
        color: $white;
    }
}

.jx-template-btn-left {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}

.jx-template-btn-right {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}

/* Ripple effect */
.ripple {
    background-position: center;
    transition: background 0.5s ease;
}

.ripple:hover {
    background: $primary radial-gradient(circle, transparent 1%, $primary 1%) center/15000%;
}

.ripple:active {
    background-color: $primary-highlight;
    background-size: 100%;
    transition: background 0s;
}
</style>
