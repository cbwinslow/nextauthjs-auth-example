'use client';

import { useState } from 'react';

export default function BucketsPage() {
  const [files, setFiles] = useState([
    { name: 'document.pdf', size: '2.4 MB', modified: '2024-01-15' },
    { name: 'image.jpg', size: '1.8 MB', modified: '2024-01-16' },
    { name: 'data.json', size: '45 KB', modified: '2024-01-17' },
  ]);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    
    // Simulate file upload to R2
    setTimeout(() => {
      setFiles([
        ...files,
        {
          name: file.name,
          size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
          modified: new Date().toISOString().split('T')[0],
        },
      ]);
      setUploading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-2">R2 Buckets</h1>
          <p className="text-xl text-purple-700">
            S3-compatible object storage without egress fees
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-purple-900">Upload Files</h2>
            <label className="cursor-pointer bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-md hover:shadow-lg">
              {uploading ? 'Uploading...' : 'Choose File'}
              <input
                type="file"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
          <p className="text-purple-700">
            Upload files to your R2 bucket. Files are stored globally with low latency access.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg border-2 border-purple-200 overflow-hidden">
          <div className="px-6 py-4 bg-purple-50 border-b-2 border-purple-200">
            <h2 className="text-xl font-bold text-purple-900">Files in Bucket</h2>
          </div>
          <div className="divide-y divide-purple-200">
            {files.map((file, idx) => (
              <div
                key={idx}
                className="px-6 py-4 hover:bg-purple-50 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">📄</div>
                  <div>
                    <div className="font-semibold text-purple-900">{file.name}</div>
                    <div className="text-sm text-purple-600">
                      {file.size} • Modified {file.modified}
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
                    Download
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Total Files" value={files.length.toString()} />
          <StatCard label="Storage Used" value="4.3 GB" />
          <StatCard label="Bandwidth" value="12.5 GB" />
        </div>

        <div className="mt-8 bg-purple-100 border-2 border-purple-300 rounded-lg p-6">
          <h3 className="text-lg font-bold text-purple-900 mb-2">About R2</h3>
          <p className="text-purple-800">
            Cloudflare R2 Storage allows developers to store large amounts of unstructured data without 
            the egress bandwidth fees associated with typical cloud storage services.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-purple-200 p-6 text-center">
      <div className="text-3xl font-bold text-purple-900 mb-1">{value}</div>
      <div className="text-sm text-purple-700">{label}</div>
    </div>
  );
}
