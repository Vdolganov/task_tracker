import { variables } from 'utils/variables';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non tincidunt nibh. Aliquam quis ante libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ut nisi ac massa consectetur commodo a eget lorem. Integer nec dolor elit. Vivamus ut quam eget mauris pulvinar venenatis ac quis est. Sed quis semper tellus. Aenean arcu erat, interdum id nisi hendrerit, ornare semper nibh.';

const randomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

export const dataGenerator = () => {
  const data = [];
  const parentsNames = variables.statuses;
  for (const parent in parentsNames) {
    data[parent] = {
      name: parentsNames[parent].name,
      id: parentsNames[parent].id,
      children: [],
    };
    for (let child = 0; child < 1; child++) {
      data[parent].children[child] = {
        name: `task${parent}${child}`, id: parent + child, taskDescription: `${loremIpsum} ${parent}${child}`, date: randomDate(new Date(2012, 0, 1), new Date()),
      };
    }
  }
  return data;
};

export const moveTask = (items, draggableItemId, mainParentId) => {
  let currentItem = null;

  let newItems = items.map((parent) => ({
    ...parent,
    children: parent.children.filter((child) => {
      if (child.id === draggableItemId) {
        currentItem = child;
      } else {
        return child;
      }
    }),
  }));

  newItems = newItems.map((parent) => {
    if (parent.id === mainParentId) {
      return { ...parent, children: [...parent.children, currentItem] };
    }
    return parent;
  });
  return newItems;
};

export const addTask = (items, newTask) => items.map((el) => {
  if (Number(el.id)
      === Number(newTask.status)) return { ...el, children: [...el.children, newTask] };
  return el;
});

export const deleteTask = (items, task) => items.map((el) => {
  if ((Number(el.id))
      === Number(task.status)) {
    return {
      ...el,
      children: el.children.filter((t) => t.id !== task.id),
    };
  }
  return el;
});


export default {
  moveTask, dataGenerator, addTask,
};
