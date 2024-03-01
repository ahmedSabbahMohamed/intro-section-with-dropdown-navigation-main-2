import toDo from "../assets/images/icon-todo.svg"
import calender from "../assets/images/icon-calendar.svg"
import reminder from "../assets/images/icon-reminders.svg"
import plan from "../assets/images/icon-planning.svg"
import audio from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import marker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

const features = [
  { id: 1, src: toDo, text: "Todo List" },
  { id: 2, src: calender, text: "Calendar" },
  { id: 3, src: reminder, text: "Reminders" },
  { id: 4, src: plan, text: "Planning" },
];

const company = [
  { id: 1, text: "History" },
  { id: 2, text: "Our Team" },
  { id: 3, text: "Blog" },
];

const images = [
  { id: 1, src: audio },
  { id: 1, src: databiz },
  { id: 1, src: marker },
  { id: 1, src: meet },
];

export { features, company, images }
