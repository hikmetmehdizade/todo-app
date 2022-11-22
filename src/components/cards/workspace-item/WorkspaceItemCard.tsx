import { observer } from 'mobx-react-lite';
import { Workspace } from '../../../store/workspaces';
import { Space, Typography } from 'antd';

interface WorkspaceItemCard {
  workspace: Workspace;
}

const WorkspaceItemCard = ({ workspace }: WorkspaceItemCard) => {
  return (
    <Space direction="vertical">
      <Typography.Paragraph>{workspace.workspace.name}</Typography.Paragraph>
    </Space>
  );
};

export default observer(WorkspaceItemCard);
