import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas del componente <GifItem />', () => {

  const image = {
    id: '3412341234dsadf',
    title: 'Can You Smell The Rock GIF by WWE',
    url: 'https://media4.giphy.com/media/l0HUg6Ypas42ubkXu/giphy.gif?cid=0858df19h0fqpsnq8bllqgb7kq216cdk3hhg8dv7ah5vgkmb&rid=giphy.gif&ct=g'
  };

  test('debe hacer match con el snapshot', () => {
    const { container } = render( <GifItem { ...image } /> );
    expect( container ).toMatchSnapshot();
  });

  test('debe mostrar la imagen con la URL y el ALT indicado', () => {
    render( <GifItem { ...image } /> );
    const { src, alt } =  screen.getByRole('img');
    expect( src ).toBe( image.url );
    expect( alt ).toBe( image.title );
  });
  
  test('debe mostrar el titulo en el componente', () => {
    render( <GifItem { ...image } /> );
    expect( screen.getByText( image.title ) ).toBeTruthy();
  });

});