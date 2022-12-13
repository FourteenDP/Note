import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    showMenu?: boolean
    icon?: string
    eomji?: string
  }
}
