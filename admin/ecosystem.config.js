module.exports = {
  apps: [
    {
      name: 'spacemoaabom_front',
      script: 'node_modules/next/dist/bin/next',
      args: 'start --port 4000',
      env_local: {
        APP_ENV: 'local', // APP_ENV=local
      },
      env_development: {
        APP_ENV: 'dev', // APP_ENV=dev
      },
      env_production: {
        APP_ENV: 'prod', // APP_ENV=prod
      },
    },
  ],
};
