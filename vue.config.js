module.exports = {
  configureWebpack: {
    externals: process.env.NODE_ENV === "production" ? ["strapi-sdk-js"] : []
  }
};
