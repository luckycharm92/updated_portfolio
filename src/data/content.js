/*
 * ALL the text on the site lives in this file.
 *
 * How to edit:
 * - Replace anything in [square brackets] with your own words.
 * - In `profile.headline`, wrap one word in *asterisks* to give it the
 *   yellow highlight, e.g. "I make software that's *useful*".
 * - Images and files (photo, project images) go in the /public folder.
 *   Reference them by filename only, e.g. photo: 'me.jpg'. Use '' for none.
 * - Links that are '' (empty) are hidden automatically.
 * - Add or remove items in any array; the pages adjust on their own.
 */

export const profile = {
  name: 'Nalani Swan',
  initials: 'NS',
  greeting: "hey, I'm Nalani!",
  headline: "I like using Machine Learning and Data for *Social Good*, specifically in my region, the *Caribbean.*",
  intro: 'Finalist Computer Science Undergraduate at the University of Leeds.',
  photo: 'me/NalaniSwanHeadshot.png', // e.g. 'me.jpg' in /public
 
  email: 'swan.nalani@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/luckycharm92' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nalani-swan/' },
  ],
};

export const about = {
  story:
    'I am a developer originally from the Cayman Islands, interested in using Artificial Intelligence to develop digital technologies that will have a positive, measurable impact on people’s lives. I became hooked with all things technology, when I built my first gaming PC, and I haven’t looked back since.',
  funFact: 'I have competed for the Cayman Islands National Football Team in 5 different countries',
  tiles: [
    { title: 'Daily drivers', text: 'Python, C, React' },
    { title: 'Currently learning', text: 'how to Row in a Single Sculling Boat' },
    { title: 'On repeat', text: 'Do You Believe in Magic - The Lovin’ Spoonful' },
  ],
};

export const experience = [
  {
    role: 'Technology Summer Analyst',
    org: 'Morgan Stanley',
    logo: 'logos/morganStanley.png', // e.g. 'logos/company.png'
    location: 'London, UK',
    dates: 'June 2026 - August 2026',
    points: [
      'Engineered a scalable Python data pipeline to ingest, sessionise, and standardise 1,000+ trading workspace logs per query timeframe from time-series databases, establishing a governed framework for global platform telemetry.',
    ],
    tags: ['Python', 'InfluxDB', 'Grafana Dashboards'],
  },
  {
    role: 'Data Analytics and BI Developer Intern',
    org: 'Cayman Islands Government',
    logo: 'logos/cayGov.png', // e.g. 'logos/company.png'
    location: 'Grand Cayman, Cayman Islands',
    dates: 'July 2025 - August 2025',
    points: [
      'Built Python and SQL data pipelines to cleanse, structure, and model raw administrative data, delivering reliable data feeds to power internal analytics tools.'
    ],
    tags: ['Python', 'SQL', 'Power BI'],
  },

  {
    role: 'Virtual Insight Series Participant',
    org: 'Goldman Sachs',
    logo: 'logos/goldmanSachs.png', // e.g. 'logos/company.png'
    location: 'Remote',
    dates: 'May 2025 - June 2025',
    points: [
      'Attended technical seminars hosted by the Engineering division analysing enterprise software architectures, distributed data pipelines, and high-throughput financial technology systems.'
    ],
    tags: ['Software Engineering', 'Investment Banking', 'Financial Services'],
  },

  {
    role: 'FOCUS Programme Participant',
    org: 'Jane Street',
    logo: 'logos/janeStreet.png', // e.g. 'logos/company.png'
    location: 'London, UK',
    dates: 'January 2025 - January 2025',
    points: [
      'Selected for an immersive technical insight programme, completing interactive workshops on functional programming principles, electronic trading systems architecture, and low-latency system design.'
    ],
    tags: ['Software Engineering', 'Quantitative Trading', 'Sales & Trading'],
  },

  {
    role: 'Software Developer Intern',
    org: 'Cayman Islands Government',
    logo: 'logos/cayGov.png', // e.g. 'logos/company.png'
    location: 'Grand Cayman, Cayman Islands',
    dates: 'June 2024 - August 2024',
    points: [
      'Developed the full-stack architecture for a multi-island registration portal, designing the frontend UI, building backend data validation logic, and establishing secure database pipelines to optimise data ingestion and enforce integrity.'
    ],
    tags: ['Apex Oracle', 'HTML', 'CSS'],
  },
];

