import { Controller, Post, Delete, Put, Get, Body, Param, Query, HttpCode, Header } from '@nestjs/common';

@Controller('cats')
export class CatsController {

  // 不同类定义路由
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Delete(':id')
  async remove(@Param('id') id) {
    return `This action removes a #${id} cat`;
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return `This action returns a #${id} cat`;
  }

  @Get()
  async findAll(@Query() query) {
    return `This action returns all cats (limit: ${query.limit} items)`;
  }

  // 可以使用正则作为通配符
  @Get('ab*cd')
  async findaAll() {
    return 'this is reg router'
  }

  // 使用httpCode注解修改默认的状态码
  @Post()
  @HttpCode(204)
  async code() {
    return 'This action adds a new cat';
  }


  // 指定响应头
  @Post()
  @Header('Cache-Control', 'home')
  async header () {
    return 'this is a header request'
  }
}

export class CreateCatDto {
  id: number;
  name: string;
}

export class UpdateCatDto {
  name: string;
}
