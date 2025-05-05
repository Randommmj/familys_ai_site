'use client';

import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">出错了</h2>
      <p className="mb-4">抱歉，出现了一个错误。</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        重试
      </button>
    </div>
  );
} 