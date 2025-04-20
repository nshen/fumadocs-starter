import { i18n } from '@/lib/i18n';
import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
 
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: locale === 'zh' ? '中文文档' : 'English Docs',
    },
    githubUrl: 'https://github.com',
    links: [
      {
        type: 'main',
        text: locale === 'zh' ? '文档' : 'Documentation',
        url: '/docs',
      },
    ],
  };
}
