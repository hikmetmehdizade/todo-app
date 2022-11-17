import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect, useLayoutEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Input } from '../../common';
import WorkspaceItemCard from '../../components/cards/workspace-item/WorkspaceItemCard';
import workspaces from '../../store/workspaces';

interface CreateWorkspaceValue {
  name: string;
}

const WorkspacePage = () => {
  useEffect(() => {
    workspaces.getAllWorkspaces();
  }, []);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<CreateWorkspaceValue> = (data) => {
    workspaces.createWorkspace(data.name);
    reset();
  };

  return (
    <div>
      {workspaces.workspaces.map((item) => (
        <WorkspaceItemCard key={item.getKey()} workspace={toJS(item)} />
      ))}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Input {...register('name')} />
        <Button>Create workspace</Button>
      </form>
    </div>
  );
};

export default observer(WorkspacePage);
