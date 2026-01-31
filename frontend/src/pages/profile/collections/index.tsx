import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, ScrollView, Button } from '@tarojs/components';
import './index.scss';

interface CollectionPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  comments: number;
  commentList: Array<{
    id: string;
    author: string;
    content: string;
    time: string;
    likes: number;
  }>;
}

const MyCollections: React.FC = () => {
  const [collections, setCollections] = useState<CollectionPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    loadCollections();
  }, []);

  const loadCollections = async () => {
    setLoading(true);
    try {
      // 这里应该调用 API 获取用户的收藏列表
      // 暂时使用模拟数据
      const mockCollections: CollectionPost[] = [
        {
          id: '1',
          title: '如何在职业转型中保持自信',
          content: '职业转型是一个充满挑战的过程，但也是一个重新发现自己的机会...',
          author: '职场导师',
          createdAt: '2024-01-28 14:30',
          likes: 156,
          comments: 42,
          commentList: [
            {
              id: 'c1',
              author: '用户A',
              content: '这篇文章很有启发，谢谢分享！',
              time: '2024-01-28 15:00',
              likes: 8
            },
            {
              id: 'c2',
              author: '用户B',
              content: '深有同感，正在经历职业转型...',
              time: '2024-01-28 16:20',
              likes: 5
            }
          ]
        },
        {
          id: '2',
          title: '失业期间的心理调整',
          content: '失业不是终点，而是新的开始。如何调整心态度过这段时期...',
          author: '心理咨询师',
          createdAt: '2024-01-25 10:15',
          likes: 203,
          comments: 58,
          commentList: [
            {
              id: 'c3',
              author: '用户C',
              content: '非常实用的建议，正需要这样的指导',
              time: '2024-01-25 11:30',
              likes: 12
            }
          ]
        }
      ];
      
      setCollections(mockCollections);
    } catch (error) {
      console.error('加载收藏失败:', error);
      Taro.showToast({
        title: '加载失败',
        icon: 'none'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveCollection = (collectionId: string) => {
    Taro.showModal({
      title: '确认取消收藏',
      content: '确定要取消收藏这篇帖子吗？',
      confirmText: '取消收藏',
      cancelText: '保留',
      success: (res) => {
        if (res.confirm) {
          setCollections(collections.filter(c => c.id !== collectionId));
          Taro.showToast({
            title: '已取消收藏',
            icon: 'success',
            duration: 1500
          });
        }
      }
    });
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <View className="my-collections-container">
      <View className="collections-header">
        <Text className="collections-title">我的收藏</Text>
      </View>

      <ScrollView className="collections-list" scrollY>
        {collections.length === 0 ? (
          <View className="empty-state">
            <Text>还没有收藏过帖子</Text>
          </View>
        ) : (
          collections.map(collection => (
            <View key={collection.id} className="collection-item">
              <View className="collection-header">
                <View className="header-info">
                  <Text className="collection-title">{collection.title}</Text>
                  <View className="meta-info">
                    <Text className="author">作者: {collection.author}</Text>
                    <Text className="time">{collection.createdAt}</Text>
                  </View>
                </View>
              </View>

              <Text className="collection-content">{collection.content}</Text>

              <View className="collection-stats">
                <Text className="stat">👍 {collection.likes}</Text>
                <Text className="stat">💬 {collection.comments}</Text>
              </View>

              {/* 评论列表 */}
              <View className="comments-section">
                <View
                  className="comments-toggle"
                  onClick={() => toggleExpand(collection.id)}
                >
                  <Text className="toggle-text">
                    {expandedId === collection.id ? '隐藏评论' : '展开评论'}
                  </Text>
                  <Text className="toggle-arrow">
                    {expandedId === collection.id ? '▲' : '▼'}
                  </Text>
                </View>

                {expandedId === collection.id && (
                  <View className="comments-list">
                    {collection.commentList.map(comment => (
                      <View key={comment.id} className="comment-item">
                        <View className="comment-header">
                          <Text className="comment-author">{comment.author}</Text>
                          <Text className="comment-time">{comment.time}</Text>
                        </View>
                        <Text className="comment-content">{comment.content}</Text>
                        <View className="comment-actions">
                          <Text className="comment-like">👍 {comment.likes}</Text>
                          <Button className="reply-btn">回复</Button>
                        </View>
                      </View>
                    ))}
                  </View>
                )}
              </View>

              <View className="collection-actions">
                <Button
                  className="remove-btn"
                  onClick={() => handleRemoveCollection(collection.id)}
                >
                  取消收藏
                </Button>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default MyCollections;
