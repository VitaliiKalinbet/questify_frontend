const innit = {
  today: 'today',
  tomorrow: 'tomrrow',
  allTheRest: 'allTheRest'
};

export const getDay = date => {
  // get date with task and today
  const DAY = 24 * 60 * 59 * 1000;
  const today = new Date();
  const taskDayUnix = new Date(date);
  const subtraction = taskDayUnix - today;
  if (subtraction < DAY) return innit.today;
  if (subtraction > DAY && subtraction < DAY * 2) return innit.tomorrow;
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

export const filter = data => {
  const { tasks, user } = data;
  const done = tasks.filter(task => task.done);
  const doneFalse = tasks.filter(task => !task.done);
  const todayArr = today(doneFalse);
  const tomorrowArr = tomorrow(doneFalse);
  const allTheRestArr = allTheRest(doneFalse);

  return { user, today: todayArr, tomorrow: tomorrowArr, allTheRest: allTheRestArr, done };
};
