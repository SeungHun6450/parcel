// nodejs는 ESM을 지원하지 않고 CommonJS를 지원한다

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

//  export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports= {
  plugins: [
    autoprefixer
  ]
}