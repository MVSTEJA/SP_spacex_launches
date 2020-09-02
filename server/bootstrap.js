require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "60",
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "dynamic-import-node",
    "react-loadable/babel",
  ],
});

require("./index");
