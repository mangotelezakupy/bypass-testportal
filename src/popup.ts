class Popup {
  constructor() {
    this.checkVersion();
  }

  private checkVersion(): void {
    const update = document.getElementById('update');

    const manifestVersion = chrome.runtime.getManifest().version;
    const url =
      'https://gist.githubusercontent.com/mangotelezakupy/79d66cd89123c185b7a8dc3525581477/raw/a2b7050a7650212f65876a5b4358bef093b72b2c/manifest.json';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        update.innerText =
          manifestVersion === data.version
            ? `up to date (${manifestVersion})`
            : `update available (${data.version})`;
      });
  }
}

export default new Popup();
