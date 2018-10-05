<template>
    <section>
        <v-container>
            <v-layout row wrap justify-center my-5>
                <v-flex xs12 my-5>
                    <h2 class="headline text-xs-center orange--text text--darken-3">About me</h2>
                </v-flex>
                <v-flex md8>
                    <v-container grid-list-xl>
                        <v-layout row wrap>
                            <v-flex md4 xs12 class="text-xs-center">
                                <v-avatar color="indigo" :size="150" class="mb-3">
                                    <v-img
                                        alt="profile"
                                        :src="require('@/assets/images/profile.jpg')"
                                        :lazy-src="require('@/assets/images/place-holder.jpg')"></v-img>
                                </v-avatar>
                                <h4 class="subheading orange--text text--darken-3">{{ name }}</h4>
                                <p>
                                    {{ job }}
                                </p> 
                            </v-flex>
                            <v-flex md8 xs12 class="text-xs-left">
                                <p class="subheading">
                                    {{ about1 }}
                                    <br /><br />
                                    {{ about2 }}
                                </p>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                name: 'Justine Joshua Quiazon',
                job: 'Software Developer',
                about1: 'Experienced Software Engineer with a demonstrated history of ' +
                'working in the IT industry. Strong engineering professional with a ' +
                'Bachelor\'s degree focused in Information Technology from University of ' +
                'Perpetual Help System DALTA. ',
                about2: 'I\'ve been a freelance software developer since January 2017. ' +
                'I\'m having clients and receiving projects through recommendations ' +
                'of my colleagues because they are confident that I can do it and ' +
                'they are fully aware of my skills and capabilities. So far, I\'ve ' +
                'managed to finish all of my projects from small to large businesses ' +
                'and my clients were all satisfied. I\'m looking forward for more projects ' +
                'and I\'ll be more than happy to satisfy more clients.'
            }
        }
    }
</script>