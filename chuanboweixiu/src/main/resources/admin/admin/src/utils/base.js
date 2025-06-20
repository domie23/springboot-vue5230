const base = {
    get() {
        return {
            url : "http://localhost:8080/chuanboweixiu/",
            name: "chuanboweixiu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/chuanboweixiu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "船舶维保管理系统"
        } 
    }
}
export default base
