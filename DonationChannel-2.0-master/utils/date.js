const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTodayTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-') + ' ' + '00:00';
}

const formatMonthTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return [year, month].map(formatNumber).join('-') + '-01 00:00';
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const today = () => {
  return formatTodayTime(new Date());
}

const month = () => {
  return formatMonthTime(new Date());  
}

module.exports = {
  formatTime: formatTime,
  today: today,
  month: month
}
