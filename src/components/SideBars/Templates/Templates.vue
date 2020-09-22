<template>
    <div class="jx-templates-container">
        <template-button title="Cover" left="true" :template-id="TEMPLATE_COVER" />
        <template-button title="Outreach" :template-id="TEMPLATE_OUTREACH" />
        <template-button title="Response" right="true" :template-id="TEMPLATE_RESPONSE" />
    </div>
</template>

<script>
import TemplateButton from "./TemplateButton";
import { TEMPLATE_OUTREACH, TEMPLATE_RESPONSE, TEMPLATE_COVER } from "../../../constants/constants";

export default {
    name: "Templates",
    components: { TemplateButton },
    data() {
        return {
            TEMPLATE_COVER,
            TEMPLATE_OUTREACH,
            TEMPLATE_RESPONSE,
        };
    },
};
</script>

<style scoped lang="scss">
.jx-templates-container {
    width: 100%;
}
</style>
