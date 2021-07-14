describe('Test Function Searching Youtube With Attribute', () => {
  it('Step 1: Redirect to https://www.youtube.com/', () => {
    cy.visit('https://www.youtube.com/')
  })
  
  it('Step 2: Click Search Icon', () => {
	cy.get('#search').type('Hắc Ám Tây Du Ký - Truyện Tiên Hiệp {enter}');
  })
  
  it('Step 3: Verify searching result', () => {
    cy.contains('#video-title', 'Audio Hắc Ám Tây Du Ký')
  })
  
  it('Step 4: Click to watch', () => {
    cy.contains('#video-title', 'Audio Hắc Ám Tây Du Ký').click();
  })
})