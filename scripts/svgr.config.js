module.exports = {
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  filenameCase: 'kebab',
  icon: true,
  jsxRuntime: 'classic',
  native: true,
  typescript: true,
  memo: true,
  replaceAttrValues: { currentColor: 'black' },
  svgProps: { accessibilityRole: 'image' },
  svgoConfig: {
    plugins: [
      'preset-default',
      { name: 'removeDimensions', params: { enabled: true } },
      { name: 'removeXMLNS', params: { enabled: true } },
    ],
  },
};
