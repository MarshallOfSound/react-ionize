declare module 'electron' {
  declare var dialog: any;

  declare type ElectronApp = {|
    isReady: () => boolean,
    on: (string, Function) => ElectronApp,
    once: (string, Function) => ElectronApp,
    removeListener: (string, Function) => ElectronApp,

    test_makeReady: () => void,
  |};

  declare var app: ElectronApp;

  declare class BrowserWindow {
    on: (string, Function) => BrowserWindow;
    once: (string, Function) => BrowserWindow;
    removeListener: (string, Function) => BrowserWindow;
    setParentWindow: (?BrowserWindow) => void;
    getParentWindow: () => BrowserWindow;
    show: () => void;
    hide: () => void;
    close: () => void;
    loadURL: (string, ?Object) => void;
    id: number;

    webContents: any; // TODO
    setPosition: (number, number, ?boolean) => void;
    setSize: (number, number, ?boolean) => void;
  }

  declare class Menu {
    static setApplicationMenu: (Menu) => void;
    append: (MenuItem) => void;
  }

  declare class MenuItem {
  }

  declare var ElectronTestUtils: {|
    getWindow: (number) => BrowserWindow,
    getMenu: (number) => Menu,
    getMenuItem: (number) => MenuItem,
    reset: () => void,
  |};


};
