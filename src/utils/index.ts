/* eslint-disable */
// 设置url挂载参数
export const setUrlQuery = options => {
  let { url, query } = options;
  if (!url) return '';
  if (query) {
    let queryArr: string[] = [];
    for (const key in query) {
      if (query.hasOwnProperty(key)) {
        queryArr.push(`${key}=${query[key]}`);
      }
    }
    if (url.indexOf('?') !== -1) {
      url = `${url}&${queryArr.join('&')}`;
    } else {
      url = `${url}?${queryArr.join('&')}`;
    }
  }
  return url;
};

/**
 * 获取url参数数据，返回obj对象
 */
export const getUrlToJson = url => {
  try {
    const strUrl = url || window?.location?.href || '';
    let temp1 = strUrl.split('?');
    let [_, pram] = temp1;
    if (pram === 'undefined' || !pram) {
      return {};
    }
    let keyValue = pram.split('&');
    let obj = {};
    for (let i = 0; i < keyValue.length; i++) {
      let item = keyValue[i].split('=');
      let [key, value] = item;
      obj[key] = value;
    }
    return obj;
  } catch (error) {
    return {};
  }
};

// pc端七牛缩略图，指定宽
export const getPcThumbImg = ({ url, width, height }) => {
  let newUrl = `${url}?imageView2/2/w/${width || 200}`;
  if (height) {
    newUrl += `/h/${height}`;
  }
  return newUrl;
};

// 移动端七牛缩略图，指定宽
export const getMobileThumbImg = ({ url, width, height }) => {
  let newUrl = `${url}?imageView2/0/w/${width || 200}`;
  if (height) {
    newUrl += `/h/${height}`;
  }
  return newUrl;
};

/**
 * 判断用户浏览器终端信息
 *
 * browser.versions.ios 判断是否是IOS设备
 */
export const browser = () => {
  if (navigator) {
    const u = navigator ? navigator.userAgent : '';
    return {
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, // 是否微信
    };
  }
  return {};
};

/**
 * 通用时间格式转换，将时间戳转换自己需要的格式
 *
 * [fmt] 第二参数类型字符串，注意指定
 * 年(y)、月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) ，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * customFormatDate(时间戳, "yyyy-MM-dd hh:mm:ss.S") 转换后 2016-07-02 08:09:04.423
 */
export const customFormatDate = (UnixTime, fmt) => {
  if (!UnixTime) return '';
  const dateTime = new Date(parseInt(`${UnixTime * 1000}`));
  const o = {
    'M+': dateTime.getMonth() + 1, //月份
    'd+': dateTime.getDate(), //日
    'h+': dateTime.getHours(), //小时
    'm+': dateTime.getMinutes(), //分
    's+': dateTime.getSeconds(), //秒
    'q+': Math.floor((dateTime.getMonth() + 3) / 3), //季度
    S: dateTime.getMilliseconds(), //毫秒
  };
  let newDataStrin = fmt || 'yyyy-MM-dd hh:mm:ss.S';
  if (/(y+)/.test(newDataStrin)) {
    newDataStrin = newDataStrin.replace(
      RegExp.$1,
      (dateTime.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(newDataStrin)) {
      newDataStrin = newDataStrin.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      );
    }
  }
  return newDataStrin;
};
