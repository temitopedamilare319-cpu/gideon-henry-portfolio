import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectDirectory = fileURLToPath(new URL('.', import.meta.url));
const publishDirectory = resolve(projectDirectory, 'dist');

await mkdir(publishDirectory, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  await cp(resolve(projectDirectory, file), resolve(publishDirectory, file));
}

await cp(resolve(projectDirectory, 'assets'), resolve(publishDirectory, 'assets'), {
  recursive: true,
});

console.log('Built the static portfolio in dist/.');
