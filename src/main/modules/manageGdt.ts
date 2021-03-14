// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import os from 'os';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mac from 'macintosh';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import win1252 from 'windows-1252';

import {PatientModel} from '../../models/patient';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const readGdtFile = (directoryName: string, fileName: string) => {
  const gdtFile = path.join(directoryName, fileName);
  let txt;

  if (fs.existsSync(gdtFile)) {
    const txtBuf = fs.readFileSync(gdtFile);
    const isWin = os.platform() === 'win32';
    const isMac = os.platform() === 'darwin';

    if (isMac) {
      txt = mac.decode(txtBuf.toString('binary'));
    } else if (isWin) {
      txt = win1252.decode(txtBuf.toString('binary'));
    } else {
      txt = txtBuf.toString('utf-8');
    }

    deleteGdtFile(gdtFile);
  } else {
    txt = '';
  }

  return txt;
};

const deleteGdtFile = (gdtFilePath: path) => {
  const gdtFile = gdtFilePath;

  if (fs.existsSync(gdtFile)) {
    fs.unlinkSync(gdtFile);
  }
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createPatientDataFromTxt = (txt: string) => {
  const patient: PatientModel = {dateOfBirth: '', firstName: '', id: '', lastName: '', sex: ''};

  if (txt.length) {
    const lines = txt.split('\n');
    for (const line of lines) {
      let tmp = line.toString().slice(3);
      if (tmp.startsWith('3000')) {
        patient.id = tmp.slice(4).trim();
      }
      if (tmp.startsWith('3101')) {
        patient.lastName = tmp.slice(4).trim();
      }
      if (tmp.startsWith('3102')) {
        patient.firstName = tmp.slice(4).trim();
      }
      if (tmp.startsWith('3103')) {
        tmp = tmp.slice(4);
        const day = tmp.substr(0,2);
        const month = tmp.substr(2,2);
        const year = tmp.substr(4,4);
        patient.dateOfBirth = day + '.' + month + '.' + year;
        patient.dateOfBirth.trim();
      }
      if (tmp.startsWith('3110')) {
        patient.sex = tmp.substr(4,1) === '1' ? 'männlich' : 'weiblich';
        patient.sex.trim();
      }
    }
  }

  return patient;
};
