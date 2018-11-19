<?php
namespace Common\Functions;
/**
 * Created by PhpStorm.
 * User: shopal
 * Date: 2017/9/14
 * Time: 上午9:47
 */

/**
 * http 请求成功
 */
define('REQUEST_SUCCESS', 200, FALSE);


/**
 * 未认证
 * 身份验证未通过
 */
define('NOT_CERTIFIED', 401, FALSE);

/**
 * 非法的请求
 * 请求参数错误
 */
define('REQUEST_PARAM_ERROR', 400, FALSE);


/**
 * 请求接口没有权限(客户端与后端接口分离)
 */
define('REQUEST_NOT_PERMISSION', 403, FALSE);

/**
 * 请求资源未找到
 */
define('REQUEST_NOT_FOUND', 404, FALSE);


/**
 * 客户端请求的资源已经不存在
 */
define('REQUEST_GONE', 410, FALSE);

/**
 * 请求方法错误(POST, GET, PUT, DELETE)
 */
define('REQUEST_ERROR_METHOD', 405, FALSE);


/**
 * 请求超时
 */
define('REQUEST_TIME_OUT', 408, FALSE);


/**
 * 请求URL过长
 */
define('REQUEST_BIG_LONG', 413, FALSE);


/**
 * 请求参数过多
 */
define('REQUEST_MUCH_PARAM', 414, FALSE);


/**
 * 服务器错误
 */
define('SERVICE_ERROR', 500, FALSE);


/**
 * 请求方法未找到
 */
define('FUNCTION_NOT_FOUND', 501, FALSE);


/**
 * 服务器暂停服务
 */
define('SERVICE_STOP', 503, FALSE);
