import { WebView } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import { useState } from 'react'
import { WEB_BASE_URL } from '@/api/config'

export default function WebViewPage() {
  const [url, setUrl] = useState('')

  useLoad((options) => {
    const path = options.url || ''
    const fullUrl = `${WEB_BASE_URL}${path}`
    setUrl(fullUrl)
    console.log('Loading WebView URL:', fullUrl)
  })

  if (!url) {
    return null
  }

  return <WebView src={url} />
}
