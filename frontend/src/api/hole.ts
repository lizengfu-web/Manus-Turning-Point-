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
