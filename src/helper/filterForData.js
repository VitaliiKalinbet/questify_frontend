const innit = {
  today: 'today',
  tomorrow: 'tomrrow',
  allTheRest: 'allTheRest'
};

const getDay = date => {
  //get date with task and today
  const today = new Date();
  const taskDayUnix = new Date(date);
  const taskDay = taskDayUnix.getDate();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const taskMonth = taskDayUnix.getMonth();
  if (taskMonth < currentMonth || taskMonth == currentMonth && taskDay <= currentDate) return innit.today;
  if (taskDay + 1 === currentDate && taskMonth === currentMonth) return innit.tomorrow;
  if (taskDay + 1 > currentDate && taskMonth > currentMonth) return innit.allTheRest;
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

  return { user: user, today: todayArr, tomorrow: tomorrowArr, allTheRest: allTheRestArr, done };
};
