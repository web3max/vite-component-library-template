var p=Object.defineProperty;var l=(e,r)=>p(e,"name",{value:r,configurable:!0});import{c as b,L as f,A as g}from"./index-c620ced2.js";import{a as v,j as s}from"./jsx-runtime-fac06611.js";var y=(e=>(e.primary="primary",e.secondary="secondary",e.danger="danger",e))(y||{});const x={primary:"text-white bg-success hover:bg-success-hover disabled:cursor-no-drop disabled:opacity-60 disabled:bg-success",secondary:"text-font-primary bg-secondary hover:secondary-hover active:bg-secondary-active disabled:cursor-no-drop disabled:bg-secondary-disabled",danger:"text-white bg-danger hover:bg-danger-hover disabled:cursor-no-drop disabled:bg-danger-disabled"};var h=(e=>(e.small="small",e.middle="middle",e.large="large",e))(h||{});const k={small:"h-[38px] px-3 text-sm font-medium",middle:"h-[42px] px-4 text-base font-medium",large:"h-[52px] px-4 text-base font-medium"};var _=(e=>(e.default="default",e.round="round",e))(_||{});const u=l(({size:e="middle",variant:r="primary",loading:n=!1,outlink:o=!1,shape:c="default",...d})=>{const m=l((t,i)=>{let a="";if(t==="default")switch(i){case"small":a="rounded-lg";break;case"middle":a="rounded-xl";break;case"large":a="rounded-[14px]";break}else if(t==="round")switch(i){case"small":a="rounded-[19px]";break;case"middle":a="rounded-[21px]";break;case"large":a="rounded-[26px]";break}return a},"getRadius");return v("button",{className:b("flex cursor-pointer items-center justify-center outline-0",x[r],k[e],m(c,e)),...d,disabled:d.disabled===!0||n,children:[n?s("span",{className:"mr-1 inline-flex",children:s(f,{className:"animation-rotate-360-deg h-5 w-5"})}):null,d.children,o?s(g,{className:"ml-3 h-2.5 w-2.5"}):null]})},"Button");try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:{value:"ButtonSize.middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"middle"'},{value:'"large"'}]}},variant:{defaultValue:{value:"ButtonVariant.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},shape:{defaultValue:{value:"ButtonShape.default"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"round"'}]}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},outlink:{defaultValue:{value:"false"},description:"",name:"outlink",required:!1,type:{name:"boolean"}}}}}catch{}export{u as B,y as a,h as b,_ as c};
//# sourceMappingURL=index-ae5f39fe.js.map
