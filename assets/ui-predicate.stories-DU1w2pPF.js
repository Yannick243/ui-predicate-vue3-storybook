import{h as Y}from"./vue.esm-bundler-Bl8ZJi_Q.js";import{v as $}from"./v4-D8aEg3BZ.js";import{U as x,a as H}from"./ui-predicate-C7gPWCSw.js";const k={operators:[{operator_id:"is",label:"is",argumentType_id:"smallString"},{operator_id:"contains",label:"Contains",argumentType_id:"smallString"},{operator_id:"isLowerThan",label:"<",argumentType_id:"number"},{operator_id:"isEqualTo",label:"=",argumentType_id:"number"},{operator_id:"isHigherThan",label:">",argumentType_id:"number"},{operator_id:"is_date",label:"is",argumentType_id:"datepicker"},{operator_id:"isBetween_date",label:"is between",argumentType_id:"daterangepicker"},{operator_id:"isBrighterThan",label:"is brighter than",argumentType_id:"colorpicker"},{operator_id:"isDarkerThan",label:"is darker than",argumentType_id:"colorpicker"},{operator_id:"is_color",label:"is",argumentType_id:"colorpicker"}],types:[{type_id:"int",operator_ids:["isLowerThan","isEqualTo","isHigherThan"]},{type_id:"string",operator_ids:["is","contains"]},{type_id:"datetime",operator_ids:["is_date","isBetween_date"]},{type_id:"color",operator_ids:["isBrighterThan","isDarkerThan","is_color"]}],targets:[{target_id:"article.title",label:"Article title",type_id:"string"},{target_id:"article.videoCount",label:"Article video count",type_id:"int"},{target_id:"article.publishingAt",label:"Article publish date",type_id:"datetime"},{target_id:"article.color",label:"Article main color",type_id:"color"}],logicalTypes:[{logicalType_id:"any",label:"Any"},{logicalType_id:"all",label:"All"},{logicalType_id:"none",label:"None"}],argumentTypes:[{argumentType_id:"datepicker",component:p("date")},{argumentType_id:"colorpicker",component:p("color")},{argumentType_id:"smallString",component:p("text")},{argumentType_id:"number",component:p("number")}]},B={simple:{logicalType_id:"all",predicates:[{target_id:"article.videoCount",operator_id:"isHigherThan",argument:10}]},advanced:{logicalType_id:"all",predicates:[{target_id:"article.title",operator_id:"contains",argument:"paradise"},{target_id:"article.videoCount",operator_id:"isHigherThan",argument:2},{logicalType_id:"none",predicates:[{target_id:"article.publishingAt",operator_id:"isBetween_date",argument:["2017-10-05","2018-10-05"]},{target_id:"article.publishingAt",operator_id:"isBetween_date",argument:["2010-10-05","2011-10-05"]},{target_id:"article.color",operator_id:"is_color",argument:"#e20400"},{target_id:"article.color",operator_id:"isDarkerThan",argument:"#783d3e"}]}]}};function p(e){return Y("input",{type:e})}const{addons:K}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:W}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var J="storybook/actions",Q=`${J}/action-event`,X={depth:10,clearOnStoryChange:!0,limit:50},L=(e,t)=>{let n=Object.getPrototypeOf(e);return!n||t(n)?n:L(n,t)},Z=e=>!!(typeof e=="object"&&e&&L(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),ee=e=>{if(Z(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let n=Object.getOwnPropertyDescriptor(t,"view"),i=n==null?void 0:n.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...n,value:Object.create(i.constructor.prototype)}),t}return e},te=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?$():Date.now().toString(36)+Math.random().toString(36).substring(2);function s(e,t={}){let n={...X,...t},i=function(...l){var m,g;if(t.implicit){let _=(m="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:m.storyRenders.find(c=>c.phase==="playing"||c.phase==="rendering");if(_){let c=!((g=window==null?void 0:window.FEATURES)!=null&&g.disallowImplicitActionsInRenderV8),y=new W({phase:_.phase,name:e,deprecated:c});if(c)console.warn(y);else throw y}}let V=K.getChannel(),F=te(),G=5,u=l.map(ee),q=l.length>1?u:u[0],N={id:F,count:0,data:{name:e,args:q},options:{...n,maxDepth:G+(n.depth||3),allowFunction:n.allowFunction||!1}};V.emit(Q,N)};return i.isAction=!0,i.implicit=t.implicit,i}const ne={title:"UIPredicate",component:x,tags:["autodocs"],args:{data:B.simple,columns:k,ui:{}},argTypes:{data:{description:"Predicate data definition"},columns:{description:"Predicate columns definition"},error:{description:"Emitted when the predicate-ui initialisation fails."},initialized:{description:"Emitted when the predicate-ui is initialized."}}},ie=e=>({template:'<ui-predicate :columns="columns" :data="data" />',setup(){return{...e}}}),a=ie.bind({}),d={render:e=>({setup(){return{...e}},template:'<ui-predicate :columns="columns" :data="data" @change="onChange" @initialized="onInit"></ui-predicate>'}),args:{onChange:s("`change` event"),onInit:s("`initialized` event")}},r={render:e=>({setup(){return{...e}},template:`<ui-predicate
         :columns="columns"
         :data="data"
         :ui="ui"
         @change="onChange"
         @initialized="onInit"/>`}),args:{data:B.advanced,columns:k,ui:{[H.TARGETS]:{props:{columns:{type:Object,required:!0},predicate:{type:Object,required:!0}},template:`
          <div>
            <input
              id="targets-selector"
              list="targets-datalist"
              :value="predicate.target.target_id"
            >
            <datalist
              id="targets-datalist"
              @change="$emit('change', $event.target.value)">
              <option
                  v-for="target in columns.targets"
                  :key="target.target_id"
                  :value="target.target_id">{{target.label}}
              </option>
            </datalist>
          </div>
        `}},onChange:s("`change` event"),onInit:s("`initialized` event")}},o={render:e=>({setup(){return{...e}},template:`<ui-predicate
      class="custom-css"
      :columns="columns"
      :data="data"
      @change="onChange"
      @initialized="onInit"/>`}),args:{onChange:s("`change` event"),onInit:s("`initialized` event")}};var T,v,b,C,I;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  template: '<ui-predicate :columns="columns" :data="data" />',
  setup() {
    return {
      ...args
    };
  }
})`,...(b=(v=a.parameters)==null?void 0:v.docs)==null?void 0:b.source},description:{story:"\\`<ui-predicate/>\\` only requires a \\`columns\\` object.\nThat's how you will pass your \\`targets\\`,\\`operators\\` , \\`types\\` and \\`logicalTypes\\`.",...(I=(C=a.parameters)==null?void 0:C.docs)==null?void 0:I.description}}};var E,O,f;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        ...args
      };
    },
    template: '<ui-predicate :columns="columns" :data="data" @change="onChange" @initialized="onInit"></ui-predicate>'
  }),
  args: {
    onChange: action('\`change\` event'),
    onInit: action('\`initialized\` event')
  }
}`,...(f=(O=d.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var S,A,w,R,D;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        ...args
      };
    },
    template: \`<ui-predicate
         :columns="columns"
         :data="data"
         :ui="ui"
         @change="onChange"
         @initialized="onInit"/>\`
  }),
  args: {
    data: DATASETS.advanced,
    columns: DEFAULT_CONFIG,
    ui: {
      [UITypes.TARGETS]: {
        props: {
          columns: {
            type: Object,
            required: true
          },
          predicate: {
            type: Object,
            required: true
          }
        },
        template: \`
          <div>
            <input
              id="targets-selector"
              list="targets-datalist"
              :value="predicate.target.target_id"
            >
            <datalist
              id="targets-datalist"
              @change="$emit('change', $event.target.value)">
              <option
                  v-for="target in columns.targets"
                  :key="target.target_id"
                  :value="target.target_id">{{target.label}}
              </option>
            </datalist>
          </div>
        \`
      }
    },
    onChange: action('\`change\` event'),
    onInit: action('\`initialized\` event')
  }
}`,...(w=(A=r.parameters)==null?void 0:A.docs)==null?void 0:w.source},description:{story:`If you need to override defaults ui-predicate UI components to match your needs, use the \`ui\` prop.

\`\`\`javascript
import { UITypes } from "ui-predicate-core";
const MyCustomComponent = {};

const UI_OVERRIDES = {
[UITypes.TARGETS]: MyCustomComponent,
[UITypes.LOGICAL_TYPES]: MyCustomComponent,
[UITypes.OPERATORS]: MyCustomComponent,
[UITypes.PREDICATE_ADD]: MyCustomComponent,
[UITypes.PREDICATE_REMOVE]: MyCustomComponent,
// If UIPredicate can't find a component related to your argumentType_id
// This component will be used as a fallback.
// By default it just an <input type="text">
[UITypes.ARGUMENT_DEFAULT]: MyCustomComponent
};
\`\`\``,...(D=(R=r.parameters)==null?void 0:R.docs)==null?void 0:D.description}}};var U,P,z,j,M;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    setup() {
      return {
        ...args
      };
    },
    template: \`<ui-predicate
      class="custom-css"
      :columns="columns"
      :data="data"
      @change="onChange"
      @initialized="onInit"/>\`
  }),
  args: {
    onChange: action('\`change\` event'),
    onInit: action('\`initialized\` event')
  }
}`,...(z=(P=o.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Please prefer to override your own ui-predicate core components (see Customize default UI components).\n\n#### CSS class names\n\n- \\`.ui-predicate__main\\`: select the whole ui-predicate div container\n- \\`.ui-predicate__row\\`: select every rows div container\n- \\`.ui-predicate__row--compound\\`: select every predicate compound row div containers\n- \\`.ui-predicate__row--comparison\\`: select every predicate comparison row div containers\n- \\`.ui-predicate__col\\`: select every column (targets, operators, arguments and option) div containers\n- \\`.ui-predicate__targets\\`: select the every target columns div container\n- \\`.ui-predicate__operators\\`: select every operators div container\n- \\`.ui-predicate__arguments\\`: select every arguments div container\n- \\`.ui-predicate__options\\`: select every option div container\n- \\`.ui-predicate__option\\`: select one option div container\n- \\`.ui-predicate__logic\\`: select every logic div container",...(M=(j=o.parameters)==null?void 0:j.docs)==null?void 0:M.description}}};const ae=["MinimalConfiguration","Events","CustomizeDefaultUIComponents","CustomizeCSS"],ce=Object.freeze(Object.defineProperty({__proto__:null,CustomizeCSS:o,CustomizeDefaultUIComponents:r,Events:d,MinimalConfiguration:a,__namedExportsOrder:ae,default:ne},Symbol.toStringTag,{value:"Module"}));export{ce as P};
