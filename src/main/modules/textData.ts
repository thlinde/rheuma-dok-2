// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from 'path';
import { app } from 'electron';

export const readTextData: () => string = () => {
  let textData;

  const filePath = path.join(app.getPath('userData'), 'text-data.json');
  if (fs.existsSync(filePath)) {
    textData = fs.readFileSync(filePath, 'utf-8');
  } else {
    // const txt = '{"name":"Textdaten","navigationItems":[{"navigationText":"Anamnese","mainItems":[]},{"navigationText":"Untersuchung","mainItems":[]},{"navigationText":"Scores/Klassifik.","mainItems":[]},{"navigationText":"Therapie","mainItems":[]},{"navigationText":"Bildgebung","mainItems":[]},{"navigationText":"Labor","mainItems":[]},{"navigationText":"Osteoporose","mainItems":[]},{"navigationText":"Epikrise","mainItems":[]}]}';
    const data = {
      'name':'Textdaten',
      'navigationItems': [
        {
          'navigationText': 'Anamnese',
          'mainItems': [],
        },
        {
          'navigationText': 'Untersuchung',
          'mainItems': [],
        },
        {
          'navigationText': 'Scores/Klassifik.',
          'mainItems': [],
        },
        {
          'navigationText': 'Therapie',
          'mainItems': [],
        },
        {
          'navigationText': 'Bildgebung',
          'mainItems': [],
        },
        {
          'navigationText': 'Labor',
          'mainItems': [],
        },
        {
          'navigationText': 'Epikrise',
          'mainItems': [],
        },
      ],
    };
    const jsonTxt = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonTxt, 'utf8');
    textData = jsonTxt;
  }

  return textData;
};
