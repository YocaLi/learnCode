Date.prototype.format = function(format) {
    let dict = {
        'y+': this.getFullYear(),
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'H+': this.getHours(),
        'h+': this.getHours() - 12,
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
    }
    for (let k in dict) {
        let reg = new RegExp(k, 'g')
        format = format.replace(reg, function(g0) {
            return ('000000' + dict[k]).slice(-g0.length)
        })
    }
    return format
}
Array.prototype.shuffle = function() {
    var input = this
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1))
        var itemAtIndex = input[randomIndex]
        input[randomIndex] = input[i]
        input[i] = itemAtIndex
    }
    return input
}

export default {
    formatTimeToMatch (currentServerTime, startTime) {
        let timestamp = Date.parse(startTime.replace(/-/g, '/'))
        let date = new Date(timestamp).format('MM月dd日')
        let time = startTime.substring(11)
        let todayTime = new Date(new Date(currentServerTime / 1).format('yyyy/MM/dd')).getTime()//今天12点的时间戳大小
        let chazhi = (new Date(timestamp).getTime() - todayTime) / (24 * 60 * 60 * 1000)
        if (chazhi >= 0 && chazhi < 1) {
            return time + '开始'
        } else if (chazhi >= 1 && chazhi < 2) {
            return '明天' + time
        } else if (chazhi >= 2 && chazhi < 3) {
            return '后天' + time
        } else {
            return date
        }
    },
}