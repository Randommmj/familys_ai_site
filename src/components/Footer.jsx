'use client'

import React, { useState } from 'react'

const Footer = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false)

  const acceptCookies = () => {
    setCookiesAccepted(true)
    // Set cookie to remember user's preference
    document.cookie = "cookies_accepted=true; max-age=31536000; path=/"
  }

  return (
    <footer className="bg-white pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm">
            版权© 2025 FAMILyS -保留所有权利。
          </p>
          <p className="text-gray-500 text-xs mt-2">
            由 提供技术支持
          </p>
        </div>
        
        {/* Cookie Consent Banner */}
        {!cookiesAccepted && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">此网站使用 Cookie。</h4>
                <p className="text-sm text-gray-300">
                  我们使用 cookie 来分析网站流量并优化您的网站体验。通过接受我们对 cookie 的使用，您的数据将与所有其他用户数据进行汇总。
                </p>
              </div>
              <button
                onClick={acceptCookies}
                className="bg-white text-gray-800 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                接受
              </button>
            </div>
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer 