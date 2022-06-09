import { UploadApiResult } from './model/uploadModel';
import { FupLoaddefHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { uploadUrl = '' } = useGlobSetting();


/**
 * @description: Upload interface
 */
export const uploadApi = (
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) =>
  FupLoaddefHttp.uploadFile<UploadApiResult>(
    {
      url: uploadUrl,
      onUploadProgress,
    },
    params,
  );

