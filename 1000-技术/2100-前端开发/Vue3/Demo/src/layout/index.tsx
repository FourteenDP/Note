import { defineComponent, } from "vue";
import { useRouter } from "vue-router";
import { routes } from '@/router'
type RouteRecordRaw = import('vue-router').RouteRecordRaw


export default defineComponent({
  name: "Layout",
  setup() {
    const route = useRouter()
    console.log(route);


    function getMneus(routes: RouteRecordRaw[]) {
      return routes.map(item => {
        if (item.children) {
          return (
            <div class="dropdown dropdown-bottom">
              <label tabindex="0" class="btn m-1">{item.meta?.title}</label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {getMneus(item.children)}
              </ul>
            </div>
          )
        } else {
          return <li><a onClick={() => {

          }}>{item.meta?.title}</a></li>
        }
      })
    }
    return () => (
      <div class="layou">
        <div class="menu bg-primary textw flex flex-row p-1">
          {getMneus(routes[0].children!)}
        </div>
      </div>
    );
  },
});
