import { defineComponent } from "vue";

export default defineComponent({
  name: "ConditionalRendering",
  meta: {
    title: "条件和列表渲染",
  },
  setup() {
    // 条件渲染
    let show = $ref(true)
    const toggle = () => {
      show = !show
    }

    // v-if
    let show2 = $ref(true)
    const toggle2 = () => {
      show2 = !show2
    }

    // v-else
    let show3 = $ref(true)
    const toggle3 = () => {
      show3 = !show3
    }

    // v-else-if
    let show4 = $ref(1)
    const toggle4 = () => {
      show4 = show4 + 1
    }

    // v-show
    let show5 = $ref(true)
    const toggle5 = () => {
      show5 = !show5
    }

    // v-if + v-for
    let todos = $ref([
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ])
    const remove = (index: number) => {
      todos.splice(index, 1)
    }

    return () => (
      <div>
        <div class="text-xl">show: {show ? "true" : "false"}</div>
        <button class="btn btn-primary" onClick={toggle}>toggle</button>
        <div class="text-xl">show2: {show2 ? "true" : "false"}
          <div v-if={show2}>v-if</div>
        </div>
        <button class="btn btn-primary" onClick={toggle2}>toggle2</button>
        <div class="text-xl">show3: {show3 ? "true" : "false"}
          <div v-if={show3}>v-if</div>
          <div v-else>v-else</div>
        </div>
        <button class="btn btn-primary" onClick={toggle3}>toggle3</button>
        <div class="text-xl">show4: {show4}
          <div v-if={show4 === 1}>v-if</div>
          <div v-else-if={show4 === 2}>v-else-if</div>
          <div v-else>v-else</div>
        </div>
        <button class="btn btn-primary" onClick={toggle4}>toggle4</button>
        <div class="text-xl">show5: {show5 ? "true" : "false"}
          <div v-show={show5}>v-show</div>
        </div>
        <button class="btn btn-primary" onClick={toggle5}>toggle5</button>
        <div class="text-xl">v-if + v-for</div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button class="btn btn-primary" onClick={() => remove(index)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
