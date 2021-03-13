import path from 'path'
import fs from 'fs'
import { remote } from 'electron'
import { app } from 'electron'

let counter = 0

export const prepareGdt = () => {
  const pathGdt1 = path.join(app.getPath('desktop'), 'gdt', 'src', 'pvs_f.gdt')
  const pathGdt2 = path.join(app.getPath('desktop'), 'gdt', 'src', 'pvs_m.gdt')
  const pathGdt = path.join(app.getPath('desktop'), 'gdt', 'pvs.gdt')
  if (counter % 2) {
    // copy 1
    fs.copyFileSync(pathGdt1, pathGdt)
    counter++
  } else {
    // copy 2
    fs.copyFileSync(pathGdt2, pathGdt)
    counter++
  }
}
