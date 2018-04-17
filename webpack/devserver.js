module.exports = function () {
  return {
    devServer: {
      //contentBase: "/public/",
      inline: true,
      host: 'localhost',
      port: 8080,
    }
  };
};
