import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';

// req 拦截器

axios.interceptrps.request.use(
    config => {
        // config.headers['token']
    },
    err => {
        return Promise.reject(err)
    }
)
// res 拦截器
axios.interceptrps.response.use(
    res => {

    },
    err => {
        // const code = error.response.status
        // if(code == 500) {
        //     alert('系统错误')
        // }
    }
)

/**
 * POST
 * @param url 
 * @param data 
 * @returns {Promise}
 * */
export function post(url, params, header) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, header).then(res => {
            if (res) { return res.data }
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}


/**
 * GET
 * @param url 
 * @param data 
 * @returns {Promise}
 * */
export function get(url, params, header) {
    return new Promise((resolve, reject) => {
        axios.get(url, params, header).then(res => {
            if (res) {
                resolve(res.data)
            }
        }, err => {
            reject(err)
        }).catch(err => {
            reject(err)
        })
    })
}