import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gold Price Calculator',
    short_name: 'Gold',
    description: 'Gold Value by Karat & Weight',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#D97706',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
