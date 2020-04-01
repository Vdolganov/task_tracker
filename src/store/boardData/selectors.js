export const currentTask = ({ tasks }, id) => {
  let targetTask = null;
  tasks.forEach((parent) => parent.children.forEach((children) => {
    if (Number(children.id) === Number(id)) {
      targetTask = children;
    }
  }));
  return targetTask;
};
