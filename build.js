const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const strnow = require('strnow');

const packageJson = require('./package.json');
const version = packageJson.version;
const dateNow = strnow.get();
const header = `/* Version: ${version} - Last modified: ${dateNow} */\n`;

// Listar todos os arquivos JS da pasta src
const srcFiles = fs.readdirSync('src')
  .filter(file => file.endsWith('.js'))
  .map(file => path.join('src', file));

console.log('📦 Building files:', srcFiles);

// Garantir que as pastas existem
if (!fs.existsSync('dist')) fs.mkdirSync('dist');
if (!fs.existsSync('www/_media/js')) fs.mkdirSync('www/_media/js', { recursive: true });

// Função para construir
async function build() {
  try {
    // Arquivo raw (não minificado)
    await esbuild.build({
      entryPoints: srcFiles,
      outfile: 'dist/jQuery.SimpleMask.js',
      bundle: true,
      format: 'iife',
      banner: { js: header },
      allowOverwrite: true,
    });
    console.log('✅ Raw file generated: dist/jQuery.SimpleMask.js');

    // Arquivo minificado
    await esbuild.build({
      entryPoints: srcFiles,
      outfile: 'dist/jQuery.SimpleMask.min.js',
      bundle: true,
      format: 'iife',
      minify: true,
      banner: { js: header },
      allowOverwrite: true,
    });
    console.log('✅ Minified file generated: dist/jQuery.SimpleMask.min.js');
    
    // Copiar para www/_media/js
    fs.copyFileSync('dist/jQuery.SimpleMask.min.js', 'www/_media/js/jQuery.SimpleMask.min.js');
    console.log('✅ Copied to www/_media/js/');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();