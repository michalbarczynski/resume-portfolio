import backend from '../images/backend.png';
import frontend from '../images/frontend.png';
import learning from '../images/learning.png';
import tools from '../images/tools.png';

export const SKILLS = [
  {
    title: "Frontend",
    icon: frontend,
    skills: [
      { skill: "HTML5", level: "advanced", value: "75%" },
      { skill: "CSS3/SASS/SCSS", level: "expert", value: "100%" },
      { skill: "Tailwind/Bootstrap", level: "advanced", value: "75%" },
      { skill: "JavaScript/TypeScript", level: "regular", value: "50%" },
      { skill: "React.js/Redux", level: "junior/regular", value: "37.5%" },
      { skill: "OOP with REST API and AJAX", level: "junior/regular", value: "37.5%" },
    ],
  },
  {
    title: "Database and Backend",
    icon: backend,
    skills: [
      { skill: "SQL", level: "junior", value: "25%" },
      { skill: "Node.js", level: "junior", value: "25%" },
    ],
  },
  {
    title: "Tools",
    icon: tools,
    skills: [
      { skill: "Git", level: "advanced", value: "75%" },
      { skill: "Jira", level: "regular", value: "50%" },
      { skill: "Confluence", level: "regular", value: "50%" },
      { skill: "Dev Tools", level: "regular", value: "50%" },
      { skill: "Webpack", level: "regular", value: "50%" },
    ],
  },
  {
    title: "Soft skills",
    icon: learning,
    skills: [
      { skill: "Analytical and critical thinking" },
      { skill: "Ability to work under pressure" },
      { skill: "Fast learning" },
      { skill: "Communicativeness, easy adaptation to work environment, and work in team" },
      { skill: "Ability to organize own work and prioritize tasks" },
      { skill: "Creativity, data analysis with problem-solving skills" },
      { skill: "Multitasking skills" },
      { skill: "Attention to details" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Junior Frontend Developer",
    date: "April 2023 - December 2023",
    responsibilities: [
      "Software development of cloud-based promotion management product",
      "Fixing bugs created at successive stages of application development",
      "Code implementation based on the SAP UI5 framework",
      "Managing small team workflow as Agile Leader",
    ],
  },
  {
    title: "Junior Frontend Shopify Developer",
    date: "December 2022 - March 2023",
    responsibilities: [
      "Resolving layout and responsiveness bugs",
      "Transferring stores to the Shopify platform",
      "Development of e-commerce store software components",
      "Designing and proposing UI/UX styles to the project manager",
    ],
  },
  {
    title: "QA Test Associate",
    date: "March 2022 - November 2022",
    responsibilities: [
      "Testing video game-related software",
      "Reporting bugs via Jira",
      "Performing tasks from developers based on DevTrack tool",
      "Verifying developers' work, by checking whether the bugs have been fixed correctly",
    ],
  },
  {
    title: "Shift Manager",
    date: "August 2021 - January 2022",
    responsibilities: [
      "Coordinating the deliveries of products",
      "Managing a small group of employees - order pickers and drivers",
      "Administration of dark store documentation",
      "Daily reporting of sales results to coordinators",
    ],
  },
  {
    title: "Sales Administration Assistant",
    date: "August 2020 - July 2021",
    responsibilities: [
      "Creating Credit Notes for European clients",
      "After-sales documents management",
      "Analysis of customer complaints",
      "Cooperating with other departments and solving their current requests",
    ],
  },
];
