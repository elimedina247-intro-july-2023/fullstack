import { EntryComponent } from './entry.component';

describe(EntryComponent.name, () => {
  describe('Valid Entries', () => {
    beforeEach(() =>
      cy.mount(EntryComponent, {
        autoSpyOutputs: true,
      })
    );

    it('Emits the output on entry when the submit button is clicked', () => {
      cy.get('input#description').type('More Beer');
      cy.get('button[type="submit"]').click();
      cy.get('@onItemAddedSpy').should('have.been.calledOnceWithExactly', {
        description: 'More Beer',
      });
      cy.get('[data-testid="error-alert"]').should('not.exist');
    });

    it('Emits the output on entry when the the enter button is hit', () => {
      cy.get('input#description').type('More Beer{enter}');

      cy.get('@onItemAddedSpy').should('have.been.calledOnceWithExactly', {
        description: 'More Beer',
      });
      cy.get('[data-testid="error-alert"]').should('not.exist');
    });
  });

  describe('Validation', () => {
    beforeEach(() =>
      cy.mount(EntryComponent, {
        autoSpyOutputs: true,
      })
    );
    it('Shows an error on empty entry', () => {
      cy.get('button[type="submit"]').click();
      cy.get('@onItemAddedSpy').should('not.be.called');
      cy.get('[data-testid="error-alert"]').should('exist');
    });
    it('Shows an error on empty entry', () => {
      cy.get('input#description').type('{enter}');

      cy.get('@onItemAddedSpy').should('not.be.called');
      cy.get('[data-testid="error-alert"]').should('exist');
    });
  });
});
