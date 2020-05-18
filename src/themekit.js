const Shopify = require('shopify-api-node');
const themeKit = require('@shopify/themekit');

const shopify = new Shopify({
  shopName: process.env.SHOPIFY_STORE_URL,
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_PASSWORD,
});
const themeDirPath = process.env.SHOPIFY_THEME_DIR_PATH || '/github/workspace/dist/';

const deleteTheme = async function deleteShopifyThemes(name) {
  const theme = await findTheme(name);
  if (theme) {
    console.log(`Found theme: ${name} with ID: ${theme.id}, deleting...`);
    await shopify.theme.delete(theme.id);
  } else{
    console.log(`Couldn't find theme: ${name}.`);
  }
};

const findTheme = async function findShopifyTheme(name) {
  const themes = await getThemes();
  return themes.find(theme => theme.name === name);
};

const getThemes = async function getShopifyThemes(name) {
  return await shopify.theme.list();
};

const deployTheme = async function deployShopifyTheme(name) {
  const theme = await findTheme(name);
  if (theme) {
    console.log(`Found theme: ${name}, with ID: ${theme.id}, deploying...`);
    return await themeKit.command('deploy', {
      dir: themeDirPath,
      nodelete: true,
      password: process.env.SHOPIFY_PASSWORD,
      store: process.env.SHOPIFY_STORE_URL,
      themeid: theme.id
    });
  } else {
    console.log(`Creating and deploying theme: ${name}...`)
    return await themeKit.command('new', {
      dir: themeDirPath,
      name: name,
      password: process.env.SHOPIFY_PASSWORD,
      store: process.env.SHOPIFY_STORE_URL,
    });
  }
};

const updateTheme = async function updateShopifyTheme(name) {
  const theme = await findTheme(name);
  if (theme) {
    return await themeKit.command('deploy', {
      dir: themeDirPath,
      nodelete: true,
      password: process.env.SHOPIFY_PASSWORD,
      store: process.env.SHOPIFY_STORE_URL,
      themeid: theme.id
    });
  } else {
    console.log(`Couldn't find theme: ${name}.`);
  }  
}

module.exports = {
  deleteTheme,
  deployTheme,
  updateTheme,
};