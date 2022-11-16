import { observer } from 'mobx-react-lite';
import { useLayoutEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from '../../common';
import WorkspaceItemCard from '../../components/cards/workspace-item/WorkspaceItemCard';
import workspaces from '../../store/workspaces';

interface CreateWorkspaceValue {
  name: string;
}

const WorkspacePage = observer(() => {
  useLayoutEffect(() => {
    workspaces.getAllWorkspaces();
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<CreateWorkspaceValue> = (data) => {
    workspaces.createWorkspace(data.name);
  };

  return (
    <div>
      {workspaces.workspaces.map((item) => (
        <WorkspaceItemCard workspace={item} />
      ))}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input {...register('name')} />
        <Button>Create workspace</Button>
      </form>
    </div>
  );
});

export default WorkspacePage;
