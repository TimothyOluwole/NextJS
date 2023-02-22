/** @type {import('prettier').Config} */
module.exports = {
  // prettier config
  bracketSpacing: false,
  endOfLine: 'auto',
  semi: false,
  singleQuote: true,

  // prettier-plugin-organize-imports config
  organizeImportsSkipDestructiveCodeActions: true,

  // plugins
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  // This is needed because of a prettier limitation when using the
  // prettier-plugin-tailwindcss plugin

  pluginSearchDirs: false,
}
