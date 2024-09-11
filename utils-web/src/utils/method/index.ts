/**
 * 获取URL中的查询参数并将其解析为对象。
 *
 * @param {string} url - 需要解析的URL字符串。
 * @returns {Record<string, string | null>} 一个包含查询参数的对象，键为参数名，值为参数值。如果参数值不存在，则值为 null。
 */
export function getQueryParams(url: string): Record<string, string | null> {
    const params: Record<string, string | null> = {};
    // 解析 URL 并提取查询字符串部分
    const queryString = url.split('?')[1];

    if (!queryString) {
        return params; // 如果没有查询字符串，则返回空对象
    }
    // 将查询字符串按 '&' 分割成键值对
    const pairs = queryString.split('&');

    for (const pair of pairs) {
        const [key, value] = pair.split('=');
        // 解码键和值，并将其存入对象中
        params[decodeURIComponent(key)] = value ? decodeURIComponent(value) : null;
    }

    return params;
}


/**
 * 
 * @param {string} url  查询的url
 * @param {string} paramsName url上查询的参数
 * @returns  {string}  查询到的参数值
 */
export function getUrlParamsValue(url: string, paramsName: string): string | undefined {
    if (!url || !paramsName) {
        return
    }
    const params = getQueryParams(url)
    return params[paramsName] || ''

}









