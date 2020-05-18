const {
  deleteTheme,
  deployTheme,
  updateTheme,
} = require('./src/themekit');
const { normalizeThemeName } = require('./src/utils');

// Exit action on unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);
  throw new Error(`Exiting, unhandled rejection.`);
});

async function main() {
  const themeName = normalizeThemeName(process.env.SHOPIFY_THEME_NAME);
  const themekitAction = process.env.SHOPIFY_THEMEKIT_ACTION || 'deploy';

  console.log(`Preparing themekit action: ${themekitAction} for theme: ${themeName}...`);

  switch (themekitAction) {
    case 'deploy':
      await deployTheme(themeName);
      break;
    case 'delete':
      await deleteTheme(themeName);
      break;
    case 'update-only':
      await updateTheme(themeName);
      break;
    default:
      console.error(`Error, unknown themekit action ${themekitAction}`);
  }

  console.log('Done.')
};

main();
