module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:jsx-ally/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react', 'import', 'jsx-ally'],
  parser: 'babel-eslint',
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    node: true,
  },
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    allowAllPropertiesOnSameLine: true,
    'max-len': [
      'error',
      {
        code: 310,
        tabWidth: 2,
        ignoreUrls: true,
      },
    ],
    'no-unused-vars': [
      1,
      {
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowTaggedTemplates: true,
        allowTernary: true,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'error',
    'func-names': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'react/prop-types': 0,
    'no-console': 1,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', 'tsx', 'ts'],
      },
    ],
    'react/react-in-jsx-scope': 0,
    'class-methods-use-this': 0,
  },
};
