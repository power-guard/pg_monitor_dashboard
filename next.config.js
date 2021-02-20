module.exports = {
  async rewrites() {
    if (process.env.NODE_ENV === 'production') {
      return [];
    }

    return [
      {
        source: '/:path*',
        destination: 'http://localhost:23500/:path*',
      },
    ];
  },
};
