// NOTE: 단위 테스트를 위한 설정파일

module.exports = {
    // 파일 확장자를 지정하지 않은 경우 Jest 가 검색할 확장자 목록
    moduleFileExtensions: [
        'js',
        'vue',
    ],
    // 경로 별칭 매핑
    moduleNameMapper: {
        // <rootDir> 토큰을 통해 루트 경로를 참조할 수 있다
        '^~/(.*)$': '<rootDir>/src/$1'
    },
    // 제외 모듈 경로
    modulePathIgnorePatterns: [
        // '<rootDir>/node_modules',
        '<rootDir>/dist',
    ],
    // JS DOM 환경에 대한 URL 설정
    // testURL: 'http://localhost', // jest v28 부터 testURL 속성이 testEnvironmentOptions.url 로 변경
    testEnvironmentOptions: {
        url: "http://localhost/"
    },
    // 정규식과 일치하는 파일의 변환 모듈 지정
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest',
    },
}