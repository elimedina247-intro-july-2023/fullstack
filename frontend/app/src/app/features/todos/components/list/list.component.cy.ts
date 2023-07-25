// Behavior Driven Development - Dan North

import { TodoListItemModel } from '../../models';
import { ListComponent } from './list.component';

describe(ListComponent.name, () => {
  describe('Utopian State', () => {
    let utopianList: TodoListItemModel[] = [
      {
        id: 'a',
        description: 'Buy More Beer',
        status: 'Later',
      },
      {
        id: 'b',
        description: 'Mow the Lawn',
        status: 'Now',
      },
      {
        id: 'c',
        description: 'Pet The Cat',
        status: 'Waiting',
      },
      { id: 'd', description: 'Fix Lighting', status: 'Completed' },
    ];
    beforeEach(() =>
      cy.mount(ListComponent, {
        componentProperties: {
          list: utopianList,
        },
      })
    );

    it('Has Four Items', () => {
      cy.get('li').should('have.length', 4);
    });

    it('The First Item is For Later', () => {
      cy.get('li')
        .first()
        .find('button')
        .should('contain.text', utopianList[0].status);
    });
    it('The First Item is For Later', () => {
      cy.get('li')
        .eq(1)
        .find('button')
        .should('contain.text', utopianList[1].status);
    });
    it('Should not display an alert with a message', () => {
      cy.get('[data-testid="empty-list-alert"]').should('not.exist');
    });
  });
  describe('Empty List', () => {
    beforeEach(() =>
      cy.mount(ListComponent, {
        componentProperties: {
          list: [],
        },
      })
    );

    it('Should not display the list', () => {
      cy.get('[data-testid="shopping-list"]').should('not.exist');
    });

    it('Should display an alert with a message', () => {
      cy.get('[data-testid="empty-list-alert"]')
        .should('exist')
        .should('have.text', 'No Items in Your List');
    });
  });
  describe('Interactions', () => {
    describe('Cycling the Status', () => {
      it('Emits the output on click', () => {
        let items: TodoListItemModel[] = [
          { id: '1', description: 'Tacos', status: 'Later' },
          { id: '2', description: 'Wash Keyboard', status: 'Now' },
        ];
        cy.mount(ListComponent, {
          componentProperties: {
            list: items,
          },
          autoSpyOutputs: true,
        });

        cy.get('li').first().find('button').click();
        cy.get('@onStatusCycledSpy').should(
          'have.been.calledOnceWith',
          items[0]
        );
      });
    });
  });
});
