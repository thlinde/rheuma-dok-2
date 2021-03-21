import {reactive} from 'vue';
import {NavigationItemModel, TextdataModel} from '../../models/textdata';
import {useElectron} from '../../use/electron';
const { requestTextdata, receive } = useElectron();

const textdataModel: TextdataModel = {
  name: 'Textdaten',
  navigationItems: [],
};

const anamnesisTextdataModel = reactive<NavigationItemModel>({
  navigationText: '',
  mainItems: [],
});

const getAnamnesisTextdata = () => {
  requestTextdata();
  receive('recieve-textdata', (data: string) => {
    const textdataObj: TextdataModel = JSON.parse(data);
    textdataModel.name = textdataObj.name;
    textdataModel.navigationItems = [...textdataObj.navigationItems];
    const anamnesisItem = textdataModel.navigationItems.find((item: NavigationItemModel) => {
      return item.navigationText === 'Anamnese';
    });
    if (anamnesisItem) {
      anamnesisTextdataModel.navigationText = 'Anamnese';
      anamnesisTextdataModel.mainItems = anamnesisItem.mainItems;
    } else {
      anamnesisTextdataModel.navigationText = 'Anamnese';
      anamnesisTextdataModel.mainItems = [];
    }
  });
};

const clearAnamnesisTextdata = () => {
  anamnesisTextdataModel.navigationText = 'Anamnese';
  anamnesisTextdataModel.mainItems = [];
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTextdataService() {
  return {
    anamnesisTextdataModel,
    getAnamnesisTextdata,
    clearAnamnesisTextdata,
  };
}
