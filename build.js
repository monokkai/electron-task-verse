const esbuild = require('esbuild');
const path = require('path');

const isWatch = process.argv.includes('--watch');

const commonConfig = {
  bundle: true,
  minify: false,
  sourcemap: true,
  logLevel: 'info',
};

const build = async () => {
  try {
    // Main process
    await esbuild.build({
      ...commonConfig,
      entryPoints: ['./src/main.ts'],
      outfile: './dist/main.js',
      platform: 'node',
      external: ['electron'],
    });

    // Preload script
    await esbuild.build({
      ...commonConfig,
      entryPoints: ['./src/preload.js'],
      outfile: './dist/preload.js',
      platform: 'node',
      external: ['electron'],
    });

    // Renderer process
    const ctx = await esbuild.context({
      ...commonConfig,
      entryPoints: ['./src/index.tsx'],
      outfile: './dist/renderer.js',
      platform: 'browser',
      loader: { '.tsx': 'tsx', '.ts': 'ts' },
    });

    if (isWatch) {
      await ctx.watch();
      console.log('Watching...');
    } else {
      await ctx.rebuild();
      await ctx.dispose();
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

build();
