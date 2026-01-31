import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, ScrollView, Button } from '@tarojs/components';
import './index.scss';

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  isPinned: boolean;
  likes: number;
  comments: number;
}

const MyPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    try {
      // 这里应该调用 API 获取用户的帖子列表
      // 暂时使用模拟数据
      const mockPosts: Post[] = [
        {
          id: '1',
          title: '求职面试经验分享',
          content: '最近参加了几场面试，想分享一些经验和技巧...',
          createdAt: '2024-01-31 10:30',
          isPinned: true,
          likes: 45,
          comments: 12
        },
        {
          id: '2',
          title: '职业转型的困惑',
          content: '工作5年了，想转向新的行业，但是很迷茫...',
          createdAt: '2024-01-30 15:20',
          isPinned: false,
          likes: 28,
          comments: 8
        },
        {
          id: '3',
          title: '失业期间如何充实自己',
          content: '最近失业了，想利用这段时间学习新技能...',
          createdAt: '2024-01-29 09:15',
          isPinned: false,
          likes: 62,
          comments: 18
        }
      ];
      
      setPosts(mockPosts);
    } catch (error) {
      console.error('加载帖子失败:', error);
      Taro.showToast({
        title: '加载失败',
        icon: 'none'
      });
    } finally {
      setLoading(false);
    }
  };

  const handlePin = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, isPinned: !post.isPinned } : post
    ));
    
    Taro.showToast({
      title: posts.find(p => p.id === postId)?.isPinned ? '已取消置顶' : '已置顶',
      icon: 'success',
      duration: 1500
    });
  };

  const handleDelete = (postId: string) => {
    Taro.showModal({
      title: '确认删除',
      content: '确定要删除这篇帖子吗？',
      confirmText: '删除',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          setPosts(posts.filter(p => p.id !== postId));
          Taro.showToast({
            title: '已删除',
            icon: 'success',
            duration: 1500
          });
        }
      }
    });
  };

  const sortedPosts = [...posts].sort((a, b) => {
    const timeA = new Date(a.createdAt).getTime();
    const timeB = new Date(b.createdAt).getTime();
    return sortOrder === 'desc' ? timeB - timeA : timeA - timeB;
  }).sort((a, b) => {
    // 置顶的帖子始终在最前面
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return 0;
  });

  return (
    <View className="my-posts-container">
      <View className="posts-header">
        <Text className="posts-title">我的帖子</Text>
        <View className="sort-controls">
          <Button
            className={`sort-btn ${sortOrder === 'desc' ? 'active' : ''}`}
            onClick={() => setSortOrder('desc')}
          >
            最新
          </Button>
          <Button
            className={`sort-btn ${sortOrder === 'asc' ? 'active' : ''}`}
            onClick={() => setSortOrder('asc')}
          >
            最早
          </Button>
        </View>
      </View>

      <ScrollView className="posts-list" scrollY>
        {sortedPosts.length === 0 ? (
          <View className="empty-state">
            <Text>还没有发布过帖子</Text>
          </View>
        ) : (
          sortedPosts.map(post => (
            <View key={post.id} className={`post-item ${post.isPinned ? 'pinned' : ''}`}>
              <View className="post-header">
                <View className="post-title-section">
                  {post.isPinned && <Text className="pin-badge">置顶</Text>}
                  <Text className="post-title">{post.title}</Text>
                </View>
                <Text className="post-time">{post.createdAt}</Text>
              </View>

              <Text className="post-content">{post.content}</Text>

              <View className="post-stats">
                <Text className="stat">👍 {post.likes}</Text>
                <Text className="stat">💬 {post.comments}</Text>
              </View>

              <View className="post-actions">
                <Button
                  className="action-btn pin-btn"
                  onClick={() => handlePin(post.id)}
                >
                  {post.isPinned ? '取消置顶' : '置顶'}
                </Button>
                <Button
                  className="action-btn delete-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  删除
                </Button>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default MyPosts;
