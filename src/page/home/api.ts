import axios from '../../utils/http-client';

export function attainUser() {
    const api = 'http://10.10.40.52:8090/EmpInfo/disabled/get';
    // let data = {token: '1234', startTime: 'eecfec36-5a8c-47b8-a926-af406575d353', endTime: ''};
    return axios.post(api, null, {
        // headers: {
        //     'Content-Type': 'multipart/form-data;charset=UTF-8'
        // },
        timeout: 60 * 1000
    });
}

export function getKuaiDiInfo() {
    const api = 'https://neiku.qunhequnhe.com/api/v1/manager/home?key=a699535f-b796-49ae-bea3-24438e57953e';
    return axios.get(api, {timeout: 60 * 1000})
}
