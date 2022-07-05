export default function getDate() {
  const date =  Date().split(' ');
  const dateObj = `${date[2]} / ${date[1]}`;
  return dateObj;
};
