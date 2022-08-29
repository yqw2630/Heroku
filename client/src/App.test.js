import { render, screen } from '@testing-library/react';
import App from './App';
import MostSearched from './components/Home/MostSearched';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders loading placeholder', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});

test ('renders images correctly', () => {
  render(<MostSearched/>);
  const imagesList = screen.getAllByTestId('home-images');
  expect (imagesList).toBeInTheDocument;
})
