import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  java,
  cpp,
  aws,
  junit,
  sql,
  akgec,
  schiller,
  amazon,
  lueurtech,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },,
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "C++",
    icon: cpp
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "junit",
    icon: junit,
  },
  {
    name: "sql",
    icon: sql
  }
];

const experiences = [
  {
    title: "DevOps Engineer Intern",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#ffffff",
    date: "January 2023 - June 2023",
    points: [
      "Automated data fetching from multiple sources and displaying ML model metrics on a dashboard using Java and AWS services (Lambda, S3, Step Functions, IAM roles, Amazon EventBridge, Athena, CloudWatch). Saved 20-25 minutes of daily manual work.",
      "Performed regular ML model retraining to ensure accuracy and prevent incorrect predictions.",
      "Get hands-on experience working on various aspects of the software development life cycle. Learn how to collaborate with team members, tackle complex situations and develop practical solutions.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "LueurTech Software Solutions",
    icon: lueurtech,
    iconBg: "#E6DEDD",
    date: "March 2022 - April 2022",
    points: [
      "Fulfilled the role of a front-end developer during the internship, with a primary objective of creating an appealing and responsive website.",
      "Demonstrated proficiency in HTML, CSS, and JavaScript to implement interactive and visually impressive web pages.",
      "Ensured cross-device compatibility by employing responsive design techniques, enhancing user experience.",
    ],
  }
];
const educations = [
  {
    title: "Bachelor's of Technology",
    school: "Ajay Kumar Garg Engineering College",
    icon: akgec,
    iconBg: "#ffffff",
    date: "August 2019 - July 2023",
    grade: "8.05",
  },
  {
    title: "Senior Secondary (XII)",
    school: "Schiller Sr Sec School",
    icon: schiller,
    iconBg: "#ffffff",
    date: "April 2018 - March 2019",
    grade: "92%",
  },
  {
    title: "Secondary (X)",
    school: "Schiller Sr Sec School",
    icon: schiller,
    iconBg: "#ffffff",
    date: "April 2016 - March 2017",
    grade: "7.80",
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, educations, testimonials, projects };
