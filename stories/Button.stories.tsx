import { StoryObj, Meta } from "@storybook/react";

import { Button } from "./Button";

const storyConfig: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

export const Template: StoryObj<typeof Button> = (args: any) => (
  <Button {...args} />
);

Template.args = {
  label: "Button",
};

export default storyConfig;
