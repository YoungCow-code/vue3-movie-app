// 개발자 정보, 사용자 정보 관련

export default{
    namespaced: true,
    state: () => {
        return {
            name: 'Frank',
            email: 'youngcowcode@gmail.com',
            phone: '+1-780-519-2870',
            image: require('../asset/Profile_git.jpg'),
            blog: 'https://www.naver.com'
        }
    }
}
