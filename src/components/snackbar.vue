<template>
    <v-snackbar v-model="snackbar" color="orange darken-2">
        {{ text }}
        <v-btn flat @click="snackbar = false">
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
import { EventBus } from '@/event-bus.js'

export default {
    data () {
        return {
            snackbar: false,
            text: ''
        }
    },

    created () {
        EventBus.$on('toggle-snackbar', (data) => {
            this.snackbar = true
            this.text = data
        })
    }
}
</script>