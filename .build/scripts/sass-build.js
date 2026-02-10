#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outputFile = path.join(__dirname, '../../dist/rocket.css');
const outputFileMin = path.join(__dirname, '../../dist/rocket.min.css');

try {
  const timestamp = new Date().toLocaleString('pt-BR');
  const buildComment = `/* Generated: ${timestamp} */\n`;

  // Build não minificado
  console.log('🔨 Compilando SCSS (não minificado)...');
  execSync('sass --load-path=node_modules --quiet --no-error-css --style=expanded scss/index.scss dist/rocket.css', {
    cwd: path.join(__dirname, '../../'),
    stdio: 'inherit'
  });

  // Adiciona timestamp no arquivo não minificado
  let cssContent = fs.readFileSync(outputFile, 'utf-8');
  fs.writeFileSync(outputFile, buildComment + cssContent);
  console.log('✅ rocket.css gerado!');

  // Build minificado
  console.log('🔨 Compilando SCSS (minificado)...');
  execSync('sass --load-path=node_modules --quiet --no-error-css --style=compressed scss/index.scss dist/rocket.min.css', {
    cwd: path.join(__dirname, '../../'),
    stdio: 'inherit'
  });

  // Adiciona timestamp no arquivo minificado
  cssContent = fs.readFileSync(outputFileMin, 'utf-8');
  fs.writeFileSync(outputFileMin, buildComment + cssContent);
  console.log('✅ rocket.min.css gerado!');

  console.log(`✅ Build completo! (${timestamp})`);
} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
}
