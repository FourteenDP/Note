import { defineComponent, PropType } from "vue";

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
                <button class="btn btn-primary" onClick={() => count++} on={{
                  click: () => {
                    count++;
                  }
                }}>点击我</button>
                <div class="mt-2">
                  <span>点击次数：</span>
                  <span>{count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChildComponent msg={count} />
      </div>
    );
  },
});
const ChildComponent = defineComponent({
  name: 'ChildComponent',
  props: {
    msg: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    }
  },
  emits: ['update:msg'],
  setup(props, { emit }) {
    let count = $ref(0);

    const updateMsg = (val: string | number) => {
      emit('update:msg', val);
    };

    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是子组件
            <h2>我是父组件的数值:{props.msg}</h2>
            <div class="text-center">
              <button class="btn btn-primary" onClick={
                () => {
                  count++;
                  updateMsg(count);
                }
              }>点击我</button>
              <div class="mt-2">
                <span>点击次数：</span>
                <span>{count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  },
});
