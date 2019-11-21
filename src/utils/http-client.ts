import { Toast } from 'antd-mobile';
import axios from 'axios';

const axiosInst = axios.create({
    baseURL: '', // 这里通过 proxies 中的配置进行转发
    timeout: 10 * 1000,
    headers: {
        'Cache-Control': 'no-cache',
    },
});
function _parseResponseData(data) {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
    return data;
}

function _matchWebstandard(result) {
    return 'data' in result;
}

axiosInst.interceptors.response.use(
    response => {
        const result = _parseResponseData(response.data);
        if (!_matchWebstandard(result)) {
            return {
                ...response,
                result,
            };
        }

        const { success, message, data } = result;

        if (!success) {
            if (message) {
                Toast.info(message, 2);
            }
            return Promise.reject(new Error(message || '服务器开小差了~'));
        }
        return data;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            Toast.info(`未登录`, 2);
            return;
        }
        if (error.response && error.response.status) {
            Toast.info(`服务器 ${error.response.status} 异常`, 2);
            return Promise.reject(new Error(`服务器 ${error.response.status} 异常`));
        }
        Toast.info('请检查网络链接', 2);
        return Promise.reject(error);
    },
);

export default axiosInst;
export const axiosRaw = axios.create();
