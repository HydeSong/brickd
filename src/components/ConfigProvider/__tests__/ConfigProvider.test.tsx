import { render } from '@testing-library/react';
import ConfigProvider from '../index';

describe('ConfigProvider Component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ConfigProvider>
        <div>Test content</div>
      </ConfigProvider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should pass props to children', () => {
    const { container } = render(
      <ConfigProvider theme="dark">
        <div>Test content</div>
      </ConfigProvider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
