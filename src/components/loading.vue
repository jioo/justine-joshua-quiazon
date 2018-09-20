<template>
    <section>
        <v-layout row justify-center>
            <v-dialog v-model="isLoading" persistent fullscreen content-class="loading-dialog white" :transition="'fade-transition'">
                <v-container fill-height>
                    <v-layout row justify-center align-center>
                        <v-progress-circular indeterminate :size="70" :width="7" color="orange"></v-progress-circular>
                    </v-layout>
                </v-container>
            </v-dialog>
        </v-layout>
    </section>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return  {
                test: true
            }
        },

        computed: {
            ...mapGetters(["isLoading"])
        }
    }
</script>