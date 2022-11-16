import { observer } from 'mobx-react-lite';
import { Workspace } from '../../../store/workspaces';

interface WorkspaceItemCard {
  workspace: Workspace;
}

const WorkspaceItemCard = observer(({ workspace }: WorkspaceItemCard) => {
  return (
    <div>
      <h5>{workspace.workspace.name}</h5>
    </div>
  );
});

export default WorkspaceItemCard;
