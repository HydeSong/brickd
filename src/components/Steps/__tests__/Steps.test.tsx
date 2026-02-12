import { render, screen } from '@testing-library/react';
import Steps from '../index';

const { Step } = Steps;

describe('Steps Component', () => {
  it('should render correctly with steps', () => {
    render(
      <Steps current={1}>
        <Step title="Step 1" description="Description 1" />
        <Step title="Step 2" description="Description 2" />
        <Step title="Step 3" description="Description 3" />
      </Steps>,
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Description 3')).toBeInTheDocument();
  });

  it('should support basic rendering', () => {
    const { container } = render(
      <Steps current={1}>
        <Step title="Step 1" />
        <Step title="Step 2" />
      </Steps>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should support different directions', () => {
    const { container } = render(
      <Steps current={1} direction="vertical">
        <Step title="Step 1" />
        <Step title="Step 2" />
      </Steps>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
