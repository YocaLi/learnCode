const moduleExports = {

    PAGE_ROOT_PATH: '../../',

    DOMAIN: 'dfsports_h5',

    VERSION: '1.1.1' //版本号  用来区分版本上线
}


if(process.env.NODE_ENV == 'development'){
    moduleExports.API_URL = {
        lunbo:'//msports.eastday.com/json/msponts/home_lunbo.json',
        matchdata:'//dfsports_h5.dftoutiao.com/dfsports_h5/matchba'
    }
}

export default moduleExports



