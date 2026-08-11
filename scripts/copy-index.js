import fs from 'fs'
import path from 'path'

const dist = path.resolve('dist')

fs.copyFileSync(
  path.join(dist, 'index.html'),
  path.join(dist, '404.html')
)

console.log('404.html berhasil dibuat dari index.html')