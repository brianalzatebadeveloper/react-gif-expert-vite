import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

  test('debe cambiar el valor de la caja de texto', () => {
    render( <AddCategory  onAddCategory={ () => {} }/> );
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'The Rock'}} );
    expect( input.value ).toBe( 'The Rock' );
  });

});