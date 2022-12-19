/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
    showMenu?: boolean,
    icon?: string,
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $router: VueRouter
    $route: Route
  }
}
