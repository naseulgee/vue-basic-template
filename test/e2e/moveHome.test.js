/** NOTE: 메인 페이지 이동 테스트
 * 
 * [시나리오]
 * Sample 페이지로 접근한다
 * Home 네비게이션 버튼을 클릭한다
 * 메인 페이지에서 내용을 확인한다
*/

describe('메인 페이지 이동', { testIsolation: false }, () => {
    const { baseUrl } = Cypress.config()

    it('Sample 페이지로 접근합니다', () => {
        // Sample 페이지로 접근한다
        cy.visit('/#/Sample')

        // 방문 후 활성화된 네비게이션이 Sample 페이지가 맞는지 확인
        cy.get('nav .nav-link.active')
            .contains('Sample')
    })

    it('Home 네비게이션으로 메인 페이지로 접근합니다', () => {
        // Home 네비게이션 버튼을 클릭한다
        cy.get('nav .nav-link')
            .contains('Home')
            .click()

        // 방문 url을 확인한다
        cy.url()
            .should('eq', baseUrl + '/#/')

        // 방문 후 활성화된 네비게이션이 메인 페이지가 맞는지 확인
        cy.get('nav .nav-link.active')
            .contains('Home')

        // 메인 페이지에서 내용을 확인한다
        cy.wait(1000)
        cy.get('h1')
            .contains('HOME')
    })
})