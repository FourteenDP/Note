import { defineComponent } from "vue";
import { useRouter, useRoute } from 'vue-router'










export default defineComponent({
  name: "Layout",
  setup() {
    const userRouter = useRouter()
    const userRoute = useRoute()
    console.log(userRouter);
    return () => (
      <div class="layou">
        <p>
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
        </p>
        <router-view />
      </div>
    );
  },
});
