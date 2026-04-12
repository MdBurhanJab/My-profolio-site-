import https from 'https';
https.get('https://docs.google.com/forms/d/e/1FAIpQLSdCFgXdsmqvR_WORhcnlmr9RbjczEcxPTqo9eOM5Fj3ggTF8w/viewform', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/entry\.\d+/g);
    console.log([...new Set(matches)]);
    
    // Also let's try to extract the field names to map them correctly
    const scriptMatches = data.match(/var FB_PUBLIC_LOAD_DATA_ = (.*?);/);
    if (scriptMatches) {
      const parsed = JSON.parse(scriptMatches[1]);
      const fields = parsed[1][1];
      fields.forEach(f => {
        console.log(`Field: ${f[1]}, ID: entry.${f[4][0][0]}`);
      });
    }
  });
});
