export const project = [
  {
    title: "Learnium",
    subtitle:
      "an AI-Powered mobile app in edTech industry. Learnium simplifies the learning process by transforming textbooks into interactive content, provides a flexible learning schedule, and keeps learners engaged in practice and tests by rewarding their progress.",
    description: [
      "🙏🏻 I'm so thankful for my team. We won the Langara College Web & Mobile App Development Capstone presentation!",
      "I'm thrilled to announce that Learnium, the mobile application we've poured our hearts and skills into, has won Langara College's Web & Mobile App Development Capstone presentation! 🎉🥇",
      "Learnium, helps students learn better by turning passive content into interactive experiences with generative AI technology. This idea came from my own personal struggle with reading a book. I found that I learned new topics better when it was interactive, like taking quizzes and memorizing terms with flashcards, compared to just reading alone.",
      "Over the past three months, as the project manager and full-stack developer, I've had an incredible journey of learning and growth. We dove into various technologies - React Native for our front end, Node.js with Express for the backend, and integrating OpenAI API with LangChain to craft our own vector database. This allowed us to convert books into dynamic, interactive experiences, including flashcards and quizzes. Plus, Learnium breaking down complex content into digestible topics and generating personalized study schedules based on exam dates has made learning more effective.",
      "This success wouldn't have been possible without the fantastic minds and dedication of our designers and developers - Nahla Niavarani, Pablo Montoya Varela, Vaibhav Malhotra, Wakana Kaneiwa, Mario Cesena, Edgar Velandia, and Ievgeniia (Genia) Chornobai. Working alongside such talented people like you has been an absolute pleasure.",

      "Explore Learnium. Check it out at https://www.learnium.app",

      "I want to extend gratitude to Tyler Higgs, our exceptional instructor this semester, and all my past instructors at Langara College. Their guidance and imparted knowledge have prepared me for the journey ahead as a developer.",

      "#Learnium #LangaraCollege #WebDevelopment #MobileAppDevelopment #EdTech #LearningJourney",
    ],
    imageMain: `/projects/learnium/heroLearnium.png`,
    link: "https://learnium-landing.vercel.app/",
    imageArticle: [
      "/projects/learnium/feature1.webp",
      "/projects/learnium/feature2.webp",
      "/projects/learnium/feature3.webp",
      "/projects/learnium/feature4.webp",
      "/projects/learnium/feature5.webp",
    ],
    projectType: "Mobile App",
    projectRole: "Full Stack Developer/Project Manager",
    year: "Dec 2023",
    tool: "React Native, NodeJS, Express.js, OpenAI API, LangChain, MongoDB, AWS, JWT Token",
  },
  {
    title: "Dealicious",
    subtitle:
      "Full stack web application, “Dealicious” - a solution for a restaurant to gain more customers through an effective, data-driven referral & loyalty campaign. ",
    description: [
      'I am honored and privileged to receive the "Technical Prowess Award." for my Full stack web application "Dealicious," a powerful solution for restaurants to gain more customers by unlocking the power of referral and loyalty campaigns.',
      "As a Project manager and Full stack developer, I and my team developed it from scratch in 12 weeks. From interviewing stakeholders, optimizing user experience, designing an intuitive and visually appealing user interface, prototyping, front-end&back-end development, unit testing, and deployment. And now it is live at www.dealicious.site",
      "Thank you to the panelist who gives us this award and also a piece of valuable advice. Here is a snapshot from the panelist. ",
      '"Great job on the responsiveness of the site. Everything flows smoothly from desktop to mobile." ',
      '"Excellent implementation of chart and query performance. The dashboard contains almost ten charts, but the loading performance was impressive." ',
      "We were using Next.js, React.js, Node.js, MongoDB and incorporating libraries/services such as chart.js for data visualization, Twilio for SMS verification, and OpenAI for its generative AI feature.",
      "Moreover, we adopt the Agile principle though out our development process.",
      "I would like to thank Tomoko Okochi, our instructor, who provided us with an incredible journey and insightful industry knowledge.",
      "Most importantly, our team who has been working so hard and going above and beyond to create the best work possible. Nahla Niavarani Pablo Montoya Varela Surbhi Kataria Mario Cesena Edgar Velandia Ziyun Yue",
    ],
    imageMain: "/projects/dealicious/dealicious2.png",
    // link: "https://www.dealicious.site",
    imageArticle: [
      "/projects/dealicious/dealicious.png",
      "/projects/dealicious/dealicious3.jpeg",
    ],
    projectType: "Full Stack Web Application",
    projectRole: "Full Stack Developer/Project Manager",
    year: "Aug 2023",
    tool: "React, Next.js, NodeJS, OpenAI API, Twilio, MongoDB, MaterialUI",
  },
  {
    title: "Vancouver Real Estate Sales",
    subtitle:
      "Data visualization project for Vancouver real estate sales data from 2023.",
    description: [
      "I recently grew my interest in Vancouver real estate market and decided to create a data visualization project using React, Express JS, MapBox, OpenAI, and Langchain.",
      "I got this dataset for real estate sales in Vancouver from 2023. I designed it to have 4 main sections: Snapshot, Map & Table with filtering and sorting, Trend, and ChatBot.",
      "The Snapshot section gives a quick overview of the total transactions, average price, average price per sq.ft, and most/least active month. I create a custom hook to pre-process the data and calculate the average price per sq.ft. for each property type and sort the transaction by month.",
      "For the Map & Table section, I use MapBox to render the map and customize the popup to show the property details. The table is sortable and filterable by property type, price, and size. I render the marker to only show the property that inside the bounds of the maps to improve the performance. However, I run into a performance issue when the map is zoomed out and the number of markers is too many. Thank to my mentor who give me a feedback to use cluster strategy. By grouping the marker in the nearby area into cluster, this technic improve the performance by night and day.",
      "The Trend section shows average price per sq.ft for each property type over the year.",
      "The ChatBot section is powered by OpenAI and Langchain. I embedded the data to create a vector database for AI to be able to search for the answer. The ChatBot will only give answer based on the provided dataset.",
      "I'm learning a lot from this project and from constructive feedback from my mentor. I hope to hear more feedback from you so that I can improve it even further. Check it out at https://real-estate-sale-data-dashboard.vercel.app/",
    ],
    imageMain: "/projects/realestate/realestate-thumbnail.png",
    link: "https://real-estate-sale-data-dashboard.vercel.app/",
    imageArticle: [
      "/projects/realestate/realestate - at a glance.png",
      "/projects/realestate/realestate - graph.png",
      "/projects/realestate/realestate - chat1.png",
      "/projects/realestate/realestate - chat2.png",
    ],
    projectType: "Web App",
    projectRole: "Full Stack Developer",
    year: "Oct 2024",
    tool: "React, NodeJS, Express JS, OpenAI API, LangChain, MapBox, Shadcn UI",
  },
  {
    title: "Canadian PR Notification! 🇨🇦",
    subtitle: "Exploring AWS services to notify the Canadian PR announcement.",
    description: [
      "Excited to share my latest personal project: Canadian PR Notification! 🇨🇦",

      "This project started as a way for me to learn more about AWS services I hadn’t used before, beyond EC2 and S3, which I used in my college projects (Learnium, DEALicious). But I also wanted it to be practical—something I’d personally find useful.",

      "The idea came when I realized I was following several Twitter and Instagram accounts for Canadian immigration updates, specifically for news on PR draws. Then it hit me: Why not create a tool that delivers these updates directly to my email?",

      "Here’s how I tackled it:",

      "Initially, I planned to build an Express.js server deployed on AWS Lambda, triggered by API Gateway. The API would be called periodically using AWS EventBridge to check IRCC's website, compare the data with the latest entry in my MongoDB database, and, if new, send emails to subscribers using SendGrid.",

      "However, I quickly discovered that EventBridge doesn’t support HTTP requests like CRON jobs do (a method I’m more familiar with from my current job).",

      "This led me to refactor the project into two repositories:",

      "A function that fetches the latest announcements from IRCC’s website.",
      "An Express.js server that creates an API to allow users to subscribe.",
      "It’s been a great learning experience to explore new AWS services and refine the architecture along the way. The project is far from perfect, but I’m proud of its progress.",

      "I’d love to hear your feedback or suggestions for improving it further!",
    ],
    imageMain: "/projects/prnotify/main.jpg",
    link: "https://prnotify.tonydev.work/",
    imageArticle: [
      "/projects/prnotify/prnotify-screenshot.png",
    ],
    projectType: "Web App, Automation",
    projectRole: "Full Stack Developer",
    year: "Nov 2024",
    tool: "React, NodeJS, Express JS, AWS Lambda, EventBridge, AWS API Gateway, MongoDB, SendGrid",
  },
  // ,
  // {
  //   title: "second",
  //   subtitle:
  //     "an AI-Powered mobile app in edTech industry. Learnium simplifies the learning process by transforming textbooks into interactive content, provides a flexible learning schedule, and keeps learners engaged in practice and tests by rewarding their progress.",
  //   description: [
  //     "Feature #1 Interactive Content",
  //     "Learnium simplifies interactive content creation by allowing users to upload PDFs, paste text, or capture book pages via OCR technology. It scans and generates key topics for focused learning, including quizzes, flashcards, and summaries.",
  //     "Feature #2 Dynamic Study Planner",
  //     "Learnium tailors study sessions to user’s learning preferences and upcoming exam dates. The study plan is responsive to the learner’s progress and quiz results and covers everything that the learner needs to practice to achieve a certain result.",
  //   ],
  //   imageMain: "/projects/learnium/feature2.webp",
  //   link: "https://www.learnium.app/",
  //   imageArticle: [
  //     "/projects/learnium/feature1.webp",
  //     "/projects/learnium/feature2.webp",
  //     "/projects/learnium/feature3.webp",
  //     "/projects/learnium/feature4.webp",
  //     "/projects/learnium/feature5.webp",
  //   ],
  //   projectType: "Mobile App",
  //   projectRole: "Full Stack Developer/Project Manager",
  //   year: "Dec 2023",
  //   tool: "React Native, NodeJS, OpenAI API, LangChain, MongoDB, AWS, JWT Token",
  // }
  // ,
  // {
  //   title: "second",
  //   subtitle:
  //     "an AI-Powered mobile app in edTech industry. Learnium simplifies the learning process by transforming textbooks into interactive content, provides a flexible learning schedule, and keeps learners engaged in practice and tests by rewarding their progress.",
  //   description: [
  //     "Feature #1 Interactive Content",
  //     "Learnium simplifies interactive content creation by allowing users to upload PDFs, paste text, or capture book pages via OCR technology. It scans and generates key topics for focused learning, including quizzes, flashcards, and summaries.",
  //     "Feature #2 Dynamic Study Planner",
  //     "Learnium tailors study sessions to user’s learning preferences and upcoming exam dates. The study plan is responsive to the learner’s progress and quiz results and covers everything that the learner needs to practice to achieve a certain result.",
  //   ],
  //   imageMain: "/projects/learnium/feature4.webp",
  //   link: "https://www.learnium.app/",
  //   imageArticle: [
  //     "/projects/learnium/feature1.png",
  //     "/projects/learnium/feature2.png",
  //     "/projects/learnium/feature3.png",
  //     "/projects/learnium/feature4.png",
  //     "/projects/learnium/feature5.png",
  //   ],
  //   projectType: "Mobile App",
  //   projectRole: "Full Stack Developer/Project Manager",
  //   year: "Dec 2023",
  //   tool: "React Native, NodeJS, OpenAI API, LangChain, MongoDB, AWS, JWT Token",
  // },
  // {
  //   title: "second",
  //   subtitle:
  //     "an AI-Powered mobile app in edTech industry. Learnium simplifies the learning process by transforming textbooks into interactive content, provides a flexible learning schedule, and keeps learners engaged in practice and tests by rewarding their progress.",
  //   description: [
  //     "Feature #1 Interactive Content",
  //     "Learnium simplifies interactive content creation by allowing users to upload PDFs, paste text, or capture book pages via OCR technology. It scans and generates key topics for focused learning, including quizzes, flashcards, and summaries.",
  //     "Feature #2 Dynamic Study Planner",
  //     "Learnium tailors study sessions to user’s learning preferences and upcoming exam dates. The study plan is responsive to the learner’s progress and quiz results and covers everything that the learner needs to practice to achieve a certain result.",
  //   ],
  //   imageMain: "/projects/learnium/feature2.webp",
  //   link: "https://www.learnium.app/",
  //   imageArticle: [
  //     "/projects/learnium/feature1.png",
  //     "/projects/learnium/feature2.png",
  //     "/projects/learnium/feature3.png",
  //     "/projects/learnium/feature4.png",
  //     "/projects/learnium/feature5.png",
  //   ],
  //   projectType: "Mobile App",
  //   projectRole: "Full Stack Developer/Project Manager",
  //   year: "Dec 2023",
  //   tool: "React Native, NodeJS, OpenAI API, LangChain, MongoDB, AWS, JWT Token",
  // },
  // {
  //   title: "second",
  //   subtitle:
  //     "an AI-Powered mobile app in edTech industry. Learnium simplifies the learning process by transforming textbooks into interactive content, provides a flexible learning schedule, and keeps learners engaged in practice and tests by rewarding their progress.",
  //   description: [
  //     "Feature #1 Interactive Content",
  //     "Learnium simplifies interactive content creation by allowing users to upload PDFs, paste text, or capture book pages via OCR technology. It scans and generates key topics for focused learning, including quizzes, flashcards, and summaries.",
  //     "Feature #2 Dynamic Study Planner",
  //     "Learnium tailors study sessions to user’s learning preferences and upcoming exam dates. The study plan is responsive to the learner’s progress and quiz results and covers everything that the learner needs to practice to achieve a certain result.",
  //   ],
  //   imageMain: "/projects/learnium/feature5.webp",
  //   link: "https://www.learnium.app/",
  //   imageArticle: [
  //     "/projects/learnium/feature1.png",
  //     "/projects/learnium/feature2.png",
  //     "/projects/learnium/feature3.png",
  //     "/projects/learnium/feature4.png",
  //     "/projects/learnium/feature5.png",
  //   ],
  //   projectType: "Mobile App",
  //   projectRole: "Full Stack Developer/Project Manager",
  //   year: "Dec 2023",
  //   tool: "React Native, NodeJS, OpenAI API, LangChain, MongoDB, AWS, JWT Token",
  // },
];
