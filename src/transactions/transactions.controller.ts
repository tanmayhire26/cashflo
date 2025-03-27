@Post('get-PR-data')
  async getPrData(
    @Req() req: Request
  ) {
    try {
      const eventType = req.headers['x-github-event'];
      if (eventType === 'pull_request') {
          const pullRequestData = req.body;
          const baseUrl = 'https://api.github.com';
          const owner = "tanmayhire26";
          const repo="cashflo";
          const pullNumber = pullRequestData.number;
          const token = this.token;
           const url = `${baseUrl}/repos/${owner}/${repo}/pulls/${pullNumber}.diff`;
           const response = await axios.get(url, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3.diff',
        },
      });
      
      const urlFilesChanged = `${baseUrl}/repos/${owner}/${repo}/pulls/${pullNumber}/files`;
           const responseFilesChanged = await axios.get(urlFilesChanged, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3.diff',
        },
      });
       const filesChanged = responseFilesChanged.data; 

       const fileContents = await Promise.all(filesChanged.map(async (file) => {
      const content = await this.getFileContent(owner, repo, file.filename);
      return { filename: file.filename, content };
    }));

    return fileContents;
      }
    } catch (error) {
      throw error
    }
  }

  async getFileContent(owner, repo, path) {
    try {
                const baseUrl = 'https://api.github.com';

       const url = `${baseUrl}/repos/${owner}/${repo}/contents/${path}`;
    const response = await axios.get(url, {
      headers: {
        'Authorization': `token ${this.token}`,
        'Accept': 'application/vnd.github.v3.raw',
      },
    });
    return response.data;
    } catch (error) {
      throw error;
    }
  }
}