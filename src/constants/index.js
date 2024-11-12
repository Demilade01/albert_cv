import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  git,
  rstudio,
  netframework,
  mvc,
  csharp,
  cplus,
  angularjs,
  restapi,
  nss,
  parktown,
  turningpoint,
  authentic,
  mailing,
  booking,
  payment
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
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programming Tutor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
     name: "TypeScript",
     icon: typescript,
   },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "rstudio",
    icon: rstudio,
  },
  {
    name: "netframework",
    icon: netframework,
  },
  {
    name: "mvc",
    icon: mvc,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "cplus",
    icon: cplus,
  },
  {
    name: "angularjs",
    icon: angularjs,
  },
  {
    name: "restapi",
    icon: restapi,
  },
];

const experiences = [
  {
    title: "BASKETBALL COACH",
    company_name: "PARKTOWN BOYS HIGH SCHOOL",
    location: "Johannesburg, South Africa",
    icon: parktown,
    iconBg: "#383E56",
    date: "Jan 2019-Current",
    points: [
      "Recruited by my alma mater to assist in coaching the senior high school basketball team while pursuing my degree at the University of Pretoria.",
      "Developed strong skills in creativity, discipline, project management, and time management while balancing academic commitments.",
      "Guided young athletes to excel in a highly competitive school league, finding fulfillment in supporting their growth.",
    ],
  },
  {
    title: "FULL-STACK DEVELOPER",
    company_name: " NSS Fasteners",
    location: "Germiston, South Africa",
    icon: nss,
    iconBg: "#383E56",
    date: "July 2024- Current",
    points: [
      "Contributed to database and warehouse optimizations for Africa's largest stockist of bolts and fasteners, processing 75 tons of steel daily.",
      "Structured database tables to enhance segmentation of business functions, supporting efficient replenishment schedules and driving sales growth.",
    ],
  },
  {
    title: "PROGRAMING TUTOR TURNING POINT TUTORS",
    company_name: "TURNING POINT TUTORS",
    location: "Hatfield, Pretoria, SOUTH AFRICA",
    icon: turningpoint,
    iconBg: "#E6DEDD",
    date: "Feb-2021- Nov-2023",
    points: [
      "Tutored first- and second-year students on programming fundamentals through advanced concepts, emphasizing attention to detail.",
      "Created mock tests and summary materials for the C# language, helping students build practical skills and succeed academically.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Jared’s strategic approach and attention to tech trends have been key in elevating our marketing efforts. His insights consistently bring value to our team.",
    designation: "CEO",
    name: "Margaret O’ Connor",
    company: "Disruptive tech investment",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGDJaG8nCV65w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1679675207927?e=1736985600&v=beta&t=yX8H7JyBTD_mkDM3zOLoKp6gbgZIcfl4sNT3MjfcpEU",
  },
  {
    testimonial:
      "Jared’s dedication to coaching and his mentorship have made a real difference for our team, inspiring young athletes to excel both on and off the court.",
    name: "Doran Hull",
    designation: "COO",
    company: "Basketball MIC Parktown Boy’s",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Jared’s technical expertise streamlined our operations, improving efficiency and boosting sales. His precision and problem-solving skills are exceptional.",
    name: "Nikita Van Heerdan",
    designation: "CTO",
    company: "NSS Fasteners",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Payfast Payment gateway",
    description:
      "Integrated the Payfast payment gateway to enable secure, seamless online transactions, supporting various payment methods including credit card, EFT, and mobile payments. The integration ensures reliable payment processing and enhances user convenience and security.",
    tags: [
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Dotnet Framework (ASP.NET)",
        color: "blue-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/BertoSalva",
  },
  {
    name: "Booking and Scheduling System",
    description:
      "A comprehensive booking and scheduling platform with a mobile app built using Ionic and a main system developed with Angular and .NET for web APIs. The system includes payment gateways, an emailing system, chatbot integration, basic machine learning, SMS notifications, full calendar functionality, audit logging, deployment, and cloud backup on Google Cloud Bucket.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "Ionic",
        color: "pink-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "yellow-text-gradient",
      },
    ],
      image: booking,
      source_code_link: "https://github.com/BertoSalva",
  },
  {
    name: "Authentication & ASP.NET USER",
    description:
      "Built a secure ASP.NET Core authentication system with role-based access (Parent, Learner, Psychologist, Admin) and hashed SQL-stored passwords. The system enables dynamic role assignment and ensures secure, responsive handling for restricted access.",
    tags: [
      {
        name: "Angular",
        color: "red-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: authentic, // replace with the actual image variable or path
    source_code_link: "https://github.com/BertoSalva/", // replace with the actual link
  },
];

export { services, technologies, experiences, testimonials, projects };
