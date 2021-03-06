<template>
    <section>
        <v-container grid-list-lg>
            <v-layout
                class="text-xs-center" 
                row wrap 
                justify-center 
                my-5 
            >

                <v-flex xs12 my-5>
                    <h2 class="headline orange--text text--darken-3">Projects</h2>
                    <p>{{ description }}</p>
                </v-flex>
                
                <v-flex 
                    md6 sm12 
                    v-for="item in projects" 
                    :key="item.name"
                >
                    <v-card hover dark>
                        <v-img
                            class="pointer"
                            @click.prevent="redirectTo(item.actions[0].link)"
                            :src="item.src"
                            :lazy-src="require('@/assets/images/place-holder.jpg')"
                            max-height="275"
                            position="top center"
                        >
                            <v-layout
                                slot="placeholder"
                                fill-height
                                align-center
                                justify-center
                                ma-0
                            >
                                <v-progress-circular indeterminate color="orange"></v-progress-circular>
                            </v-layout>
                        </v-img>

                        <v-card-text class="pb-0">
                            <span class="subheading">{{ item.name }}</span>
                        </v-card-text>

                        <v-card-text class="pb-0">
                            <v-chip 
                                class="white--text" 
                                color="orange" 
                                v-for="framework in item.frameworks" 
                                :key="framework.name"
                            >
                                <v-avatar class="white black--text">
                                    <v-img 
                                        :alt="framework.name" 
                                        :src="framework.src" 
                                        transition="scale-transition"
                                        :lazy-src="require('@/assets/images/place-holder-white.png')"
                                    ></v-img>
                                </v-avatar>
                                {{ framework.name }}
                            </v-chip>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-tooltip 
                                top class="px-2"
                                v-for="(action, index) in item.actions"
                                :key="index"
                            >
                                <v-btn 
                                    icon small
                                    slot="activator"
                                    @click.prevent="redirectTo(action.link)" 
                                    :aria-label="action.name"
                                >
                                    <v-icon>{{ action.icon }}</v-icon>
                                </v-btn>
                                <span>{{ action.name }}</span>
                            </v-tooltip>

                        </v-card-actions>
                    </v-card>
                </v-flex>

            </v-layout>
        </v-container>
    </section>
</template>

<script>
import Common from '@/mixins/common.js'

export default {
    mixins: [ Common ],

    data () {
        return {
            description: 'Some of my pet projects.',
            projects: [
                {
                    name: 'Attendance System',
                    src: require('@/assets/images/dotnetcore-attendance-demo.gif'),
                    toggle: false,
                    frameworks: [
                        { name: '.Net Core', src: require('@/assets/images/icons/dotnetcore.jpg') },
                        { name: 'Vue + Vuex', src: require('@/assets/images/icons/vue.jpg') },
                        { name: 'Vuetify', src: require('@/assets/images/icons/vuetify.jpg') },
                    ],
                    actions: [
                        { name:'Source Code', icon: 'code', link: 'https://github.com/jioo/Dotnet-Core-Attendance-System' }
                    ]
                },

                {
                    name: 'Gamehub',
                    src: require('@/assets/images/game-hub.png'),
                    toggle: false,
                    frameworks: [
                        { name: 'Storyblok', src: require('@/assets/images/icons/storyblok.jpg') },
                        { name: 'Nuxt', src: require('@/assets/images/icons/nuxt.jpg') },
                        { name: 'Vuetify', src: require('@/assets/images/icons/vuetify.jpg') },
                    ],
                    actions: [
                        { name:'Website', icon: 'fas fa-globe', link: 'https://jioo.github.io/games' },
                        { name:'Source Code', icon: 'code', link: 'https://github.com/jioo/games' }
                    ]
                },

                {
                    name: 'LaraVuetify',
                    src: require('@/assets/images/laravuetify-demo.gif'),
                    toggle: false,
                    frameworks: [
                        { name: 'Laravel', src: require('@/assets/images/icons/laravel.jpg') },
                        { name: 'Vuetify', src: require('@/assets/images/icons/vuetify.jpg') },
                    ],
                    actions: [
                        { name:'Source Code', icon: 'code', link: 'https://github.com/jioo/laravuetify' }
                    ]
                },

                {
                    name: 'TAX PH',
                    src: require('@/assets/images/tax-ph.jpg'),
                    toggle: false,
                    frameworks: [
                        { name: 'Vue', src: require('@/assets/images/icons/vue.jpg') },
                        { name: 'UIkit', src: require('@/assets/images/icons/uikit.jpg') },
                    ],
                    actions: [
                        { name:'Website', icon: 'fas fa-globe', link: 'https://tax-ph.com' },
                        { name:'Source Code', icon: 'code', link: 'https://github.com/jioo/tax-calculator' },
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
    .v-card {
        cursor: default;
        border-radius:5px;
    }
</style>
