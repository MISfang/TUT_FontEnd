import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const userCenter: AppRouteModule = {
  path: '/usercenter',
  name: 'userCenter',
  component: LAYOUT,
  redirect: '/usercenter',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ic:baseline-sensor-occupied',
    title: t('routes.dashboard.userCenter'),
    orderNo: 1,
  },
  children: [
    {
      path: '',
      name: 'userCenterIndex',
      component: () => import('/@/views/userCenter/index.vue'),
      meta: {
        title: t('routes.dashboard.userCenter'),
        icon: 'ic:baseline-sensor-occupied',
        hideMenu: true,
      },
    },
  ],
};

export default userCenter;
