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

// test('should be able to search and display dog image results', async () => {
//   it('renders without crashing', () => {
//     render(<App />);
//   });
//   // render(<News />);

//   // render(<App />);

//   // //Simulate selecting an option and verifying its value
//   // const select = screen.getByRole('combobox');
//   // expect(
//   //   await screen.findByRole('option', { name: 'cattledog' })
//   // ).toBeInTheDocument();
//   // userEvent.selectOptions(select, 'cattledog');
//   // expect(select).toHaveValue('cattledog');

//   // //Initiate the search request
//   // const searchBtn = screen.getByRole('button', { name: 'Search' });
//   // expect(searchBtn).not.toBeDisabled();
//   // userEvent.click(searchBtn);

//   // //Loading state displays and gets removed once results are displayed
//   // await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

//   // //Verify image display and results count
//   // const dogImages = screen.getAllByRole('img');
//   // expect(dogImages).toHaveLength(2);
//   // expect(screen.getByText(/2 Results/i)).toBeInTheDocument();
//   // expect(dogImages[0]).toHaveAccessibleName('cattledog 1 of 2');
//   // expect(dogImages[1]).toHaveAccessibleName('cattledog 2 of 2');
// });
function mockFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> {
  throw new Error('Function not implemented.');
}
