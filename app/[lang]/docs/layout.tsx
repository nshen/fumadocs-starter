import { RootProvider } from 'fumadocs-ui/provider';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { Translations } from 'fumadocs-ui/i18n';

const zh: Partial<Translations> = {
  toc: '目录',
  search: '搜索',
  lastUpdate: '最后更新',
  searchNoResult: '没有结果',
  previousPage: '上一页',
  nextPage: '下一页',
  chooseLanguage: '选择语言',
  // other translations
};

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {

  const { lang } = await params;

  return (

    <RootProvider
      i18n={{
        locale: lang,
        locales: [
          {
            name: 'English',
            locale: 'en',
          },
          {
            name: 'Chinese',
            locale: 'zh',
          }
        ],
        translations: { zh }[lang],
      }}
    // default dark mode
    // theme={{
    //   defaultTheme: 'dark',
    //   enableSystem: true
    // }}
    >

      <DocsLayout {...baseOptions(lang)} tree={source.pageTree[lang]}>
        {children}
      </DocsLayout>

    </RootProvider>
  );
}