export const projects = [
  {
    name: 'HackMIT - Flood and Landslide Prevention Decision Engine',
    blurb: 'Helped build a decision engine that turns public weather and satellite data into a prevention plan for flood- and landslide-prone Himalayan communities: not a warning, but a plan for where to build natural defences like floodplain restoration and planting. Used extreme-value statistics on decades of rainfall records to show how extreme storms are shifting, and checked the results against a broader dataset and satellite flood imagery instead of taking them on trust.',
    stack: ['Python', 'React', 'FastAPI'],
    image: 'projects/mit.png', // e.g. 'project-one.png' in /public
    tint: '#E3E8FF',
    code: 'https://github.com/luckycharm92/HackMIT-team-sustainability-',
  },
  {
    name: 'LeedsHack - Breast Cancer Risk Prediction Platform',
    blurb: 'Built a full-stack machine learning application that predicts individual breast cancer risk from health and lifestyle data, delivering personalised risk scores, NHS-aligned recommendations, and automated email alerts to flag high-risk users for early intervention. Designed a user-facing support platform enabling users to search and filter breast cancer support groups and access verified NHS educational content, including a prototype conversational chat interface for answering basic user questions.',
    stack: ['Machine Learning Models', 'Python', 'React', 'Flask'],
    image: 'projects/leedshack2026.png',
    tint: '#FFF3C4',
    demo: '',
    code: 'https://github.com/luckycharm92/leedshack2026',
  },
  {
    name: 'Xv6 Operating System Shell',
    blurb: 'Implemented a custom C command line shell for the Xv6 kernel, supporting tokenised command parsing, process execution loops, built in directory navigation, and I/O redirection using file descriptors. Handled low-level OS inter-process communication via fork(), exec() and wait() system calls while maintaining strict resource cleanup to prevent file descriptor leaks.',
    stack: ['C', 'Systems Programming'],
    image: 'projects/xv6prog.png',
    tint: '#DDF5E8',
  },


  {
    name: '2nd Year Project - Flight Booking and Management System',
    blurb: 'Collaborated to develop a full-stack flight booking system featuring customer booking workflows, staff management tools, and real-time reservation tracking. Developed backend functionality for flight search, booking management, and passenger handling, integrating real-time international pricing via an external Currency API, along with travel points, loyalty features, and automated booking confirmation emails. Designed operational and customer-support features including analytical reporting dashboards, complaint resolution workflows, booking modification tools, and staff utility systems for airport and airplane logistics management.',
    stack: ['Kotlin', 'SQL', 'External Currency Conversion API'],
    image: 'projects/flyhigh.png',
    tint: '#DDF5E8',
    code: 'https://github.com/luckycharm92/Flight-System-2850-SWE-Project',
  },
];

export const extracurriculars = [
  {
    name: 'University of Leeds Boat Club (Rowing)',
    role: 'Women’s Beginners Squad Member',
    dates: '2026 - Present',
    text: '2x Water Sessions, 2x Erg Sessions, 1x Strength & Conditioning, 1x Circuit Training',
    sticker: 'new Sport!',
  },
  {
    name: 'Cayman Islands Women’s National Football Team',
    role: 'Senior Women’s National Team Member, Previous U20 Women’s National Team Member',
    dates: '2022 - Present',
    text: 'Competed in Curacao, Trinidad and Tobago, the Dominican Republic, Costa Rica and Grenada.',
    sticker: 'footy',
  },

  {
    name: 'University of Leeds Computing Society',
    role: 'Member, Previous Social Media Officer',
    dates: '2024 - Present',
    text: 'Attend welcome events, socials, workshops, hackathons and further academic events',
  },
  {
    name: 'University of Leeds Women in Leadership Society',
    role: 'Member',
    dates: '2025 — Present',
    text: 'Attend academic events, networking opportunities and workshops' ,
  },

  {
    name: 'Plastic Free Cayman Islands Beach Clean Up',
    role: 'Volunteer',
    dates: '2022 - Present',
    text: 'Participate in various beach clean-ups around the Cayman Islands',
    sticker: 'seasonal',
  },
];

export const awards = [
  {
    title: 'Proud of Them Youth Honouree - Academic Excellence',
    issuer: 'Cayman Islands Government Ministry of Youth, Sports & Heritage',
    date: '2026',
    text: 'Shortlisted as one of 15 youth recognised in the 2026-2027 Cayman Islands Proud of Them Awards Programme, for outstanding academic achievement.',
  },
  {
    title: 'Cayman Islands Government Scholar',
    issuer: 'Cayman Islands Government Ministry of Education',
    date: '2026',
  },

  {
    title: 'Leeds Hackathon Overall Winner',
    issuer: 'Leeds Computing Society',
    date: '2026',
    text: 'For Best Implementation of “Systems Rebooted”: Improved efficiency and accessibility of an existing system through machine learning.',
  },

  {
    title: 'Leeds Hackathon PwC Challenge Winner',
    issuer: 'Leeds Computing Society',
    date: '2026',
    text: 'For Best Implementation of “Rewiring Communities”: My team developed a solution to enhance community connectivity and support.',
  },


];

export const leadership = [
  {
    title: 'Deputy Governor’s Award for Leadership and Academic Excellence',
    org: 'Cayman Islands - Office of the Deputy Governor',
    date: '2023',
  },

];
