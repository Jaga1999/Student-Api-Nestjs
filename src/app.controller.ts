import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/great')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getGreating(): string {
    return this.appService.getGetGreat();
  }

  @Post()
  getPost(): string {
    return this.appService.getPostGreat();
  }

  @Put()
  getPut(): string {
    return this.appService.getPutGreat();
  }

  @Delete()
  getDelete(): string {
    return this.appService.getDeleteGreat();
  }
}
