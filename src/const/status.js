export const HTTP_STATUS = {
  SUCCESS: 200,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

// export const COMMON_STATUS = {
//   NOT_FOUND: -40400, // "请求资源不存在",
//   API_NOT_FOUND: -40401, // "请求方法不存在",
//   EXCEPTION: -50000, // "系统异常",
//   PARAM_ERROR: -40001, // "参数错误",
//   AUTH_FAILED: -40100, // "认证错误",
//   NO_PERMISION: -40302, // "没有权限",
//   NET_REQUEST_FAILED: -40000, // "网络请求失败",
// }

// promise status
export const SUCCESS = { success:'success'}
export const FAIL = { fail:'fail'}
export const COMPLETE = { complete:'complete'}

export const PROMISE_STATUS = {
  success: 'success',
  fail: 'fail',
  complete: 'complete'
}

export const RESULT_STATUS = {
  SUCCESS:0,
  SIGNATURE_FAILED: -1200  // 签名失败
}
