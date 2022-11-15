import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-medium-image-zoom', () => ({ children }) => <>{children}</>);
jest.mock('react-ga', () => ({ initialize: () => {}, pageview: () => {} }));
it('renders without crashing', () => {
  render(<App />);
});
