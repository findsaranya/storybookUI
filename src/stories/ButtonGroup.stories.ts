// ButtonGroup.stories.ts

import { Story, Meta } from '@storybook/angular/types-6-0';

import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import Button from './button.component';

//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';
import { ButtongroupComponent } from './buttongroup.component';

export default {
  title: 'ButtonGroup',
  component: ButtongroupComponent,
  decorators: [
    moduleMetadata({
      declarations: [Button],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<ButtongroupComponent> = (args) => ({
  props: args,
});

export const Pair = Template.bind({});
Pair.args = {
  buttons: [
    { ...ButtonStories.Primary.args },
    { ...ButtonStories.Secondary.args },
  ],
  //orientation: 'horizontal'
};