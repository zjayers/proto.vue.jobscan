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
    </div>
</template>

<script>
import JxInput from "../../Shared/JxInput";

export default {
    name: "Personal",
    components: { JxInput }
};
</script>

<style lang="scss" scoped></style>
