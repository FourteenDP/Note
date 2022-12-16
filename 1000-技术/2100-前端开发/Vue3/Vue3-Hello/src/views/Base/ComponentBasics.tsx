import { defineComponent, defineProps } from "vue";

export default defineComponent({
  name: 'ComponentBasics',
  meta: {
    title: '组件基础',
  },
  setup() {
    let count = $ref(0);
    return () => (
      <div class='flex'>
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1">
              我是父组件
              <div class="text-center">
                <button class="btn btn-primary" onClick={() => count++}>点击我</button>
                <div class="mt-2">
                  <span>点击次数：</span>
                  <span>{count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChildComponent />
      </div>
    );
  },
});

const ChildComponent = defineComponent({
  name: 'ChildComponent',
  setup() {
    const props = defineProps<{ count: number }>();
    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是子组件
            <div class="text-center">
              <button class="btn btn-primary">点击我</button>
              <div class="mt-2">
                <span>点击次数：</span>
                <span>{props.count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  },
});
