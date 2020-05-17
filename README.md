# Shopify Themekit Action

Build and deploy Shopify Theme to multiple environments with GitHub Actions.

## Usage:
- Create GitHub Actions workflow files in your project, in `.github/workflows/` directory. The workflow files can be downloaded [here](https://github.com/praesensco/shopify-themekit-action/tree/master/.github/workflows).
- Configure your project with Shopify Secrets ([encrypted secrets for a repository](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository)):
  - PRODUCTION_SHOPIFY_API_KEY
  - PRODUCTION_SHOPIFY_PASSWORD
  - PRODUCTION_SHOPIFY_STORE_URL
  - STAGING_SHOPIFY_API_KEY
  - STAGING_SHOPIFY_PASSWORD
  - STAGING_SHOPIFY_STORE_URL
  - REVIEW_SHOPIFY_API_KEY
  - REVIEW_SHOPIFY_PASSWORD
  - REVIEW_SHOPIFY_STORE_URL


