import { PluginObject } from 'vue'

export interface WindowEventsPluginOptions {
  events: string[]
  prefix: string
}

export const WindowEventsPlugin: PluginObject<WindowEventsPluginOptions>
export default WindowEventsPlugin