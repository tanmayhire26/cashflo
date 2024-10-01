import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Request } from 'express';
import axios from 'axios';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}
  private readonly baseUrl = 'https://api.github.com';
  private readonly token = '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';

  @Post()
  async create(@Body() createTransactionDto: CreateTransactionDto) {
    return await this.transactionsService.create(createTransactionDto);
  }

  @Get()
  async findAll() {
    return await this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }

  @Post('get-PR-data')
  async getPrData(
    @Req() req: Request
  ) {
    try {
      const eventType = req.headers['x-github-event'];
      if (eventType === 'pull_request') {
          const pullRequestData = req.body;
          console.log('Pull Request Event Received:', pullRequestData);
          // Handle pull request data as needed
          const baseUrl = 'https://api.github.com';
          const owner = "tanmayhire26";
          const repo="cashflo";
          const pullNumber = pullRequestData.number;
          const token = "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";
           const url = `${baseUrl}/repos/${owner}/${repo}/pulls/${pullNumber}.diff`;
           const response = await axios.get(url, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3.diff',
        },
      });
      console.log("Diff Data =============================================  ", JSON.stringify(response.data, null, 4));
      
      const urlFilesChanged = `${baseUrl}/repos/${owner}/${repo}/pulls/${pullNumber}/files`;
           const responseFilesChanged = await axios.get(urlFilesChanged, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3.diff',
        },
      });
      console.log("))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))   FILEs CHANMGED ))))))))))))))))))))))))))   ", responseFilesChanged);
       const filesChanged = responseFilesChanged.data; // This will contain the diff as text

       const fileContents = await Promise.all(filesChanged.map(async (file) => {
      const content = await this.getFileContent(owner, repo, file.filename);
      return { filename: file.filename, content };
    }));



    console.log("File name and its contents in the changed files PR ", fileContents);
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
       console.log("path.............................", path);
    const response = await axios.get(url, {
      headers: {
        'Authorization': `token ${this.token}`,
        'Accept': 'application/vnd.github.v3.raw',
      },
    });
    console.log("1 File content changed ", response.data);
    return response.data;
    } catch (error) {
      throw error;
    }
  }
}
