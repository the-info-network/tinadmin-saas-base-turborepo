/**
 * Template Configuration
 * 
 * This file contains all the customizable values for your SaaS platform.
 * Update these values when forking the template.
 * 
 * After updating, run: node scripts/initialize-fork.js
 */

module.exports = {
  // Organization & Project
  organization: {
    name: 'Your Organization',
    slug: 'your-org',
    email: 'contact@yourcompany.com',
    website: 'https://yourcompany.com',
  },

  project: {
    name: 'Your SaaS Platform',
    slug: 'your-saas-platform',
    description: 'Enterprise-ready SaaS admin dashboard with CRM, multi-tenancy, and billing',
  },

  // GitHub Repository
  repository: {
    owner: 'your-org',
    name: 'your-saas-platform',
    url: 'https://github.com/your-org/your-saas-platform',
  },

  // Package Names
  packages: {
    root: '@your-org/your-saas-platform',
    admin: '@your-org/admin',
    portal: '@your-org/portal',
    core: '@your-org/core',
    config: '@your-org/config',
    uiAdmin: '@your-org/ui-admin',
    uiConsumer: '@your-org/ui-consumer',
  },

  // Admin Credentials (for initial setup)
  admin: {
    email: 'admin@yourcompany.com',
    password: 'ChangeThisPassword123!',
    fullName: 'Platform Administrator',
  },

  // Branding
  branding: {
    productName: 'Your SaaS Platform',
    companyName: 'Your Company',
    tagline: 'Enterprise-ready SaaS solution',
    supportEmail: 'support@yourcompany.com',
  },

  // Deployment
  deployment: {
    vercel: {
      adminProject: 'your-saas-admin',
      portalProject: 'your-saas-portal',
    },
    domains: {
      admin: 'admin.yourcompany.com',
      portal: 'app.yourcompany.com',
    },
  },

  // Features (enable/disable)
  features: {
    billing: true,
    email: true,
    analytics: false,
    multiTenant: true,
    whiteLabel: true,
  },
};

