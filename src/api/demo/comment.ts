import { FmydefHttp } from '/@/utils/http/axios';

enum Api {
  DETAIL = '/node/comment/delete',
}

/**
 * @description: Get sample list value
 */

const deleteComment = (id: number) =>
  FmydefHttp.get({
    url: Api.DETAIL,
    params: { id },
  });

export { deleteComment };
