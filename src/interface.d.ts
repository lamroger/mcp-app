export interface IElectronAPI {
  pingServer: () => Promise<void>,
}

declare global {
  interface Window {
    api: IElectronAPI
  }
}
