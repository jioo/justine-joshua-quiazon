<template>
    <v-container fill-height>
        <v-layout align-center justify-center>
            <div class="headline">
                <vue-typer 
                    erase-style='clear'
                    :type-delay='120'
                    :pre-erase-delay='6000'
                    :text="message">
                </vue-typer>
            </div>
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

<style>
    .vue-typer .custom.char.typed {
        color: #000000 !important;
    }
</style>
