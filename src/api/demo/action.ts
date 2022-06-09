import { FmydefHttp } from '/@/utils/http/axios';

enum Api {
  DATA_LIST = '/node/action/getAll',
  ZHI_DING = '/node/action/zhiDing',
  DELETE = '/node/action/Delete',
  DETAIL = '/node/action/detail',
  CREATE = '/node/action/create',
}

/**
 * @description: Get sample list value
 */


const getActionList = (data: any = {}) =>
  FmydefHttp.post({
    url: Api.DATA_LIST,
    data
  });

const actionZhiDing = (id: number) =>
  FmydefHttp.get({
    url: Api.ZHI_DING,
    params: { id }
  });

const actionDelete = (id: number) =>
  FmydefHttp.get({
    url: Api.DELETE,
    params: { id }
  });

const getActionDetail = (id: number) =>
  FmydefHttp.get({
    url: Api.DETAIL,
    params: { id }
  })

const createAction = (params) =>
  FmydefHttp.post({
    url: Api.CREATE,
    params
  })

export { getActionList, actionZhiDing, actionDelete, getActionDetail, createAction };
