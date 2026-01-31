import React, { useState, useEffect } from 'react';
import Taro from '@tarojs/taro';
import { View, Text, ScrollView, Input, Button } from '@tarojs/components';
import './index.scss';

interface Message {
  id: string;
  fromUser: string;
  postTitle: string;
  commentContent: string;
  time: string;
  isRead: boolean;
  replyContent?: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    setLoading(true);
    try {
      // 这里应该调用 API 获取消息列表
      // 暂时使用模拟数据
      const mockMessages: Message[] = [
        {
          id: '1',
          fromUser: '职场导师',
          postTitle: '求职面试经验分享',
          commentContent: '你的分享很有价值，能否详细说明一下面试技巧？',
          time: '2024-01-31 14:30',
          isRead: false
        },
        {
          id: '2',
          fromUser: '用户A',
          postTitle: '职业转型的困惑',
          commentContent: '我也在经历同样的困惑，很想听听你的想法',
          time: '2024-01-30 10:15',
          isRead: false
        },
        {
          id: '3',
          fromUser: '心理咨询师',
          postTitle: '失业期间如何充实自己',
          commentContent: '这个话题很重要，我有一些专业建议想分享',
          time: '2024-01-29 16:45',
          isRead: true
        },
        {
          id: '4',
          fromUser: '用户B',
          postTitle: '求职面试经验分享',
          commentContent: '感谢分享，这些经验对我很有帮助',
          time: '2024-01-28 09:20',
          isRead: true
        }
      ];
      
      setMessages(mockMessages);
      const unread = mockMessages.filter(m => !m.isRead).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error('加载消息失败:', error);
      Taro.showToast({
        title: '加载失败',
        icon: 'none'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = (messageId: string) => {
    setMessages(messages.map(msg => 
      msg.id === messageId ? { ...msg, isRead: true } : msg
    ));
    setUnreadCount(Math.max(0, unreadCount - 1));
  };

  const handleReply = (messageId: string) => {
    if (!replyText.trim()) {
      Taro.showToast({
        title: '请输入回复内容',
        icon: 'none'
      });
      return;
    }

    setMessages(messages.map(msg => 
      msg.id === messageId 
        ? { ...msg, replyContent: replyText, isRead: true }
        : msg
    ));

    Taro.showToast({
      title: '回复已发送',
      icon: 'success',
      duration: 1500
    });

    setReplyingId(null);
    setReplyText('');
  };

  const handleDeleteMessage = (messageId: string) => {
    Taro.showModal({
      title: '确认删除',
      content: '确定要删除这条消息吗？',
      confirmText: '删除',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          const deletedMsg = messages.find(m => m.id === messageId);
          if (deletedMsg && !deletedMsg.isRead) {
            setUnreadCount(Math.max(0, unreadCount - 1));
          }
          setMessages(messages.filter(m => m.id !== messageId));
          Taro.showToast({
            title: '已删除',
            icon: 'success',
            duration: 1500
          });
        }
      }
    });
  };

  return (
    <View className="messages-container">
      <View className="messages-header">
        <Text className="messages-title">消息</Text>
        {unreadCount > 0 && (
          <View className="unread-badge">
            <Text className="unread-count">{unreadCount}</Text>
          </View>
        )}
      </View>

      <ScrollView className="messages-list" scrollY>
        {messages.length === 0 ? (
          <View className="empty-state">
            <Text>暂无消息</Text>
          </View>
        ) : (
          messages.map(message => (
            <View
              key={message.id}
              className={`message-item ${!message.isRead ? 'unread' : ''}`}
            >
              <View className="message-header">
                <View className="header-left">
                  <Text className="from-user">{message.fromUser}</Text>
                  {!message.isRead && <View className="unread-dot"></View>}
                </View>
                <Text className="message-time">{message.time}</Text>
              </View>

              <Text className="post-title">在《{message.postTitle}》中评论</Text>

              <View className="comment-box">
                <Text className="comment-content">{message.commentContent}</Text>
              </View>

              {message.replyContent && (
                <View className="reply-box">
                  <Text className="reply-label">你的回复：</Text>
                  <Text className="reply-content">{message.replyContent}</Text>
                </View>
              )}

              <View className="message-actions">
                {!message.isRead && (
                  <Button
                    className="action-btn mark-read-btn"
                    onClick={() => handleMarkAsRead(message.id)}
                  >
                    标记已读
                  </Button>
                )}
                {!message.replyContent && (
                  <Button
                    className="action-btn reply-btn"
                    onClick={() => {
                      setReplyingId(replyingId === message.id ? null : message.id);
                      handleMarkAsRead(message.id);
                    }}
                  >
                    {replyingId === message.id ? '取消' : '回复'}
                  </Button>
                )}
                <Button
                  className="action-btn delete-btn"
                  onClick={() => handleDeleteMessage(message.id)}
                >
                  删除
                </Button>
              </View>

              {replyingId === message.id && (
                <View className="reply-input-box">
                  <Input
                    className="reply-input"
                    placeholder="输入回复内容..."
                    value={replyText}
                    onInput={(e) => setReplyText(e.detail.value)}
                    maxLength={500}
                  />
                  <Button
                    className="send-reply-btn"
                    onClick={() => handleReply(message.id)}
                  >
                    发送
                  </Button>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Messages;
