const normalizeThemeName = function normalizeShopifyThemeName(name) {
   // Remove "refs/heads/" from start of string
  return name.replace(/^refs\/heads\//g, '')
};

module.exports = {
  normalizeThemeName
}