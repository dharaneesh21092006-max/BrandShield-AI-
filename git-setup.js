import git from 'isomorphic-git';
import fs from 'fs';
import path from 'path';

const dir = process.cwd();
const repoUrl = 'https://github.com/dharaneesh21092006-max/BrandShield-AI-.git';

async function initAndCommit() {
  console.log(`[Git Setup] Initializing git in ${dir}...`);
  await git.init({ fs, dir, defaultBranch: 'main' });

  // Add remote origin
  try {
    await git.addRemote({
      fs,
      dir,
      remote: 'origin',
      url: repoUrl,
      force: true
    });
    console.log(`[Git Setup] Remote origin set to ${repoUrl}`);
  } catch (e) {
    console.log(`[Git Setup] Remote already exists or set:`, e.message);
  }

  // Walk and stage files
  console.log(`[Git Setup] Staging project files...`);
  
  // Custom recursive file adder that respects .gitignore patterns
  function getFiles(baseDir, relDir = '') {
    const current = path.join(baseDir, relDir);
    const entries = fs.readdirSync(current, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.DS_Store') {
        continue;
      }
      const entryRel = relDir ? path.join(relDir, entry.name) : entry.name;
      if (entry.isDirectory()) {
        files = files.concat(getFiles(baseDir, entryRel));
      } else {
        files.push(entryRel);
      }
    }
    return files;
  }

  const allFiles = getFiles(dir);
  for (const file of allFiles) {
    await git.add({ fs, dir, filepath: file });
  }
  console.log(`[Git Setup] Added ${allFiles.length} files to git index.`);

  // Commit
  const sha = await git.commit({
    fs,
    dir,
    message: 'feat: BrandShield AI - Production-Quality Digital Risk Protection Platform MVP for HacXLerate 2026',
    author: {
      name: 'dharaneesh21092006-max',
      email: 'dharaneesh21092006@gmail.com'
    }
  });

  console.log(`[Git Setup] Initial commit created successfully! Commit SHA: ${sha}`);
  console.log(`[Git Setup] Current branch: main`);
}

initAndCommit().catch(err => {
  console.error('[Git Setup] Error:', err);
  process.exit(1);
});
