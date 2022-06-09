import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const ctxCenter: AppRouteModule = {
  path: '/ctxCenter',
  name: 'ctxCenter',
  component: LAYOUT,
  redirect: '/ctxCenter/forum',
  meta: {
    icon: 'ic:baseline-assignment',
    title: t('routes.dashboard.ctxCenter'),
    orderNo: 2,
  },
  children: [
    {
      path: 'forum',
      name: 'forum',
      component: () => import('/@/views/ctxCenter/forum/index.vue'),
      meta: {
        title: t('routes.dashboard.forum'),
        icon: 'ic:baseline-article',
      },
    },
    {
      path: 'slideshow',
      name: 'slideshow',
      component: () => import('/@/views/ctxCenter/slideshow/index.vue'),
      meta: {
        title: t('routes.dashboard.slideshow'),
        icon: 'ic:baseline-all-inbox',
      },
    },
  ],
};

export default ctxCenter;
