export interface TextdataModel {
  name: string,
  navigationItems: Array<NavigationItemModel>,
}

export interface NavigationItemModel {
  navigationText: string,
  mainItems: Array<MainItemsModel>,
}

export interface MainItemsModel {
  mainText: string,
  subItems: Array<SubItemModel>,
}

export interface SubItemModel {
  subText: string,
  subItemAssociatedForm: string,
  popupItems: Array<PopupItemModel>,
}

export interface PopupItemModel {
  popupText: string,
  popupAssociatedForm: string,
}
