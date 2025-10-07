module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // Disable warnings for unused expressions in generated files
    '@typescript-eslint/no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],
    
    // Disable warnings for unused variables in generated files
    '@typescript-eslint/no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }],

    // Allow 'this' aliasing in generated files
    '@typescript-eslint/no-this-alias': 'off',

    // Allow require imports in generated files
    '@typescript-eslint/no-require-imports': 'off'
  },
  // Ignore generated files from Prisma
  ignorePatterns: [
    'src/generated/**/*',
    '.next/**/*',
    'node_modules/**/*'
  ]
}