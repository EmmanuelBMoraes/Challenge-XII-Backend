import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { PostsDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private readonly postsRepository: Repository<Posts>,
  ) {}

  async getAllPosts(): Promise<Posts[]> {
    const posts = await this.postsRepository
      .createQueryBuilder('posts')
      .orderBy('created_at', 'DESC')
      .getMany();
    return posts;
  }

  async createNewPost(post: PostsDto): Promise<PostsDto> {
    try {
      const newPost = await this.postsRepository.save(post);
      return newPost;
    } catch (error) {
      return error;
    }
  }
}
