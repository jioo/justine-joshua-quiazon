/* eslint-disable no-console */
import { register } from 'register-service-worker'
import { EventBus } from './event-bus.js'

if (process.env.NODE_ENV === 'production') {
    register(`${process.env.BASE_URL}service-worker.js`, {
        ready() {
            console.log(
                'App is being served from cache by a service worker.\n' +
                'For more details, visit https://goo.gl/AFskqB'
            )
        },
        cached() {
            EventBus.$emit('toggle-snackbar', 'Content has been cached for offline use.')
            console.log('Content has been cached for offline use.')
        },
        updated() {
            EventBus.$emit('toggle-snackbar', 'New content is available; please refresh.')
            console.log('New content is available; please refresh.')
        },
        offline() {
            EventBus.$emit('toggle-snackbar', 'You\'re browsing in offline mode. Enjoy! :)')
            console.log('No internet connection found. App is running in offline mode.')
        },
        error(error) {
            console.error('Error during service worker registration:', error)
        }
    })
}
