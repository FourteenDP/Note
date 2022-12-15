import { defineComponent, } from "vue";
import { routes } from '@/router'
console.log(routes);
const menu = routes.filter((route) => route.meta?.title);
export default defineComponent({
  name: "Layout",
  setup() {
    return () => (
      <div class="layou">
        <div class="menu bg-primary textw flex flex-row p-2">
          <div class="dropdown dropdown-bottom">
            <label tabindex="0" class="btn m-1">Click</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
});
