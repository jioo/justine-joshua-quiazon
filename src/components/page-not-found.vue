<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <div class="headline" v-text="message"></div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            message: 'Error 404: Page not found'
        }
    },

    metaInfo () {
        return {
            title: 'Page not found',
            titleTemplate: '%s', 
        }
    }
}
</script>
