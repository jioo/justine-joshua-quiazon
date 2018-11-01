<template>
    <v-app >
        <router-view />
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data () {
        return {
            title: 'Justine Joshua Quiazon',
            description: 'A Software Developer that writes clean, elegant, and efficient code.',
            summary: 'A Software Developer that writes clean, elegant, and efficient code.',
            keywords: 'Justine Joshua Quiazon, Justine, Joshua, Quiazon, Jio, Full Stack Software Developer, ' +
            'Freelance Web Developer, Freelance Programmer, Software Developer, Web Developer, Computer Programmer, Programmer',
            pageUrl: 'https://jioo.github.io/',
            imageUrl: 'https://jioo.github.io/img/logo-200x200.png',
            imageType: 'image/png',
            imageWidth: '200',
            imageHeight: '200',
            imageAlt: 'Jio',
            fbAppId: '1898770410200554',
            twiiterCardType: 'summary'
        }
    },

    metaInfo () {
        return {
            title: `${this.title}`,
            titleTemplate: '%s | Software Developer', 
            meta: [
                // Regular Meta Info
                { 'name': 'description', 'content': `${this.description}` },
                { 'name': 'keywords', 'content': `${this.keywords}` },

                // OpenGraph Meta Info (Most widely used, e.g. Facebook)
                { 'property': 'og:title', 'content': `${this.title}` },
                { 'property': 'og:url', 'content': `${this.pageUrl}` },
                { 'property': 'og:description', 'content': `${this.description}` },
                { 'property': 'og:image', 'content': `${this.imageUrl}` },
                { 'property': 'og:image:type', 'content': `${this.imageType}` },
                { 'property': 'og:image:width', 'content': `${this.imageWidth}` },
                { 'property': 'og:image:height', 'content': `${this.imageHeight}` },
                { 'property': 'og:image:alt', 'content': `${this.imageAlt}` },

                // Google+ Meta Info
                { 'itemprop': 'name', 'content': `${this.title}` },
                { 'itemprop': 'description', 'content': `${this.description}` },
                { 'itemprop': 'image', 'content': `${this.imageUrl}` },
                
                // Twitter Meta Info
                { 'name': 'twitter:title', 'content': `${this.title}` },
                { 'name': 'twitter:description', 'content': `${this.description}` },
                { 'name': 'twitter:url', 'content': `${this.pageUrl}` },
                { 'name': 'twitter:card', 'content': `${this.twiiterCardType}` },
                { 'name': 'twitter:image', 'content': `${this.imageUrl}` },
                { 'name': 'twitter:image:alt', 'content': `${this.imageAlt}` },

                // FB app
                { 'property': 'fb:app_id', 'content': `${this.fbAppId}` },
            ],
            link: [
                { rel: 'canonical', href: `${this.pageUrl}` }
            ]
        }
    }
}
</script>
