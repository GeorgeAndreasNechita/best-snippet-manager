/* eslint import/prefer-default-export: off */
import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { app, BrowserWindow, shell, ipcMain, globalShortcut } from 'electron';

export function resolveHtmlPath(htmlFileName: string) {
  if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    const url = new URL(`http://localhost:${port}`);
    url.pathname = htmlFileName;
    return url.href;
  }
  return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
}

export function hotkey1() {
  globalShortcut.register('Alt+O', () => {
    console.log('-----------ELECTRON LOVES GLOBAL SHORTCUTS!---------------');
    const snippetsDir = path.join(__dirname, 'snippets');

    const loadSnippets = () => {
      const snippets: Snippet[] = [];

      try {
        const files = fs.readdirSync(snippetsDir);

        files.forEach((file) => {
          const filePath = path.join(snippetsDir, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          snippets.push({ title: file, content });
        });
      } catch (err) {
        console.error('Error reading snippets directory:', err);
      }

      return snippets;
    };

    const snippets = loadSnippets();
    console.log(snippets);
  });
}