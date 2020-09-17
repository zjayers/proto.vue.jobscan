<template>
    <div v-show="getAllComplete" class="wrapper">
        <div v-for="index in 100" :key="`confetti-${index}`" :class="`confetti-${index}`"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Confetti",
    computed: mapGetters(["getAllComplete"])
};
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    min-height: 100vh;
    z-index: 9999999;
}

[class|="confetti"] {
    position: absolute;
}

$colors: (#d13447, #ffbf00, #263672);

@for $i from 0 through 100 {
    $w: random(8);
    $l: random(150);
    .confetti-#{$i} {
        width: #{$w}px;
        height: #{$w*0.4}px;
        background-color: nth($colors, random(3));
        top: -10%;
        left: unquote($l+"%");
        opacity: random() + 0.5;
        transform: rotate(#{random()*360}deg);
        animation: drop-#{$i} unquote(4+random()+"s") unquote(random()+"s");
    }

    @keyframes drop-#{$i} {
        100% {
            top: 110%;
            left: unquote($l+random(15)+"%");
        }
    }
}
</style>
