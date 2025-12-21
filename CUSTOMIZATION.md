# 🎨 Customization Guide

This guide covers all the customization points in your SaaS platform.

## 🚀 Quick Customization

Run the initialization script to automatically update most settings:

```bash
node scripts/initialize-fork.js
```

Then manually customize the items below for your specific needs.

---

## 📦 Package & Project Names

### Package Names

Update in all `package.json` files:

```json
{
  "name": "@your-org/your-project-name",
  "author": "Your Organization",
  "repository": {
    "url": "git+https://github.com/your-org/your-repo.git"
  }
}
```

**Files to update:**
- `package.json` (root)
- `apps/admin/package.json`
- `apps/portal/package.json`
- `packages/@tinadmin/*/package.json` (3 files)

### Project ID

**File:** `supabase/config.toml`

```toml
project_id = "your-project-name"
```

---

## 🎨 Branding

### Company/Product Name

Search and replace throughout the codebase:
- `TinAdmin` → Your Product Name
- `Tin Developers` → Your Company Name

### Logo & Favicon

Replace these files with your own:
- `public/images/logo/logo.svg` - Main logo
- `public/images/logo/logo-dark.svg` - Dark mode logo
- `public/images/logo/logo-icon.svg` - Icon only
- `public/images/favicon.ico` - Browser favicon

### Brand Colors

**File:** `tailwind.config.ts`

```typescript
colors: {
  brand: {
    50: '#your-color',
    100: '#your-color',
    // ... customize all shades
    900: '#your-color',
  }
}
```

### Theme Settings

**File:** `src/context/ThemeContext.tsx`

Customize default theme, colors, and behavior.

---

## 👤 Admin Credentials

### Environment Variables

**File:** `.env.local`

```bash
PLATFORM_ADMIN_EMAIL=admin@yourcompany.com
PLATFORM_ADMIN_PASSWORD=YourSecurePassword123!
```

### Database Seeds

Update SQL files with your admin email:
- `supabase/create_platform_admin.sql`
- `supabase/create_admin_user_record.sql`
- `apps/admin/supabase/create_platform_admin.sql`
- `apps/portal/supabase/create_platform_admin.sql`

---

## 🗺️ Navigation & Menus

### Admin Navigation

**File:** `src/config/navigation.tsx` or `apps/admin/config/navigation.tsx`

Add, remove, or reorder menu items:

```typescript
export const menuItems = [
  {
    title: "Your Section",
    items: [
      {
        label: "Your Page",
        href: "/your-page",
        icon: YourIcon,
      },
    ],
  },
];
```

### Portal Navigation

**File:** `apps/portal/config/navigation.tsx`

Customize consumer-facing navigation.

---

## 🎯 Features & Modules

### Enable/Disable Features

**File:** `.env.local`

