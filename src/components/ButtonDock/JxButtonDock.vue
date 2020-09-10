<template>
    <div class="jx-btn-container">
        <b-card-header class="p-1 jx-transition" header-tag="header" role="tab">
            <b-button v-b-toggle.jx-bottom-accordion
                      v-b-tooltip.hover.top="(showAccordionIcon ? 'Show' : 'Hide') + ' Toolbar'" block
                      variant="info">
                <b-icon-briefcase v-show="showAccordionIcon"/>
            </b-button>
        </b-card-header>
        <b-collapse id="jx-bottom-accordion" accordion="jx-accordion" role="toolbar" visible>
            <jx-job-save/>
            <b-button-group>
                <jx-button :sidebar-id="SIDEBAR_PERSONAL" icon="person-badge" title="Personal"/>
                <jx-button :sidebar-id="SIDEBAR_JOB_BOARD" icon="briefcase" title="Job Board"/>
                <jx-button :sidebar-id="SIDEBAR_TEMPLATES" icon="newspaper" title="Templates"/>
                <jx-button :sidebar-id="SIDEBAR_METRICS" icon="clipboard-data" title="Metrics"/>
            </b-button-group>
        </b-collapse>
    </div>
</template>

<script>
import JxButton from "./JxButton";
import {SIDEBAR_JOB_BOARD, SIDEBAR_METRICS, SIDEBAR_PERSONAL, SIDEBAR_TEMPLATES} from "../../constants/constants";
import JxJobSave from "./JxJobSave";

export default {
    name: 'ButtonDock',
    components: {JxJobSave, JxButton},
    data: () => ({
        showAccordionIcon: true,
        SIDEBAR_JOB_BOARD,
        SIDEBAR_TEMPLATES,
        SIDEBAR_METRICS,
        SIDEBAR_PERSONAL
    }),
    mounted() {
        // Check For Button Bar Collapse State
        this.$root.$on('bv::collapse::state', (id) => {

            // If the collapse state updates is that of the accordion bar
            if (id === 'jx-bottom-accordion') {

                // And if the accordion icon is showing - hide the accordion icon
                if (this.showAccordionIcon) {
                    this.showAccordionIcon = !this.showAccordionIcon;
                } else {
                    // Wait for 350 ms then show the accordion icon
                    const v = this;
                    setTimeout(() => {
                        v.showAccordionIcon = !v.showAccordionIcon;
                    }, 350)
                }
            }
        })
    }
}
</script>

<style scoped>

.jx-btn-container {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
}

.jx-transition {
    transition: all 1s ease-in-out;
}

</style>
