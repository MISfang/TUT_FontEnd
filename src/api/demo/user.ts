import { FmydefHttp } from '/@/utils/http/axios';

enum Api {
  ALL_USER = '/node/user/getAll',
  ALL_ADMIN = '/node/admin/getAll',
  CREATE_ADMIN = '/node/admin/create',
  USER_GRADE = '/node/user/grade'
}

/**
 * @description: Get sample list value
 */



const getAllUser = (data: any = {}) => FmydefHttp.post({
  url: Api.ALL_USER,
  data
})


const getAllAdmin = () => FmydefHttp.get({
  url: Api.ALL_ADMIN,
})

const createAdminAPi = (data: { number: number, password: string }) => FmydefHttp.post({
  url: Api.CREATE_ADMIN,
  data
})

const getUserGradeData = () => FmydefHttp.get({
  url: Api.USER_GRADE,
})



export { getAllUser, getAllAdmin, createAdminAPi, getUserGradeData };