```bash
# Feature flags
NEXT_PUBLIC_ENABLE_BILLING=true
NEXT_PUBLIC_ENABLE_EMAIL=true
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

### Add Custom Modules

1. Create module in `packages/@tinadmin/core/src/your-module/`
2. Export from `packages/@tinadmin/core/src/index.ts`
3. Use in your apps

---

## 💳 Payment Configuration

### Stripe Setup

1. Get API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Update `.env.local`:
   ```bash
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```
3. Configure products in Stripe Dashboard
4. Sync products: `pnpm run sync-stripe-products`

### Custom Payment Provider

Extend `packages/@tinadmin/core/src/billing/` with your provider.

---

## 📧 Email Configuration

### Choose Provider

**File:** `.env.local`

```bash
EMAIL_PROVIDER=resend  # or sendgrid, ses, inbucket
```

### Resend

```bash
RESEND_API_KEY=re_...
EMAIL_FROM=noreply@yourcompany.com
EMAIL_FROM_NAME=Your Company
```

### SendGrid

```bash
SENDGRID_API_KEY=SG...
EMAIL_FROM=noreply@yourcompany.com
```

### AWS SES

```bash
AWS_SES_REGION=us-east-1
AWS_SES_ACCESS_KEY_ID=AKIA...
AWS_SES_SECRET_ACCESS_KEY=...
EMAIL_FROM=noreply@yourcompany.com
```

### Custom Email Templates

**Location:** `packages/@tinadmin/core/src/email/templates/`

Create new templates or modify existing ones.

---

## 🏢 Multi-Tenancy

### Subdomain Routing

**File:** `.env.local`

```bash
NEXT_PUBLIC_ENABLE_SUBDOMAIN_ROUTING=true
NEXT_PUBLIC_DEFAULT_TENANT_DOMAIN=yourcompany.com
```

### Custom Domains

Configure in tenant settings UI or via API.

### Example Tenants

**File:** `src/app/(admin)/(others-pages)/multi-tenant/page.tsx`

Update example tenant data for demos.

---

## 🔐 Permissions & Roles

### Custom Roles

**File:** `supabase/migrations/` - Add migration

```sql
INSERT INTO roles (name, description, coverage, permissions)
VALUES (
  'Your Custom Role',
  'Description',
  'tenant',
  ARRAY['your.permission', 'another.permission']
);
```

### Custom Permissions

**File:** `packages/@tinadmin/core/src/permissions/permissions.ts`

Add new permission checks:

```typescript
export const PERMISSIONS = {
  YOUR_MODULE: {
    READ: 'your-module.read',
    WRITE: 'your-module.write',
  },
};
```

---

## 🎨 UI Customization

### Component Library

**Location:** `src/components/` or `packages/@tinadmin/ui-admin/src/`

Modify existing components or add new ones.

### Layouts

**Files:**
- `src/layout/` - Main layouts
- `apps/admin/layout/` - Admin layouts
- `apps/portal/layout/` - Portal layouts

### Styling

All styles use Tailwind CSS. Customize in:
- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Global styles
- Component-level: Use Tailwind classes

---

## 🗄️ Database

### Custom Tables

1. Create migration:
   ```bash
   supabase migration new your_table_name
   ```
2. Write SQL in `supabase/migrations/`
3. Apply: `supabase db reset`

### Custom Queries

Add to `packages/@tinadmin/core/src/database/` or create new modules.

---

## 🚀 Deployment

### Vercel

1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy: `vercel --prod`

### Custom Domain

1. Add domain in Vercel
2. Configure DNS
3. Update `NEXT_PUBLIC_APP_URL`

### Multiple Environments

Create separate projects for:
- Development
- Staging
- Production

---

## 📱 Apps Configuration

### Admin App

**Port:** 3001 (configurable in `apps/admin/package.json`)

**Customize:**
- Navigation: `apps/admin/config/navigation.tsx`
- Theme: `apps/admin/context/ThemeContext.tsx`
- Components: `apps/admin/components/`

### Portal App

**Port:** 3002 (configurable in `apps/portal/package.json`)

**Customize:**
- Landing page: `apps/portal/app/page.tsx`
- Public pages: `apps/portal/app/(consumer)/`
- Components: `apps/portal/components/`

---

## 🔧 Advanced Customization

### Add New App

1. Create app directory: `apps/your-app/`
2. Add to `pnpm-workspace.yaml`
3. Create `package.json`
4. Add to `turbo.json` tasks

### Custom Core Module

1. Create in `packages/@tinadmin/core/src/your-module/`
2. Export from `packages/@tinadmin/core/src/index.ts`
3. Use in apps: `import { ... } from '@tinadmin/core/your-module'`

### Extend Database Types

**File:** `packages/@tinadmin/core/src/database/types.ts`

Add custom table types for type safety.

---

## 📊 Analytics & Monitoring

### Google Analytics

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Sentry

```bash
NEXT_PUBLIC_SENTRY_DSN=https://...
SENTRY_AUTH_TOKEN=...
```

### Custom Analytics

Integrate your preferred analytics in:
- `src/app/layout.tsx`
- `apps/admin/app/layout.tsx`

---

## 🧪 Testing Your Customizations

```bash
# Type check
pnpm type-check

# Lint
pnpm lint

# Build
pnpm build:all

# Test
pnpm test

# Run locally
pnpm dev
```

---

## 📝 Documentation Updates

After customizing, update these docs:
- `README.md` - Project overview
- `docs/USER_GUIDE.md` - User instructions
- `docs/DEVELOPER_GUIDE.md` - Developer setup
- `DEPLOYMENT.md` - Deployment instructions

---

## 🆘 Need Help?

- Check [FORK_GUIDE.md](FORK_GUIDE.md)
- Review [docs/](docs/) directory
- Open an issue on GitHub
- Check existing issues and discussions

---

## ✅ Customization Checklist

- [ ] Run `node scripts/initialize-fork.js`
- [ ] Update all package.json files
- [ ] Configure .env.local
- [ ] Replace logo and favicon
- [ ] Customize brand colors
- [ ] Update navigation menus
- [ ] Configure Stripe (if using)
- [ ] Configure email provider
- [ ] Update admin credentials
- [ ] Test all features
- [ ] Update documentation
- [ ] Deploy to staging
- [ ] Deploy to production

---

**Happy customizing! 🎉**

