import { defineComponent } from "vue";

export default defineComponent({
  name: 'ComponentBasics',
  meta: {
    title: '组件基础',
  },
  setup() {
    return () => (
      <div class='flex'>
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1">
              我是父组件
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
    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是子组件
          </div>
        </div>
      </div>
    </div>;
  },
});
