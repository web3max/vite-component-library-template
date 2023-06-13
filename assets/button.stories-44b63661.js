var l=Object.defineProperty;var n=(t,o)=>l(t,"name",{value:o,configurable:!0});import{B as a,a as r,b as s,c as i}from"./index-ae5f39fe.js";import{j as p}from"./jsx-runtime-fac06611.js";import"./index-c620ced2.js";import"./iframe-50291540.js";const e=n((t,o="select")=>({control:o,options:Object.keys(t)}),"objectValuesToControls"),b={parameters:{storySource:{source:`import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button, ButtonProps, ButtonShape, ButtonSize, ButtonVariant } from './index'
import { objectValuesToControls } from '../../storybook-utils'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: objectValuesToControls(ButtonVariant),
    size: objectValuesToControls(ButtonSize),
    shape: objectValuesToControls(ButtonShape),
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Example = Template.bind({})

Example.args = {
  children: 'Button',
  variant: ButtonVariant.primary,
  size: ButtonSize.middle,
  shape: ButtonShape.round,
  loading: false,
  disabled: false,
  outlink: false,
  onClick: () => {
    alert('clicking primary')
  },
}
`,locationsMap:{example:{startLoc:{col:48,line:19},endLoc:{col:91,line:19},startBody:{col:48,line:19},endBody:{col:91,line:19}}}}},title:"Components/Button",component:a,argTypes:{variant:e(r),size:e(s),shape:e(i)}},c=n(t=>p(a,{...t}),"Template"),u=c.bind({});u.args={children:"Button",variant:r.primary,size:s.middle,shape:i.round,loading:!1,disabled:!1,outlink:!1,onClick:()=>{alert("clicking primary")}};const g=["Example"];export{u as Example,g as __namedExportsOrder,b as default};
//# sourceMappingURL=button.stories-44b63661.js.map
