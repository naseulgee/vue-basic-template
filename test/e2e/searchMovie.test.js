/** NOTE: 영화 검색 시나리오 테스트
 * 
 * [시나리오]
 * 상속 관련 페이지로 접근한다
 * 영화 제목을 'frozen' 으로, 표시 개수를 20개로 입력한다
 * 'Search' 버튼을 클릭해 영화 목록을 검색한다
 * 영화 목록 20개가 잘 출력 된다
 * 영화 목록에서 'Frozen II' 영화 아이템을 클릭한다
 * 영화 상세 정보 페이지로 이동한다
 * 상세 정보 페이지에서 정보를 확인한다
*/

describe('영화 검색', { testIsolation: false }, () => {
    it('상속 관련 페이지로 접근합니다', () => {
        // 페이지 방문
        cy.visit('/#/sample/inherite')

        // 방문 후 활성화된 네비게이션이 상속 관련 페이지가 맞는지 확인
        cy.get('.sample-container nav .nav-link.active')
            .contains('Inherite')
    })

    it('영화를 검색합니다', () => {
        // 영화 제목을 'frozen' 으로, 표시 개수를 20개로 입력한다
        cy.get('form input[type=\'text\']')
            .clear()
            .type('frozen')
        cy.get('form select[aria-label=\'maxCnt\']')
            .select('20')

        // 'Search' 버튼을 클릭해 영화 목록을 검색한다
        cy.get('form button.btn')
            .contains('Search')
            .trigger('click')

        // 영화 목록 20개가 잘 출력 된다
        cy.wait(2000)
        cy.get('form')
            .parent()
            .next()
            .find('li:not(.message)')
            .should('have.length', 20)
    })

    it('겨울왕국2 영화 아이템을 선택합니다', () => {
        // 영화 목록에서 'Frozen II' 영화 아이템을 클릭한다
        cy.get('li')
            .contains('Frozen II')
            .click()
    })

    it('영화의 상세 정보를 확인합니다', () => {
        // 영화 상세 정보 페이지로 이동한다
        cy.url()
            .should('include', '/dynamic-path/tt4520988')

        // 상세 정보 페이지에서 정보를 확인한다
        cy.wait(1000)
        cy.get('h1')
            .contains('Movie info')
    })
})