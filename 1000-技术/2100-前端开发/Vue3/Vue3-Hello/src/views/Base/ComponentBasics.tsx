import { defineComponent, PropType } from "vue";
import { ReactiveVariable } from "vue/macros";

export default defineComponent({
  name: 'ComponentBasics',
  meta: {
    title: '组件基础',
  },
  setup() {
    let count = $ref(0);
    let childCount = $ref(0);

    return () => (
      <div class='flex'>
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1">
              我是父组件
              <h2>我是子组件的数值:{childCount}</h2>
              <div class="text-center">
                <button class="btn btn-primary" onClick={() => count++} on={{
                  click: () => {
                    console.log('click');
                  },
                }}>点击我</button>
                <div class="mt-2">
                  <span>点击次数：</span>
                  <span>{count}</span>
                </div>
              </div>
              <h2>动态组件</h2>
              {/* <component is={ChildComponent} ></component> */}
            </div>
          </div>
        </div>
        <ChildComponent msg={count} onUpdate={(val) => {
          childCount = val;
        }} />
        <ChildComponentSlot on={{
            'update': (val: string | number) => {}
          }} v-slots={{
          default: () => <div>我是插槽内容Default</div>,
          header: () => <div>我是插槽内容Header</div>,
          footer: () => <div>我是插槽内容Footer</div>,
        }} >
        </ChildComponentSlot>

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
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    let count = $ref(0);

    const updateMsg = (val: string | number) => {
      emit('update', val);
    };
    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是子组件
            <h2>我是父组件的数值:{props.msg}</h2>
            <div class="text-center">
              <button class="btn btn-primary" onClick={() => { count++; updateMsg(count) }}
              >点击我</button>
              <div class="mt-2">
                <span>点击次数：</span>
                <span>{count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >;
  },
});

const ChildComponentSlot = defineComponent({
  name: 'ChildComponentSlot',
  emits: ['update'],
  setup(_, { slots }) {
    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是插槽子组件
            <div>
              {slots.header && slots.header()}
              {slots.default && slots.default()}
              {slots.footer && slots.footer()}
            </div>
          </div>
        </div>
      </div>
    </div >;
  },
});
