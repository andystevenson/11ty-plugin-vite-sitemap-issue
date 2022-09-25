const EleventyVitePlugin = require('@11ty/eleventy-plugin-vite')

const vite = {
  viteOptions: {
    // assetsInclude: ['**/*.xml'],
  },
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin, vite)
  return { dir: { input: 'src' } }
}
