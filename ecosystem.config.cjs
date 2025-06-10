// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'textalter',
      script: 'npm',
      args: 'run dev -- --host',
      watch: false,
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};
