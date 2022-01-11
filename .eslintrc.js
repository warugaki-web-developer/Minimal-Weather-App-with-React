module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'unused-imports'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true, // devDependenciesのimportを許可
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // 'function-declaration' | 'function-expression' | 'arrow-function'
      },
    ],
    // eslint-plugin-unused-imports
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    // import/order rules setting
    {
      files: ['src/**/*.{js,jsx}'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling'],
              'index',
              'object',
              'type',
            ],
            pathGroups: [
              // cssは 最後尾にしたいため
              {
                pattern: './**/**\\.css',
                group: 'type',
                position: 'after',
              },
            ],
            pathGroupsExcludedImportTypes: ['builtin'],
            alphabetize: {
              order: 'asc', // asc|desc|ignore
              caseInsensitive: true, // 大文字と小文字を区別なくアルファベット順に
            },
            'newlines-between': 'always',
            warnOnUnassignedImports: true,
          },
        ],
      },
    },
    // storybook
    {
      files: ['**/*.stories.*'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
};
