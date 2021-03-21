import {reactive} from 'vue';
import {NavigationItemModel, TextdataModel} from '../../models/textdata';
import {useElectron} from '../../use/electron';
const { requestTextdata, receive } = useElectron();

// const popupItemModel: PopupItemModel = {
//   popupText: '',
//   popupAssociatedForm: '',
// };
//
// const subItemModel: SubItemModel = {
//   subText: '',
//   subItemAssociatedForm: '',
//   popupItems: [],
// };
//
// const mainItemModel: MainItemsModel = {
//   mainText: '',
//   subItems: [],
// };
//
// const navigationItemModel: NavigationItemModel = {
//   navigationText: '',
//   mainItems: [],
// };

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
  // textdataModel = {
  //   name: 'Textdaten',
  //   navigationItems: [],
  // };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useTextdataService() {
  return {
    anamnesisTextdataModel,
    getAnamnesisTextdata,
    clearAnamnesisTextdata,
  };
}
