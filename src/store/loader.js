const files = require.context('./models', false, /\.(js|ts)$/);
const models = {};
files.keys().forEach(key => {
  const filename = key.replace(/(\.\/|\.(js|ts))/g, '');
  models[filename] = files(key).default;
});

export default models;
