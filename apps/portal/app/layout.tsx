import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TenantProvider, OrganizationProvider } from "@tinadmin/core/multi-tenancy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Platform - Consumer Portal",
  description: "Consumer-facing portal for SaaS platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TenantProvider>
          <OrganizationProvider>
            {children}
          </OrganizationProvider>
        </TenantProvider>
      </body>
    </html>
  );
}

