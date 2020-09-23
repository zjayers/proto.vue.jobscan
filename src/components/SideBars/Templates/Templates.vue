<template>
    <div class="jx-templates-container">
        <jx-input class="template-area" context="Template" type="text" is-text-area />
        <jx-input context="contactName" type="text" />
        <jx-input context="companyName" type="text" />
        <jx-input context="jobTitle" type="text" />
        <jx-tag-input context="keywords" placeholder="Add Keywords" />

        <transition name="fade">
            <div
                class="form-group"
                v-if="getActiveTemplate === 'jx-template-Outreach' || getActiveTemplate === 'jx-template-Response'"
            >
                <select @change="handleSelectChange">
                    <option v-for="key in Object.keys(selectOptions)" :key="key">{{key}}</option>
                </select>
                <label class="control-label" for="select">Contact Type</label>
                <i class="bar"></i>
            </div>
        </transition>

        <div class="template-button-group">
            <template-button title="Cover" left="true" :template-id="TEMPLATE_COVER" />
            <template-button title="Outreach" :template-id="TEMPLATE_OUTREACH" />
            <template-button title="Response" right="true" :template-id="TEMPLATE_RESPONSE" />
        </div>
    </div>
</template>

<script>
import TemplateButton from "./TemplateButton";
import JxInput from "../../Shared/JxInput";
import JxTagInput from "../../Shared/JxTagInput";
import { TEMPLATE_OUTREACH, TEMPLATE_RESPONSE, TEMPLATE_COVER } from "../../../constants/constants";
import { templates } from "../../../data/Templates";
import { mapActions, mapGetters } from "vuex";

export default {
    name: "Templates",
    components: { TemplateButton, JxInput, JxTagInput },
    data() {
        return {
            TEMPLATE_COVER,
            TEMPLATE_OUTREACH,
            TEMPLATE_RESPONSE,
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
    },
    methods: {
        ...mapActions(["updateContactType"]),
        handleSelectChange(e) {
            this.updateContactType(e.target.value);
        },
    },
};
</script>

<style scoped lang="scss">
@import "../../../scss/_material.scss";

.template-area {
    flex: 1;
    margin-bottom: 20px;
}

.template-button-group {
    width: 100%;
    display: flex;
    margin: 20px 0;
}

.jx-templates-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
