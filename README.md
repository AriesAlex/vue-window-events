# Vue Window Events

Mixin for easily handling window events in components for Vue 2

## Example
To handle event just add method with prefix(underscore by default) and event name as in example

It's automatically will subscribe to event in mounted lifecycle hook and unsubscribe in destroyed hook
```
<script>
export default {
  methods: {
    _scroll() {
      console.log('window scrolled!')
    },
    _resize(event) {
      console.log('window resized!', event)
    },
  },
}
</script>
```

I advise you to write these methods at the end, after the other methods

## Install
``` npm i vue-window-events```

In main.js:
```
import Vue from 'vue'

import WindowEvents from 'vue-window-events'
Vue.use(WindowEvents)
// Vue.use(WindowEvents, {
//   events: ['scroll', 'resize'],
//   prefix: '_'
// })
```

You can pass an array of events to options. By default it's ['scroll', 'resize']