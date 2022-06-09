import { defHttp, FmydefHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/node/admin/login',
  Login2 = '/login',
  Logout = '/logout',
  GetUserInfo = '/node/admin/getUserInfo',
  GetPermCode = '/getPermCode',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  window.localStorage.setItem('user', JSON.stringify(params));
  return FmydefHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  const data = JSON.parse(window.localStorage.getItem('user')!);
  return FmydefHttp.post<GetUserInfoModel>({ url: Api.GetUserInfo, data }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}
