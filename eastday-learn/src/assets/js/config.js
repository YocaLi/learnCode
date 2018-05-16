import originJsonp from 'jsonp'
export default function jsonp(url, data, option){
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // 判断url链接有没有带参数  带了用&没带用?
    return new Promise((resolve, reject) => {
        originJsonp(url, option, (err,data) => {
            if(!err){
                resolve(data)
            }else{
                reject(err)
            }
        })  
    })
}

// 处理data的数据
export function param(data){
    let str = ''
    for(let key in data){
        let value = !data[key] ? '' : data[key]
        console.log(!data[key])
        str += `${key}=${encodeURIComponent(value)}` 
    }
    return str ? str : ''
}