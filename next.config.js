const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    return config
  },
  env: {
    BACKEND: 'http://ec2-13-234-240-74.ap-south-1.compute.amazonaws.com:4000',
    // BACKEND: 'http://localhost:4000',
  },
})
