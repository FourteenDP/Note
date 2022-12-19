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
  interface HTMLAttributes {
    'v-if'?: string
    'v-else'?: string
    'v-else-if'?: string
    'v-show'?: string
    'v-for'?: string
    'v-html'?: string
    'v-text'?: string
  }
}
