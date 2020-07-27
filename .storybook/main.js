module.exports = {
  stories: ["../src/**/*.stories.(tsx|ts|mdx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-a11y/register",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
  ],
};
