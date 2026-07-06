import fs from 'fs';
import path from 'path';

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;

      content = content.replace(/<img([\s\S]*?)>/g, (match, inner) => {
        const isAboveFold = fullPath.includes('Navbar') || fullPath.includes('Hero') || fullPath.includes('Aboutbanners');
        let newInner = inner;
        let changed = false;

        if (!isAboveFold && !newInner.includes('loading=')) {
          if (newInner.trim().endsWith('/')) {
             newInner = newInner.replace(/\/$/, ' loading="lazy" /');
          } else {
             newInner += ' loading="lazy"';
          }
          changed = true;
        }

        if (!newInner.includes('width=')) {
          if (newInner.trim().endsWith('/')) {
             newInner = newInner.replace(/\/$/, ' width="800" height="600" /');
          } else {
             newInner += ' width="800" height="600"';
          }
          changed = true;
        } else if (!newInner.includes('height=')) {
           if (newInner.trim().endsWith('/')) {
             newInner = newInner.replace(/\/$/, ' height="600" /');
          } else {
             newInner += ' height="600"';
          }
          changed = true;
        }

        if (changed) {
          modified = true;
          return `<img${newInner}>`;
        }
        return match;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated images in ${fullPath}`);
      }
    }
  });
}

processDirectory('./src');
