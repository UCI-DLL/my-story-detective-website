export type TeamMember = {
  image: string;
  name: string;
  projectRole: string;
  title: string;
  bio: string;
  website?: string;
  linkedin?: string;
  group?: "undergraduate";
};

export const team: readonly TeamMember[] = [
  { image: "/team/mark-warschauer-portrait.jpg", name: "Mark Warschauer", projectRole: "Principal Investigator", title: "Distinguished Professor of Education, UC Irvine", bio: "Former K–12 bilingual teacher and one of the nation’s leading experts in AI in education. Director of the Digital Learning Lab.", website: "https://markwarschauer.com/", linkedin: "https://www.linkedin.com/in/markwarschauer/" },
  { image: "/team/young-suk-kim-portrait.jpg", name: "Young-Suk Kim", projectRole: "Co-Principal Investigator", title: "Professor of Education, UC Irvine", bio: "One of the top U.S. researchers in early reading development. Her work directly informs the platform’s literacy curriculum.", linkedin: "https://www.linkedin.com/in/young-suk-grace-kim-57313017/" },
  { image: "/team/tamara-tate.jpg", name: "Tamara Tate", projectRole: "Co-Principal Investigator", title: "Project Scientist, UC Irvine", bio: "Associate Director of the Digital Learning Lab whose research focuses on technology-supported learning, school-based digital literacy interventions, and digital writing.", website: "https://www.tptate.com/", linkedin: "https://www.linkedin.com/in/tptate/" },
  { image: "/team/ying-xu.jpg", name: "Ying Xu", projectRole: "Project Consultant", title: "Assistant Professor of Education, Harvard University", bio: "A leading expert on the use of AI to promote young children’s learning and a key advisor on the platform’s dialogic reading and decoding supports.", website: "https://ying-xu.com/", linkedin: "https://www.linkedin.com/in/ying-x/" },
  { image: "/team/viri-murillo-portrait.jpg", name: "Viri Murillo", projectRole: "Graduate Student Researcher", title: "PhD Student in Education, UC Irvine", bio: "Former elementary dual-immersion teacher with deep expertise in language and literacy development for multilingual learners.", linkedin: "https://www.linkedin.com/in/virimurillo/" },
  { image: "/team/julian-levine-portrait.jpg", name: "Julian Levine", projectRole: "Graduate Student Researcher", title: "PhD Candidate in Education, UC Irvine", bio: "A language and literacy researcher investigating how AI-powered conversational agents and interactive media can support children’s learning and vocabulary development.", website: "https://www.julian-levine.com/" },
  { image: "/team/kunlei-he.jpg", name: "Kunlei He", projectRole: "Graduate Student Researcher", title: "PhD Candidate in Education, UC Irvine", bio: "Researcher developing and evaluating conversational AI to support young children’s learning, with a particular interest in how parents and AI can work together to enhance children’s early learning and development." },
  { image: "/team/yiqi-xiao.jpg", name: "Yiqi Xiao", projectRole: "Graduate Student Researcher", title: "PhD Student in Informatics, UC Irvine", bio: "Researcher designing, developing, and evaluating AI companions that support children’s social connection and participation in digital play." },
  { image: "/team/ivan-gonzalez.jpg", name: "Ivan Gonzalez", group: "undergraduate", projectRole: "Undergraduate Research Assistant", title: "Undergraduate Student in Informatics, UC Irvine", bio: "Interested in how AI products benefit their users and what drives their growth as these technologies gain popularity." },
  { image: "/team/sylvia-li.jpg", name: "Sylvia Li", group: "undergraduate", projectRole: "Undergraduate Research Assistant", title: "Undergraduate Student in Psychological Science, UC Irvine", bio: "Interested in child development—especially language and learning—and in developing educational tools for children and educators." },
  { image: "/team/sharon-chang.jpg", name: "Sharon Chang", group: "undergraduate", projectRole: "Undergraduate Research Assistant", title: "Undergraduate Student in Education Sciences and Sociology, UC Irvine", bio: "Interested in curriculum development, learning design, and educational technology, especially how AI-powered tools can be thoughtfully incorporated into classrooms to support young learners’ engagement and accessibility." },
  { image: "/team/samantha-tang.jpg", name: "Samantha Tang", group: "undergraduate", projectRole: "Undergraduate Research Assistant", title: "Undergraduate Student in Psychology, UC Irvine", bio: "Interested in children’s psychology and adolescent development." },
  { image: "/team/zoe-schmitt.jpg", name: "Zoe Schmitt", group: "undergraduate", projectRole: "Undergraduate Research Assistant", title: "Undergraduate Student in Social Policy & Public Service and Education Sciences, UC Irvine", bio: "Interested in educational policy and in using research to inform policies and initiatives that promote educational equity and better support students." },
  { image: "/team/nawal-diab.jpg", name: "Nawal Diab", group: "undergraduate", projectRole: "Undergraduate Research Assistant", title: "Undergraduate Student in Public Health Sciences, UC Irvine", bio: "Psychology minor interested in child development and how AI can improve learning experiences for children, especially those with different learning needs." },
];
