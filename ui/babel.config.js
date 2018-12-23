module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      "transform-inline-environment-variables",
      {
        include: [
          "IWTC_VERSION"
        ]
      }
    ]
  ]

}
