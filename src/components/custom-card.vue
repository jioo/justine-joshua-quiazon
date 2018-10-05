<template>
    <v-card flat class="transparent">
        <v-card-text class="text-xs-center">
            <v-icon x-large class="orange--text text-darken-3">{{ icon }}</v-icon>
        </v-card-text>
        <v-card-title class="justify-center">
            <h2 class="headline">{{ title }}</h2>
        </v-card-title>
        <v-card-text class="text-xs-center">
            <p class="subheading">{{ description }}</p>
        </v-card-text>
        <v-card-text>
            <v-layout row wrap align-center>
                <div v-for="(item, index) in items" :key="index" class="text-xs-center">
                    <v-chip class="white--text" color="orange"
                    @click.prevent="notif" v-on:dblclick="redirectTo(item.url)">
                        <v-avatar class="white black--text">
                            <v-img :alt="item.name" :src="item.src"
                            :lazy-src="require('@/assets/images/place-holder-white.png')"></v-img>
                        </v-avatar>
                        {{ item.name }}
                    </v-chip>
                </div>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
    import { EventBus } from '@/event-bus.js'

    export default {
        props: {
            icon: {
                type: String,
                required: true
            },

            title: {
                type: String,
                required: true
            },

            description: {
                type: String,
                required: true
            },

            items: {
                type: Array,
                required: true
            }
        },

        methods: {
            notif () {
                EventBus.$emit('toggle-snackbar', 'Double click the icon to redirect')
            },

            redirectTo (url) {
                window.open(url, '_blank')
            }
        }
    }
</script>