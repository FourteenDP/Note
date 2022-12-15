import { unlock } from "@/utils";
import { defineComponent } from "vue";

interface Person {
  name: string;
  age: number;
}

export default defineComponent({
  name: "ComputedProperties",
  meta: {
    title: "计算属性",
  },
  setup() {
    const state: Person[] = $ref([])

    const addUserInfo: Person = $ref({
      name: '',
      age: 0
    })
    // 平均年龄
    const averageAge = $computed(() => {
      return state.reduce((sum, person) => sum + person.age, 0) / state.length
    })
    return () => (
      <div>
        <div class="text-xl">平均年龄: {averageAge}</div>
        <div class="text-xl">用户信息: {JSON.stringify(state)}</div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">姓名</span>
          </label>
          <input class="input input-bordered" type="text" v-model={addUserInfo.name} />
          <label class="label">
            <span class="label-text">年龄</span>
          </label>
          <input class="input input-bordered" type="text" v-model={addUserInfo.age} />
        </div>
        <button class="btn btn-primary" onClick={() => {
          state.push(unlock(addUserInfo))
        }}>添加</button>
      </div>
    );
  },
})
