import { render, screen } from '@testing-library/react';
import App from '../index';

describe('App Component', () => {
  test('renders App component', () => {
    render(
      <App>
        <div>App content</div>
      </App>,
    );

    expect(screen.getByText('App content')).toBeInTheDocument();
  });

  test('renders App with custom className', () => {
    const { container } = render(
      <App className="custom-app">
        <div>App content</div>
      </App>,
    );

    const appElement = container.firstChild;
    expect(appElement).toHaveClass('custom-app');
  });

  test('renders App with custom style', () => {
    const customStyle = { backgroundColor: 'red', color: 'white' };
    const { container } = render(
      <App style={customStyle}>
        <div>App content</div>
      </App>,
    );

    const appElement = container.firstChild;
    expect(appElement).toHaveStyle('background-color: rgb(255, 0, 0)');
    expect(appElement).toHaveStyle('color: rgb(255, 255, 255)');
  });
});
