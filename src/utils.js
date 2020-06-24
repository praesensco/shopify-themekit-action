const normalizeThemeName = function normalizeShopifyThemeName(name) {
   // - remove "refs/heads/" from start of string
   // - truncate to 50 chars as there is a limitation in the Shopify theme name length
  return name.replace(/^refs\/heads\//g, '').substr(0, 50);
};

module.exports = {
  normalizeThemeName
}