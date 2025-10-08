# Deployment Guide - AI Customer Care Template

This guide covers various deployment options for your AI Customer Care application.

## 🚀 Quick Deploy (Vercel - Recommended)

### 1. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### 2. Environment Variables
Set these in your Vercel dashboard:
```env
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

## 🐳 Docker Deployment

### 1. Create Dockerfile
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### 2. Build and Run
```bash
# Build the image
docker build -t ai-customer-care-app .

# Run the container
docker run -p 3000:3000 ai-customer-care-app
```

## ☁️ AWS Deployment

### 1. Using AWS Amplify
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

## 🌐 Netlify Deployment

### 1. Build Settings
```yaml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## 🔧 Environment Configuration

### Development
```env
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Production
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

## 📊 Performance Optimization

### 1. Enable Caching
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};
```

### 2. Image Optimization
```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority
/>
```

## 🔒 Security Considerations

### 1. Environment Variables
- Never commit `.env.local` files
- Use secure random secrets for production
- Rotate API keys regularly

### 2. HTTPS
- Always use HTTPS in production
- Configure proper SSL certificates
- Enable HSTS headers

## 📈 Monitoring & Analytics

### 1. Error Tracking
```bash
# Install Sentry
npm install @sentry/nextjs
```

### 2. Performance Monitoring
```bash
# Install Vercel Analytics
npm install @vercel/analytics
```

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires 18+)
   - Clear `node_modules` and reinstall
   - Verify all dependencies are compatible

2. **Deployment Issues**
   - Check environment variables
   - Verify build output directory
   - Check deployment logs

3. **Performance Issues**
   - Enable caching
   - Optimize images
   - Use CDN for static assets

### Getting Help
- 📧 Email: support@tinadmin.com
- 📚 Documentation: [docs.tinadmin.com](https://docs.tinadmin.com)
- 🐛 Issues: [GitHub Issues](https://github.com/tinadmin/tinadmin/issues)

---

**Happy deploying! 🚀**