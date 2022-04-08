<template>
  <div id="app">
    <h1>{{label}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'scroll or resize'
    }
  },
  methods: {
    _scroll() {
      this.label = 'scrolled! ' + (new Date()).getTime()
    },
    _resize() {
      this.label = 'resized! ' + (new Date()).getTime()
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  min-height: 2000px;
  background: linear-gradient(to bottom, white, black);  
  font-family: Roboto;
}
h1 {
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
