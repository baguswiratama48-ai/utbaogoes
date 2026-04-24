window.elementSdk = {
  init: ({ defaultConfig, onConfigChange }) => {
    console.log('Element SDK Mock Initialized');
    onConfigChange(defaultConfig);
  },
  setConfig: (config) => {
    console.log('Element SDK Mock setConfig:', config);
  }
};
