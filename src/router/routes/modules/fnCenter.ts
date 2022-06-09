import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const fnCenter: AppRouteModule = {
  path: '/fnCenter',
  name: 'fnCenter',
  component: LAYOUT,
  redirect: '/fnCenter/schoolCard',
  meta: {
    icon: 'ri:apps-line',
    title: t('routes.dashboard.fnCenter'),
    orderNo: 2,
  },
  children: [
    {
      path: 'schoolCard',
      name: 'schoolCard',
      component: () => import('/@/views/fnCenter/schoolCard/index.vue'),
      meta: {
        title: t('routes.dashboard.schoolCard'),
        icon: 'bi:credit-card-2-front',
      },
    },
  ],
};

export default fnCenter;
