<template>
    <div>
        <v-content v-images-loaded="loaded">
            <home />
            <about />
            <skills />
            <filler />
            <testimonials />
            <contact />
            <loading />
            <snackbar />
        </v-content>
        <app-footer />
    </div>
</template>
    
<script>
    import { mapGetters } from 'vuex'
    import imagesLoaded from 'vue-images-loaded'
    import Home from '@/components/home'
    import About from '@/components/about'
    import Skills from '@/components/skills'
    import Filler from '@/components/filler'
    import Testimonials from '@/components/testimonials'
    import Contact from '@/components/contact'
    import Loading from '@/components/loading'
    import Snackbar from '@/components/snackbar'
    import AppFooter from '@/components/footer'

    export default {
        components: {
            Home,
            About,
            Skills,
            Filler,
            Testimonials,
            Contact,
            Loading,
            Snackbar,
            AppFooter
        },

        directives: {
            imagesLoaded
        },

        computed: {
            ...mapGetters(["isLoading"])
        },

        methods:{
            loaded () {
                this.$store.dispatch(LOADING_END)
            }
        }
    }   
</script>
