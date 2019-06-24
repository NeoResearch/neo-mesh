module.exports = {
  mode : 'production',
  entry : './index.js',
  output: {
    library: 'neomesh',
    libraryTarget: 'umd',
    filename: './NeoMesh.js',
    auxiliaryComment: 'NeoMesh library'
  }
};
