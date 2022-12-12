import { defineComponent } from "vue";




const style = {
  marginRight: "20px",
};

export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layout">
        <p>
          <router-link style={style} to="/home">Go to Home</router-link>

          <router-link to="/about">Go to About</router-link>
        </p>
        <router-view />
      </div>
    );
  },
});
