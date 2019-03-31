const innit = {
  today: 'today',
  tomorrow: 'tomrrow',
  allTheRest: 'allTheRest'
};
const getDay = date => {
  const today = new Date();
  const taskDayUnix = new Date(date);
  const taskDay = taskDayUnix.getDate();
  const currentDate = today.getDate();
  if (taskDay <= currentDate) return innit.today;
  if (taskDay + 1 === currentDate) return innit.tomorrow;
  if (taskDay + 1 > currentDate) return innit.allTheRest;
  return innit.allTheRest;
};

export const today = tasks => {
  return tasks.filter(task => getDay(task.dueDate) === innit.today);
};

export const tomorrow = tasks => {
  return tasks.filter(task => getDay(task.dueDate) === innit.tomorrow);
};

export const allTheRest = tasks => {
  return tasks.filter(task => getDay(task.dueDate) === innit.allTheRest);
};

export default { tomorrow };
