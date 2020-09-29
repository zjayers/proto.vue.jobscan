<template>
    <div class="jx-templates-container">
        <div class="template-button-group">
            <template-button :template-id="TEMPLATE_COVER" left="true" title="Cover" />
            <template-button :template-id="TEMPLATE_OUTREACH" title="Outreach" />
            <template-button :template-id="TEMPLATE_RESPONSE" right="true" title="Response" />
        </div>
        <jx-input class="jx-template-area" context="Template" is-html-area type="text">
            <div
                v-if="getActiveTemplate === 'jx-template-Outreach' || getActiveTemplate === 'jx-template-Response'"
                class="form-group"
            >
                <select class="jx-select-button" @change="handleSelectChange">
                    <option v-for="key in Object.keys(selectOptions)" :key="key">{{ key }}</option>
                </select>
                <i class="bar"></i>
            </div>
        </jx-input>

        <button class="jx-copy-button ripple" @click="handleCopyButtonClick">Copy Template To Clipboard</button>
        <hr />
        <jx-input context="contactName" type="text" />
        <jx-input context="companyName" type="text" />
        <jx-input context="jobTitle" type="text" />
        <jx-tag-input context="keywords" placeholder="Add Keywords" />


    </div>
</template>

<script>
import TemplateButton from "./TemplateButton";
import JxInput from "../../Shared/JxInput";
import JxTagInput from "../../Shared/JxTagInput";
import { TEMPLATE_OUTREACH, TEMPLATE_RESPONSE, TEMPLATE_COVER } from "../../../constants/constants";
import { templates } from "../../../data/Templates";
import { mapActions, mapGetters } from "vuex";
import htmlToText from "html-to-text";

export default {
    name: "Templates",
    components: { TemplateButton, JxInput, JxTagInput },
    created() {
        this.updateContactType("Default");
        this.$store.commit("refreshTemplate", this.$store);
    },
    data() {
        return {
            TEMPLATE_COVER,
            TEMPLATE_OUTREACH,
            TEMPLATE_RESPONSE
        };
    },
    computed: {
        ...mapGetters(["getActiveTemplate", "getContactType"]),
        selectOptions() {
            switch (this.getActiveTemplate) {
                case "jx-template-Outreach":
                    return templates.Outreach;
                case "jx-template-Response":
                    return templates.Response;
                default:
                    return [];
            }
        },
        activeTemplate() {
            return this.getActiveTemplate.split("-").pop();
        }
    },
    methods: {
        ...mapActions(["updateContactType", "updateTemplate"]),
        handleSelectChange(e) {
            this.updateContactType(e.target.value);
            this.$store.commit("refreshTemplate", this.$store);
        },
        handleCopyButtonClick() {
            const el = document.getElementById("jx-html-area");
            const dummy = document.createElement("textarea");
            document.body.appendChild(dummy);
            dummy.value = htmlToText.fromString(el.innerHTML, {});
            dummy.select();
            document.execCommand("copy");
            document.body.removeChild(dummy);

        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/_material.scss";

.jx-template-area {
    height: 65%;
    margin-bottom: 10px;
}

.template-button-group {
    width: 100%;
    display: flex;
    height: 32x;
    margin-bottom: 10px;
}

.jx-templates-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-bottom: 20px;
    box-sizing: border-box !important;

    & hr {
        width: 100%;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: height 0.3s ease-out, opacity 0.3s ease-out
}

.fade-enter,
.fade-leave-to {
    height: 0;

}

.form-group {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    background-color: $gray-100;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid $gray-500;
    padding: 5px;
    height: 42px;
    width: 100%;
    box-sizing: border-box;

    & select {
        background-color: $gray-200;
        border: 1px solid $gray-500;
        border-radius: 4px;
        height: 32px;
        font-size: 12px;
        padding: 3px;
        text-align: center;
    }
}

.jx-copy-button {
    display: inline-block;
    margin-bottom: 0;
    height: auto;
    text-align: center;
    font-size: 12px;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    color: $primary;
    background-color: $white;
    border: 2px solid $primary;
    margin-left: -2px;
    border-radius: 4px;
    padding: 5px;

    &:hover {
        outline: none;
        box-shadow: none;
        color: $white;
        background-color: $primary;
        border-color: $primary;
    }
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
