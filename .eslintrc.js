module.exports = {
    env: {
      node: true,
    },
    extends: [
      'eslint:recommended',
      '@nuxtjs/eslint-config-typescript',
      'prettier'
    ],
    rules: {
      'vue/multi-word-component-names': 'off'
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
    }
}