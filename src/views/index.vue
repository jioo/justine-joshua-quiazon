<template>
    <div>
        <v-content>
            <home />
            <about />
            <skills />
            <filler />
            <projects />
            <contact />
            <scroll-to-top />
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
    import Projects from '@/components/projects'
    import Contact from '@/components/contact'
    import ScrollToTop from '@/components/scroll-to-top'
    import Snackbar from '@/components/snackbar'
    import AppFooter from '@/components/footer'

    export default {
        components: {
            Home,
            About,
            Skills,
            Filler,
            Projects,
            Contact,
            ScrollToTop,
            Snackbar,
            AppFooter
        }
    }   
</script>
