import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('Renderizando 10 componentes Person', () => {

  act(() => {
    ReactDOM.render(<App />, container);
  });

  var persons = container.querySelectorAll('div.Person');

  expect(persons.length).toEqual(10);

});
