const { override, fixBabelImports, addLessLoader } = require('customize-cra')
const colorPrincipal = require('./ColorsDesing')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': colorPrincipal.primary[1],
      '@info-color': colorPrincipal.info[1],
      '@success-color': colorPrincipal.success[1],
      '@error-color': colorPrincipal.danger[1],
      '@warning-color': colorPrincipal.warning[1],
      '@normal-color': colorPrincipal.Default,
      '@white': colorPrincipal.white,
      '@black': colorPrincipal.black
    }
  })
)
