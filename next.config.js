/** @type {import('next').NextConfig} */


const headers = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
]

if (process.env.ENV !== 'production') {
  headers.push({
    key: 'X-Robots-Tag',
    value: 'noindex',
  })
}


const nextConfig = {
  headers() {
    return [
      {
        headers,
        source: '/(.*)',
      },
    ]
  },
  optimizeFonts: true,
  output: 'standalone',
  trailingSlash: true,
}

module.exports = nextConfig
