const defaultOptions = {
  events: ['scroll', 'resize'],
  prefix: '_'
}

const WindowEventsPlugin = {
  install(Vue, options = defaultOptions) {
    options = {...defaultOptions, ...options}
    Vue.mixin({
      created () {
        for(const event of options.events) {
          if(this[options.prefix + event]) window.addEventListener(event, this[options.prefix + event])
        }
      },
      destroyed () {
        for(const event of options.events) {
          if(this[options.prefix + event]) window.removeEventListener(event, this[options.prefix + event])
        }
      }
    })
  }
}

export default WindowEventsPlugin