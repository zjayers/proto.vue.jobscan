<template>
    <b-card>
        <jx-input context="firstName" type="text"/>
        <jx-input context="lastName" type="text"/>
        <hr/>
        <jx-input context="email" type="email"/>
        <jx-input context="phoneNumber" type="tel"/>
        <hr/>
        <jx-input context="githubUsername" type="text"/>
        <jx-input context="website" type="text"/>
        <hr/>
        <jx-input context="currentJobTitle" type="text"/>
        <jx-input context="yearsOfExperience" type="number"/>
        <hr/>
        <jx-tag-input context="skills"/>
        <jx-tag-input context="platforms"/>
        <jx-input context="personalSummary" is-text-area type="text"/>
    </b-card>
</template>

<script>
import JxInput from "../../Shared/JxInput";
import JxTagInput from "../../Shared/JxTagInput";

export default {
    name: "Personal",
    components: {JxTagInput, JxInput},
}
</script>

<style scoped>

</style>
