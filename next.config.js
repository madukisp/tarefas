module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      loader: 'next-swc-loader',
      options: {
        swcOptions: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                runtime: 'automatic',
                pragma: 'React.createElement',
                pragmaFrag: 'React.Fragment',
              },
            },
          },
        },
      },
    });

    return config;
  },
};
