module.exports = {
  apps: [
    {
      name: 'spacemoaabom_server',
      script: 'dist/main.js',
      env: {
        NODE_ENV: 'development',
      },

      env_production: {
        NODE_ENV: 'prod',
        NODEMAILER_USER: 'spacemoaabom@gmail.com',
        NODEMAILER_PASS: 'rrodyjwwwtrtewji',
      },
    },
  ],
};
