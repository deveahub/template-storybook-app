import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

const storyConfig: ComponentMeta<typeof Button> = {
	title: "Example/Button",
	component: Button,
};

export const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args} />
);

Template.args = {
	label: "Button",
};

export default storyConfig;
