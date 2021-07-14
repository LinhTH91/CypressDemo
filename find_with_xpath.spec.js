require('cypress-xpath')

describe('Test Function Searching Youtube With XPATH', () => {
  it('Step 1: Redirect to https://www.youtube.com/', () => {
    cy.visit('https://www.youtube.com/')
  })
  
  it('Step 2: Click Search Icon', () => {
	cy.xpath('//input[@id="search"]').type('Hắc Ám Tây Du Ký - Truyện Tiên Hiệp {enter}');
  })
  
  it('Step 3: Verify searching result', () => {
    cy.xpath('//span[@id="video-title"][contains(text(), "Audio Hắc Ám Tây Du Ký")]').should('be.visible');
  })
  
  it('Step 4: Click to watch', () => {
    cy.xpath('//span[@id="video-title"][contains(text(), "Audio Hắc Ám Tây Du Ký")]').click();
  })
})