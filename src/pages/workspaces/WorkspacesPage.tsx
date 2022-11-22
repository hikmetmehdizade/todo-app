import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import WorkspaceItemCard from '../../components/cards/workspace-item/WorkspaceItemCard';
import workspaces from '../../store/workspaces';
import { Space, Input, Button } from 'antd';

class WorkspacePage extends React.Component<{}, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChangeValue.bind(this);
  }
  componentDidMount(): void {}

  createWorkspace() {
    workspaces.createWorkspace(this.state.value);
  }
  handleChangeValue(value: string) {
    this.setState((state) => ({ ...state, value }));
  }

  render(): React.ReactNode {
    return (
      <Space direction="vertical">
        <Space>
          <Input
            value={this.state.value}
            onChange={({ target }) => this.handleChangeValue(target.value)}
          />
          <Button onClick={this.createWorkspace} />
        </Space>
        <Space direction="vertical">
          {workspaces.workspaces.map((item) => (
            <WorkspaceItemCard key={item.getKey('list')} workspace={item} />
          ))}
        </Space>
      </Space>
    );
  }
}

export default WorkspacePage;
