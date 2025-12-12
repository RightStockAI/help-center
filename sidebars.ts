import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/account-setup',
        'getting-started/dashboard',
        'getting-started/navigation',
        'getting-started/first-analysis',
      ],
    },
    
    {
      type: 'category',
      label: '✨ Features',
      items: [
        'features/stock-analysis',
        'features/traditional-analysis',
        'features/ai-analysis',
        'features/portfolio-management',
        'features/market-overview',
      ],
    },
    
    {
      type: 'category',
      label: '💳 Subscription',
      items: ['subscription/plans'],
    },
    
    {
      type: 'category',
      label: '❓ Help & Support',
      items: [
        'help/faq',
        'help/troubleshooting',
      ],
    },
    
    {
      type: 'category',
      label: '📚 Learning Resources',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Understanding AI',
          items: [
            'learning/understanding-ai/how-ai-works',
            'learning/understanding-ai/confidence-levels',
            'learning/understanding-ai/data-sources',
            'learning/understanding-ai/limitations',
          ],
        },
        {
          type: 'category',
          label: 'Investing Basics',
          items: [
            'learning/investing-basics/smart-investing',
            'learning/investing-basics/risk-management',
            'learning/investing-basics/disclaimers',
            'learning/investing-basics/using-rightstockai',
          ],
        },
      ],
    },
    
    {
      type: 'category',
      label: '🔌 API Documentation',
      items: ['api/overview'],
    },
  ],
};

export default sidebars;
