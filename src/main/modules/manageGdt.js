import path from 'path'
import fs from 'fs'
import { date, Platform } from "quasar";
import os from 'os'
import mac from 'macintosh'
import win1252 from 'windows-1252'


export const readGdtFile = (directoryName, fileName) => {
  const gdtFile = path.join(directoryName, fileName)
  let txt

  if (fs.existsSync(gdtFile)) {
    let txtBuf = fs.readFileSync(gdtFile)
    let isWin = os.platform() === 'win32'
    let isMac = os.platform() === 'darwin'

    if (isMac) {
      txt = mac.decode(txtBuf.toString('binary'))
    } else if (isWin) {
      txt = win1252.decode(txtBuf.toString('binary'))
    } else {
      txt = txtBuf.toString('utf-8')
    }

    deleteGdtFile(gdtFile)
  } else {
    txt = ''
  }

  return txt
}

const deleteGdtFile = (gdtFilePath) => {
  const gdtFile = gdtFilePath

  if (fs.existsSync(gdtFile)) {
    fs.unlinkSync(gdtFile)
  }
}

export const createPatientDataFromTxt = (txt) => {
  let patient = {};

  if (txt.length) {
    let lines = txt.split('\n');
    for (let line of lines) {
      let tmp = line.toString().slice(3);
      if (tmp.startsWith('3000')) {
        patient.id = tmp.slice(4).trim()
      }
      if (tmp.startsWith('3101')) {
        patient.lastName = tmp.slice(4).trim()
      }
      if (tmp.startsWith('3102')) {
        patient.firstName = tmp.slice(4).trim()
      }
      if (tmp.startsWith('3103')) {
        tmp = tmp.slice(4);
        let day = tmp.substr(0,2);
        let month = tmp.substr(2,2);
        let year = tmp.substr(4,4);
        patient.dateOfBirth = day + '.' + month + '.' + year;
        patient.dateOfBirth.trim()
      }
      if (tmp.startsWith('3110')) {
        patient.sex = tmp.substr(4,1) === '1' ? 'männlich' : 'weiblich';
        patient.sex.trim()
      }
    }
  }

  return patient
}
