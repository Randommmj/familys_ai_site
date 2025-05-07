'use client';

export default function SimpleFooter() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm">版权© {new Date().getFullYear()} FAMILyS - 保留所有权利。</p>
          </div>
          <div className="text-right text-sm">
            <p>由 <span className="italic">技术支持</span> 提供技术支持</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm">此网站使用 Cookie。我们使用 cookie 来分析网站流量并优化您的网站体验。</p>
        </div>
      </div>
    </footer>
  );
} 