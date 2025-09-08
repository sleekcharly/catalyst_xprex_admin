import { inter } from '@/app/fonts';
import '@/app/globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/app-sidebar';
import MainBody from '@/components/main-body';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 👈 prevents mismatch warning */}
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SidebarProvider
            style={
              {
                '--sidebar-width': 'calc(var(--spacing) * 72)',
                '--header-height': 'calc(var(--spacing) * 12)',
              } as React.CSSProperties
            }
          >
            <AppSidebar />
            <MainBody>{children}</MainBody>
          </SidebarProvider>
        </ThemeProvider>

        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
