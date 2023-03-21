import { render } from '@testing-library/react';
import App from '../../App';
import News from './News';

beforeEach(() => {
  jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('my function or component', () => {
  test('does the following', () => {
    // Magic happens here
  });
  it('renders without crashing', () => {
    render(<App />);
  });
});

function mockFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  throw new Error('Function not implemented.');
}
