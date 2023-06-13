var a=Object.defineProperty;var e=(o,l)=>a(o,"name",{value:l,configurable:!0});import{H as t}from"./index-90cd4f05.js";import{j as n}from"./jsx-runtime-fac06611.js";import"./index-c620ced2.js";import"./iframe-50291540.js";const k={parameters:{storySource:{source:`import { Header } from './index'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>

const TemplateDefaultHeader: ComponentStory<typeof Header> = () => {
  const onClose = () => {
    alert('clicked close.')
  }
  return <Header title="Test title" onClose={onClose}></Header>
}

export const DefaultHeader = TemplateDefaultHeader.bind({})

const TemplateHeaderWithGoBack: ComponentStory<typeof Header> = () => {
  const onClose = () => {
    alert('clicked close.')
  }

  const goBack = () => {
    alert('clicked back.')
  }

  return <Header title="Test title" onClose={onClose} goBack={goBack}></Header>
}

export const HeaderWithGoBack = TemplateHeaderWithGoBack.bind({})

const TemplateHeaderNoTitle: ComponentStory<typeof Header> = () => {
  const onClose = () => {
    alert('clicked close.')
  }

  return <Header onClose={onClose}></Header>
}

export const HeaderNoTitle = TemplateHeaderNoTitle.bind({})
`,locationsMap:{"default-header":{startLoc:{col:61,line:9},endLoc:{col:1,line:14},startBody:{col:61,line:9},endBody:{col:1,line:14}},"header-with-go-back":{startLoc:{col:64,line:18},endLoc:{col:1,line:28},startBody:{col:64,line:18},endBody:{col:1,line:28}},"header-no-title":{startLoc:{col:61,line:32},endLoc:{col:1,line:38},startBody:{col:61,line:32},endBody:{col:1,line:38}}}}},title:"Components/Header",component:t},r=e(()=>n(t,{title:"Test title",onClose:e(()=>{alert("clicked close.")},"onClose")}),"TemplateDefaultHeader"),C=r.bind({}),c=e(()=>n(t,{title:"Test title",onClose:e(()=>{alert("clicked close.")},"onClose"),goBack:e(()=>{alert("clicked back.")},"goBack")}),"TemplateHeaderWithGoBack"),T=c.bind({}),d=e(()=>n(t,{onClose:e(()=>{alert("clicked close.")},"onClose")}),"TemplateHeaderNoTitle"),f=d.bind({}),u=["DefaultHeader","HeaderWithGoBack","HeaderNoTitle"];export{C as DefaultHeader,f as HeaderNoTitle,T as HeaderWithGoBack,u as __namedExportsOrder,k as default};
//# sourceMappingURL=header.stories-66c9a1c3.js.map
