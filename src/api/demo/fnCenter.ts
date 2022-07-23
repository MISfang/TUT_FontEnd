import { FmydefHttp } from '/@/utils/http/axios';

enum Api {
  DATA_LIST = '/node/card/getAll',
  TOGGLE_IS_PICKED = '/node/card/toggleIsPicked',
}

/**
 * @description: Get sample list value
 */

const getLostCardData = (data: any = {}) =>
  FmydefHttp.post({
    url: Api.DATA_LIST,
    data,
  });

const toggleIsPicked = (id: number) =>
  FmydefHttp.get({
    url: Api.TOGGLE_IS_PICKED,
    params: { id },
  });

export { getLostCardData, toggleIsPicked };
