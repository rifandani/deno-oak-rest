import { DenonConfig } from 'https://deno.land/x/denon@2.4.7/mod.ts';
// import { config as env } from 'https://deno.land/x/dotenv/mod.ts';

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: 'deno run --allow-net server.ts',
      desc: 'run deno server using Oak',
      // env: env()
    },
  },
};

export default config;
