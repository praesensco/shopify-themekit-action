# Shopify Themekit Action

Build and deploy Shopify Theme to multiple environments with GitHub Actions.

## Workflow

### Shopify Production Store

Themes:
- `production` - deployed when a Github Release is published.
- `preview` - deployed when changes are pushed/merged into the master branch. Allows to prepare a final UAT and review configuration on the production store before the realease is published. 

### Shopify Staging Store

Themes:
- `staging` - deployed when changes are pushed/merged into the master branch.
- `review-feature-branch` (e.g. feature/awesome-day), deployed when a pull request is created, automatically removed when a pull request is closed. Allows to review and test multipe features/branches on the staging store. Note: because of the Shopify limitations a store can have a maximum of 20 themes.


## Usage
- Create GitHub Actions workflow files in your project, in `.github/workflows/` directory. The workflow files can be downloaded [here](https://github.com/praesensco/shopify-themekit-action/tree/master/.github/workflows).
- Configure your project with Shopify Secrets ([encrypted secrets for a repository](https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets#creating-encrypted-secrets-for-a-repository)):
  - `PRODUCTION_SHOPIFY_API_KEY`
  - `PRODUCTION_SHOPIFY_PASSWORD`
  - `PRODUCTION_SHOPIFY_STORE_URL`
  - `STAGING_SHOPIFY_API_KEY`
  - `STAGING_SHOPIFY_PASSWORD`
  - `STAGING_SHOPIFY_STORE_URL`
  - `REVIEW_SHOPIFY_API_KEY`
  - `REVIEW_SHOPIFY_PASSWORD`
  - `REVIEW_SHOPIFY_STORE_URL`


