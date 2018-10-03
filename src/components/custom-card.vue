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
                    <v-chip class="white--text" color="orange">{{ item.name }}</v-chip>
                </div>
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