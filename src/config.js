import discord from "./lib/images/discord.png";
import frontend from "./lib/images/frontend.jpg";
import backend from "./lib/images/backend.jpg";
import freelance from "./lib/images/freelance.jpg";

export const API_URL = "http://localhost:9000";

export const SocialIcons = [
  {
    name: "linkedin",
    icon: "linkedin-in",
    href: "https://www.linkedin.com/in/petterblaasmo/",
  },
  {
    name: "github",
    icon: "github",
    href: "https://github.com/petterblaasmo",
  },
  {
    name: "instagram",
    icon: "instagram",
    href: "https://www.instagram.com/petterblaasmo/",
  },
  {
    name: "discord",
    icon: "discord",
    href: "https://discord.com/users/216260135771701248",
  },
];

export const Items = ["About", "Work", "Projects", "Skills", "Contact"];
export const AboutInfo = [
  {
    title: "Discord Developer",
    description: (
      <p>
        I develop discord bots for my projects and projects for smaller
        communities, I've been a part of the NFT discord scene recently.
      </p>
    ),
    img: discord,
  },
  {
    title: "Backend Developer",
    description: (
      <p>
        I enjoy creating the backend of different types of applications, it is
        one of my stronger sides when it comes to development.
      </p>
    ),

    img: backend,
  },
  {
    title: "Frontend Developer",
    description: (
      <p>
        I also enjoy creating the frontend from time to time, it isn't my
        favorite aspect of programming, but it's alright sometimes.
      </p>
    ),
    img: frontend,
  },
  {
    title: "Freelance Developer",
    description: (
      <p>
        Whist studying I also do some freelance work. This is mainly through{" "}
        <a href="https://upwork.com" target="_blank" rel="noreferrer">
          Upwork
        </a>{" "}
        working for startup businesses.
      </p>
    ),
    img: freelance,
  },
];
export const Work = [
  {
    name: "Blåsmo AS",
    link: "https://blaasmo.dev",
    category: "Freelance Developer",
    from: "Nov 2021",
    to: "Present",
    points: [
      "Develop various web applications for various of my clients",
      "Find new clients to grow connections for a passive income while studying",
    ],
  },
  {
    name: "Biztek AS",
    link: "https://biztek.no",
    category: "Consultant",
    from: "August 2021",
    to: "July 2022",
    points: [
      "Surround myself with professionals to get a taste of life as a professional",
      "Develop various websites for Biztek and their existing clients",
    ],
  },
];
