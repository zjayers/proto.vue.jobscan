<template>
    <div>
        <jx-input context="firstName" type="text" />
        <jx-input context="lastName" type="text" />
        <jx-input context="email" type="email" />
        <jx-input context="phoneNumber" type="tel" />
        <jx-input context="githubUsername" type="text" />
        <jx-input context="website" type="text" />
        <jx-input context="currentJobTitle" type="text" />
        <jx-input context="yearsOfExperience" type="number" />
        <jx-input context="personalSummary" type="text" is-text-area/>
        <jx-tag-input context="platforms" placeholder="Add Platforms"/>
        <jx-tag-input context="skills" placeholder="Add Skills"/>
    </div>
</template>

<script>
import JxInput from "../../Shared/JxInput";
import JxTagInput from "../../Shared/JxTagInput";

export default {
    name: "Personal",
    components: { JxTagInput, JxInput },
};
</script>

<style lang="scss" scoped></style>
