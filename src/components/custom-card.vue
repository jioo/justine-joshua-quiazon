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
                <ul v-for="(item, index) in items" :key="index">
                    <li class="subheading" >
                    {{ item.name }}
                    </li>
                </ul>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
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
        }
    }
</script>