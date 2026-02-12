import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Tabs from '../index';

const { Tab } = Tabs;

describe('Tabs Component', () => {
  it('should render correctly with tabs', () => {
    render(
      <Tabs defaultActiveKey="1">
        <Tab label="Tab 1" key="1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="2">
          Content 2
        </Tab>
        <Tab label="Tab 3" key="3">
          Content 3
        </Tab>
      </Tabs>,
    );

    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('should handle tab change', async () => {
    const onChange = jest.fn();
    render(
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <Tab label="Tab 1" key="1">
          Content 1
        </Tab>
        <Tab label="Tab 2" key="2">
          Content 2
        </Tab>
      </Tabs>,
    );

    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);

    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
