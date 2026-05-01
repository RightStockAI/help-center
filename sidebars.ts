import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    
    {
      type: 'category',
      label: 'Getting Started',
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
      label: 'Product Concepts',
      collapsed: false,
      items: [
        'product/tools-and-terms',
        'product/research-workflows',
        'product/public-pages-and-policies',
      ],
    },
    
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/stock-analysis',
        'features/basic-ai-analysis',
        'features/traditional-analysis',
        'features/ai-analysis',
        'features/smart-ai-analysis',
        'features/chart-pattern-analysis',
        'features/research-reports-and-picks',
        'features/ai-news',
        'features/portfolio-management',
        'features/market-overview',
        'features/charts-and-watchlists',
      ],
    },

    {
      type: 'category',
      label: 'Subscription',
      items: ['subscription/plans'],
    },
    
    {
      type: 'category',
      label: 'Help & Support',
      items: [
        'help/faq',
        'help/troubleshooting',
      ],
    },
    
    {
      type: 'category',
      label: 'Learning Resources',
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
    
  ],
};

export default sidebars;
