import { request } from '@tarojs/taro';

type RequestOpts = Omit<request.Option, 'url'>;

const safeRequest = (url: string, options: RequestOpts) => {
  return new Promise((resolve, reject) => {
    request({
      method: 'GET',
      ...options,
      header: {
        'Content-Type': 'application/json',
        ...options?.header,
      },
      url,
    }).then(
      response => {
        resolve(response?.data ?? response);
      },
      err => {
        reject(err);
      },
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = async (url: string, opts: RequestOpts): Promise<any> => {
  return safeRequest(url, opts);
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = async (url: string, opts: RequestOpts): Promise<any> => {
  return safeRequest(url, {
    ...opts,
    method: 'POST',
  });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = async (url: string, opts: RequestOpts): Promise<any> => {
  return safeRequest(url, {
    ...opts,
    method: 'PUT',
  });
};

export default {
  get,
  post,
  put,
};
