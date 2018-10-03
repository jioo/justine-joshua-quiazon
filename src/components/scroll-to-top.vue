<template>
    <v-fab-transition>
        <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            small
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop">
            <v-icon>keyboard_arrow_up</v-icon>
        </v-btn>
    </v-fab-transition>
</template>
<script>
export default {
    data () {
        return {
            fab: false
        }
    },
    methods: {
        onScroll () {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset || document.documentElement.offsetTop || 0
            const screenHeight = window.innerHeight || document.documentElement.clientHeight || 150
            this.fab = top > window.innerHeight / 2
        },
        toTop () {
            this.$vuetify.goTo(0)
        }
    }
}
</script>