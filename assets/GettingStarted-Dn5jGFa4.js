import{r as h,M as y,e as b,f,g as x}from"./index-D_55B4kj.js";import{u}from"./index-apSi0lgG.js";import{P as d}from"./ui-predicate.stories-DU1w2pPF.js";import"./iframe-Dsynykc-.js";import"../sb-preview/runtime.js";import"./_baseAssignValue-DOAAiU1Z.js";import"./index-Dkj0J1ds.js";import"./index-9d5Wo56T.js";import"./_copyObject-BN5XIQY1.js";import"./index-DrFu-skq.js";import"./vue.esm-bundler-Bl8ZJi_Q.js";import"./v4-D8aEg3BZ.js";import"./ui-predicate-C7gPWCSw.js";var m={exports:{}},r={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T=h,g=60103;r.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;g=p("react.element"),r.Fragment=p("react.fragment")}var j=T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function _(i,n,l){var t,a={},o=null,s=null;l!==void 0&&(o=""+l),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(t in n)v.call(n,t)&&!A.hasOwnProperty(t)&&(a[t]=n[t]);if(i&&i.defaultProps)for(t in n=i.defaultProps,n)a[t]===void 0&&(a[t]=n[t]);return{$$typeof:g,type:i,key:o,ref:s,props:a,_owner:j.current}}r.jsx=_;r.jsxs=_;m.exports=r;var e=m.exports;function c(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...u(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Getting started",of:d}),`
`,e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(n.p,{children:"ui-predicate-vue is a rules editor, predicates component, for Vue JS 3. It aims to provide a clean, semantic and reusable component that make building your filtering or rules user interface a breeze."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# npm
npm install ui-predicate-vue3 -S
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# yarn
yarn add ui-predicate-vue3
`})}),`
`,e.jsx(n.h1,{id:"setup",children:"Setup"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { createApp } from 'vue'

import UIPredicate from 'ui-predicate-vue3'

const app = createApp({
    /* root component options */
})

app.use(UIPredicate)

app.mount('#app')
`})}),`
`,e.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<template>
  <div>
    <ui-predicate
      :data="predicate"
      :columns="columns"
      @change="onChange"
      @initialized="onInitialized"
    />
  </div>
</template>
`})}),`
`,e.jsx(n.h3,{id:"composition-api",children:"Composition API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<script setup>
import { ref } from 'vue';

const predicate = ref({
  logicalType_id: 'all',
  predicates: [
    {
      target_id: 'article.videoCount',
      operator_id: 'isEqualTo',
      argument: 42,
    },
  ],
});

const columns = {
  targets: [
    {
      target_id: 'article.title',
      label: 'Article title',
      type_id: 'string',
    },
    {
      target_id: 'article.videoCount',
      label: 'Article video count',
      type_id: 'int',
    },
    {
      target_id: 'article.publishingAt',
      label: 'Article publish date',
      type_id: 'datetime',
    },
  ],
  // besides array list names, everything else follows convention https://github.com/FGRibreau/sql-convention
  operators: [
    {
      operator_id: 'is',
      label: 'is',
      argumentType_id: 'smallString',
    },
    {
      operator_id: 'contains',
      label: 'Contains',
      argumentType_id: 'smallString',
    },
    {
      operator_id: 'isLowerThan',
      label: '<',
      argumentType_id: 'number',
    },
    {
      operator_id: 'isEqualTo',
      label: '=',
      argumentType_id: 'number',
    },
    {
      operator_id: 'isHigherThan',
      label: '>',
      argumentType_id: 'number',
    },
    {
      operator_id: 'is_date',
      label: 'is',
      argumentType_id: 'datepicker',
    },
  ],
  types: [
    {
      type_id: 'int',
      operator_ids: ['isLowerThan', 'isEqualTo', 'isHigherThan'],
    },
    {
      type_id: 'string',
      operator_ids: ['is', 'contains'],
    },
    {
      type_id: 'datetime',
      operator_ids: ['is_date'],
    },
  ],
  logicalTypes: [
    {
      logicalType_id: 'any',
      label: 'Any',
    },
    {
      logicalType_id: 'all',
      label: 'All',
    },
    {
      logicalType_id: 'none',
      label: 'None',
    },
  ],
}

const onChange = (data) => {
  predicate.value = data
   console.log('Predicate changed', data);
};

const onInitialized = (ctrl) => {
    console.log('UIPredicate initialized', ctrl);
}
<\/script>

`})}),`
`,e.jsx(n.h3,{id:"options-api",children:"Options API"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<script>
export default {
  data() {
    return {
      predicate: {
        logicalType_id: 'all',
        predicates: [
          {
            "target_id": "article.videoCount",
            "operator_id": "isEqualTo",
            "argument": 42
          },
        ],
      },
      columns: {
        targets: [
          {
            target_id: 'article.title',
            label: 'Article title',
            type_id: 'string',
          },
          {
            target_id: 'article.videoCount',
            label: 'Article video count',
            type_id: 'int',
          },
          {
            target_id: 'article.publishingAt',
            label: 'Article publish date',
            type_id: 'datetime',
          },
        ],
        // besides array list names, everything else follows convention https://github.com/FGRibreau/sql-convention
        operators: [
          {
            operator_id: 'is',
            label: 'is',
            argumentType_id: 'smallString',
          },
          {
            operator_id: 'contains',
            label: 'Contains',
            argumentType_id: 'smallString',
          },
          {
            operator_id: 'isLowerThan',
            label: '<',
            argumentType_id: 'number',
          },
          {
            operator_id: 'isEqualTo',
            label: '=',
            argumentType_id: 'number',
          },
          {
            operator_id: 'isHigherThan',
            label: '>',
            argumentType_id: 'number',
          },
          {
            operator_id: 'is_date',
            label: 'is',
            argumentType_id: 'datepicker',
          },
        ],
        types: [
          {
            type_id: 'int',
            operator_ids: ['isLowerThan', 'isEqualTo', 'isHigherThan'],
          },
          {
            type_id: 'string',
            operator_ids: ['is', 'contains'],
          },
          {
            type_id: 'datetime',
            operator_ids: ['is_date'],
          },
        ],
        logicalTypes: [
          {
            logicalType_id: 'any',
            label: 'Any',
          },
          {
            logicalType_id: 'all',
            label: 'All',
          },
          {
            logicalType_id: 'none',
            label: 'None',
          },
        ],
      },
    };
  },
  methods: {
    onChange (diff) {
      this.predicate = diff;
    },
    onInitialized (ctrl) {
        console.log('UIPredicate initialized', ctrl);
    }
  },
};
<\/script>

`})}),`
`,e.jsx(n.h2,{id:"working-example",children:"Working Example"}),`
`,e.jsx(b,{children:e.jsx(f,{of:d})}),`
`,e.jsx(n.h2,{id:"inputs",children:"Inputs"}),`
`,e.jsx(x,{})]})}function U(i={}){const{wrapper:n}={...u(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(c,{...i})}):c(i)}export{U as default};
