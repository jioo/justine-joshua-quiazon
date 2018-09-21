<template>
    <div>
        <v-content>
            <home />
            <about />
            <skills />
            <filler />
            <testimonials />
            <contact />
            <snackbar />
        </v-content>
        <app-footer />
    </div>
</template>
    
<script>
    import Home from '@/components/home'
    import About from '@/components/about'
    import Skills from '@/components/skills'
    import Filler from '@/components/filler'
    import Testimonials from '@/components/testimonials'
    import Contact from '@/components/contact'
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
            Snackbar,
            AppFooter
        }
    }   
</script>
