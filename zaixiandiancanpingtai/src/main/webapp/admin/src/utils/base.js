const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixiandiancanpingtai/",
            name: "zaixiandiancanpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixiandiancanpingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线点餐（堂食）平台"
        } 
    }
}
export default base
