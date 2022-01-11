import HelloWorld from '../components/HelloWorld';

export default {
  title: 'components/HelloWorld',
  component: HelloWorld,
  argTypes: {},
};

const Template = (args) => <HelloWorld {...args} />;

export const Default = Template.bind({});
Default.args = {};
