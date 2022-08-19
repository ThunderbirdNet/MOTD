import { render, screen } from '@testing-library/react';
import Abyss from './Abyss';

test('renders learn react link', () => {
  render(<Abyss />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
