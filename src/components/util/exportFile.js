const moduleFiles = require.context('./modules', false, /\.json$/)
const moduleData = moduleFiles.keys().map(obj => {
  return moduleFiles(obj)
}, {})

export default moduleData