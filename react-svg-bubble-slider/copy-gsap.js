const fs = require('fs')

fs.copyFile('./gsap-bonus.tgz', './dist/gsap-bonus.tgz', (err) => {
  if (err) {
    throw err
  }
  console.log('gsap copied to dist ok!')
})
