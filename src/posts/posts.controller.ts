import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Response } from 'express';
import { PostsDto } from './dto/posts.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getAllPosts(@Res() res: Response) {
    const posts = await this.postsService.getAllPosts();
    return res.status(200).json(posts);
  }

  @Post()
  async createPost(@Res() res: Response, @Body() post: PostsDto) {
    try {
      const newPost = await this.postsService.createNewPost(post);
      return res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({
        message: `Error on creating Post ${error}`,
      });
    }
  }
}
