import { RootProvider } from 'fumadocs-ui/provider';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (

    <RootProvider
    // default dark mode
    // theme={{
    //   defaultTheme: 'dark',
    //   enableSystem: true
    // }}
    >
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
