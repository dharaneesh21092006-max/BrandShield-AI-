import git from 'isomorphic-git';
import http from 'isomorphic-git/http/node/index.js';
import fs from 'fs';
import readline from 'readline';

const dir = process.cwd();
const remoteUrl = 'https://github.com/dharaneesh21092006-max/BrandShield-AI-.git';

async function pushToGitHub() {
  console.log('====================================================');
  console.log(' BrandShield AI - Direct GitHub Push Utility');
  console.log('====================================================');
  console.log(`Target Repository: ${remoteUrl}\n`);

  // Read token from environment or command-line or prompt
  let token = process.env.GITHUB_TOKEN || process.argv[2];

  if (!token) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    token = await new Promise(resolve => {
      rl.question('Please paste your GitHub Personal Access Token (or press Enter to exit): ', answer => {
        rl.close();
        resolve(answer.trim());
      });
    });
  }

  if (!token) {
    console.log('\n[Notice] No token provided. To generate a GitHub token in 30 seconds:');
    console.log('1. Go to: https://github.com/settings/tokens');
    console.log('2. Click "Generate new token (classic)"');
    console.log('3. Check the "repo" scope box and click Generate');
    console.log('4. Run: node git-push.js <YOUR_TOKEN>\n');
    process.exit(0);
  }

  console.log('\n[Pushing] Authenticating and pushing branch "main" to GitHub...');

  try {
    const pushResult = await git.push({
      fs,
      http,
      dir,
      remote: 'origin',
      ref: 'main',
      onAuth: () => ({
        username: 'dharaneesh21092006-max',
        password: token
      })
    });

    console.log('\n✅ SUCCESS: Project successfully pushed to GitHub!');
    console.log(`Repository link: https://github.com/dharaneesh21092006-max/BrandShield-AI-`);
  } catch (err) {
    console.error('\n❌ Push failed:', err.message);
    if (err.message.includes('401') || err.message.includes('403') || err.message.includes('auth')) {
      console.log('Hint: Check that your token has "repo" permissions and that you have write access to the repository.');
    }
  }
}

pushToGitHub();
