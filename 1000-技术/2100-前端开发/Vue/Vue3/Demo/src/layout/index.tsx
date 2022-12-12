import { defineComponent } from "vue";

const className = {
  marginRight: "20px",
};

export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layout">
        <p>
          <router-link class={className} to="/home">首页</router-link>

          <router-link to="/about">关于</router-link>
        </p>
        <router-view />
      </div>
    );
  },
});
