import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// 负责处理传入的 请求 和客户端返回的 响应
@Controller() // 通过装饰器的注解，把一个类变为控制器
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 告诉nest为特定http请求创建处理程序
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
