var f=Object.defineProperty;var d=(n,o)=>f(n,"name",{value:o,configurable:!0});import{j as e,r as s,a as c,F as u}from"./jsx-runtime-fac06611.js";import{c as r}from"./index-c620ced2.js";import{r as y}from"./index-b879c32f.js";import{H as D}from"./index-90cd4f05.js";import{B as S}from"./index-ae5f39fe.js";import"./iframe-50291540.js";function m({isOpen:n}){return e("div",{className:r("fixed left-0 top-0 z-[2] h-screen w-screen bg-mask-bg",n?"animation-fade-in":"animation-fade-out")})}d(m,"Mask");try{m.displayName="Mask",m.__docgenInfo={description:"",displayName:"Mask",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}function v({children:n,customRootId:o}){let t=null;const l=o??"portal-root";if(document.getElementById(l)!==null)t=document.getElementById(l);else{const i=document.createElement("div");i.id=l,document.body.appendChild(i),t=i}return s.useEffect(()=>()=>{var i;(i=t==null?void 0:t.parentElement)==null||i.removeChild(t)},[t]),y.createPortal(n,t)}d(v,"Portal");try{v.displayName="Portal",v.__docgenInfo={description:"",displayName:"Portal",props:{customRootId:{defaultValue:null,description:"",name:"customRootId",required:!1,type:{name:"string"}}}}}catch{}function p({isOpen:n,children:o,customRootId:t}){const[l,i]=s.useState(!n);return s.useEffect(()=>(n?(document.body.style.overflow="hidden",i(!1)):setTimeout(()=>{i(!0),document.body.style.overflow="auto"},150),()=>{document.body.style.overflow="auto"}),[n]),l?null:c(v,{customRootId:t,children:[e(m,{isOpen:n}),e("div",{className:r("fixed left-0 top-0 z-[3] flex h-full w-full items-center justify-center"),children:o})]})}d(p,"Modal");try{p.displayName="Modal",p.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},customRootId:{defaultValue:null,description:"",name:"customRootId",required:!1,type:{name:"string"}}}}}catch{}function a({isOpen:n,title:o,children:t,containerXMargin:l="mx-8",containerYMargin:i="my-0",onClose:h,goBack:g}){return e(p,{customRootId:"dialog-root",isOpen:n,children:c("div",{className:r("box-border w-[92%] max-w-[400px] overflow-hidden rounded-[32px] border-2 border-solid border-[#5262791A] bg-white",n?"animation-fade-in-up":"animation-fade-out-down"),children:[e(D,{className:"p-6",title:o,goBack:g,onClose:h}),e("div",{className:r("scrollbar-hide dialog-children-container overflow-y-auto",l,i),children:t})]})})}d(a,"Dialog");try{a.displayName="Dialog",a.__docgenInfo={description:"Dialog component, used exclusively as a wallet connect.",displayName:"Dialog",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},containerXMargin:{defaultValue:{value:"mx-8"},description:"",name:"containerXMargin",required:!1,type:{name:"string"}},containerYMargin:{defaultValue:{value:"my-0"},description:"",name:"containerYMargin",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},goBack:{defaultValue:null,description:"",name:"goBack",required:!1,type:{name:"(() => void)"}}}}}catch{}const w={parameters:{storySource:{source:`import { Dialog } from './index'
import { ComponentStory } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../Button'

export default {
  title: 'Components/Dialog',
  component: Dialog,
}

const TemplateDefaultDialog: ComponentStory<typeof Dialog> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        title="Dialog Title"
      >
        <div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </div>
      </Dialog>
    </>
  )
}

export const DefaultDialog = TemplateDefaultDialog.bind({})

const TemplateDialogWithGoBack: ComponentStory<typeof Dialog> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const goBack = () => {
    alert('go back')
  }

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Dialog with Go Back
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        goBack={goBack}
        title="Dialog Title"
      >
        <div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </div>
      </Dialog>
    </>
  )
}

export const DialogWithGoBack = TemplateDialogWithGoBack.bind({})

const TemplateDialogNoTitle: ComponentStory<typeof Dialog> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Dialog No Title
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
        </div>
      </Dialog>
    </>
  )
}

export const DialogNoTitle = TemplateDialogNoTitle.bind({})
`,locationsMap:{"default-dialog":{startLoc:{col:61,line:11},endLoc:{col:1,line:41},startBody:{col:61,line:11},endBody:{col:1,line:41}},"dialog-with-go-back":{startLoc:{col:64,line:45},endLoc:{col:1,line:116},startBody:{col:64,line:45},endBody:{col:1,line:116}},"dialog-no-title":{startLoc:{col:61,line:120},endLoc:{col:1,line:149},startBody:{col:61,line:120},endBody:{col:1,line:149}}}}},title:"Components/Dialog",component:a},_=d(()=>{const[n,o]=s.useState(!1);return c(u,{children:[e(S,{onClick:()=>{o(!0)},children:"Open Dialog"}),e(a,{isOpen:n,onClose:()=>{o(!1)},title:"Dialog Title",children:c("div",{children:[e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."})]})})]})},"TemplateDefaultDialog"),M=_.bind({}),O=d(()=>{const[n,o]=s.useState(!1);return c(u,{children:[e(S,{onClick:()=>{o(!0)},children:"Open Dialog with Go Back"}),e(a,{isOpen:n,onClose:()=>{o(!1)},goBack:d(()=>{alert("go back")},"goBack"),title:"Dialog Title",children:c("div",{children:[e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."})]})})]})},"TemplateDialogWithGoBack"),q=O.bind({}),B=d(()=>{const[n,o]=s.useState(!1);return c(u,{children:[e(S,{onClick:()=>{o(!0)},children:"Dialog No Title"}),e(a,{isOpen:n,onClose:()=>{o(!1)},children:c("div",{children:[e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."}),e("div",{children:"Some contents..."})]})})]})},"TemplateDialogNoTitle"),V=B.bind({}),E=["DefaultDialog","DialogWithGoBack","DialogNoTitle"];export{M as DefaultDialog,V as DialogNoTitle,q as DialogWithGoBack,E as __namedExportsOrder,w as default};
//# sourceMappingURL=dialog.stories-8a1a12b1.js.map
