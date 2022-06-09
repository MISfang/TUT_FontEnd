import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams;

export interface DemoListItem {
  actionid: number;
  text: string;//内容
  type: string;//类型
  releaseTime: string;//发布时间
  cemmentNum: number;//评论数量
  likeNum: number;//点赞数量
  number: string;//学号
}

/**
 * @description: Request list return value
 */
export type DemoListGetResultModel = BasicFetchResult<DemoListItem>;
