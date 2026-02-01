import { get, post } from './request';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  authorName: string;
  authorAvatar: string;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  isLiked: boolean;
  isAnonymous?: boolean; // 是否匿名发布
  category?: 'vent' | 'help' | 'share' | 'positive'; // 帖子分类
  tags?: string[]; // 标签
  mood?: string; // 心情表情
}

export interface PostListParams {
  page?: number;
  pageSize?: number;
}

/**
 * 获取帖子列表
 */
export function getPostList(params: PostListParams = {}) {
  return get<{ posts: Post[]; total: number }>('/api/trpc/hole.list', {
    page: params.page || 1,
    pageSize: params.pageSize || 20
  });
}

/**
 * 点赞帖子
 */
export function likePost(postId: number) {
  return post('/api/trpc/hole.like', { postId });
}

/**
 * 取消点赞
 */
export function unlikePost(postId: number) {
  return post('/api/trpc/hole.unlike', { postId });
}

/**
 * 发布新帖子
 */
export function createPost(data: {
  content: string;
  category?: 'vent' | 'help' | 'share' | 'positive';
  tags?: string[];
  mood?: string;
  isAnonymous?: boolean;
}) {
  return post('/api/trpc/hole.create', data);
}
