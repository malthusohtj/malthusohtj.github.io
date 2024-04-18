export function getAbout() {
    return [
        "When I was 18, I learnt how to code online and built my first e-commerce website to market and sell tech products.",
        "Fast forward to today, I am on track to graduate with Double Degrees (Highest Distinction with Honours) in Computer Science and Business under university scholarship at Nanyang Technological University (Singapore).",
        "I've had the privilege of interning for diverse functions (software engineering, product management, data analyst) in a wide range of industries (technology, energy, healthcare, government) and company sizes (VC-backed startups, NYSE-listed MNCs, government organisations). I've also spent extended periods of time on student exchange in Canada (Queen's University @ Kingston, Ontario) and interning in the USA (Amplified Industries @ Boston, MA).",
        "Besides completing my final year of university, I am currently building TRACKR (a web app that tracks your real-time net worth) and MakanAgain (a customer loyalty platform built for the Singaporean hawker).",
        "When I'm not coding, I'm usually working out, immersed in a good book, or cycling in my favourite parks in Singapore.",
    ]
}

export function getExperiences() {
    return [
        {
            title: "Software Engineer Intern",
            company: "Amplified Industries",
            companyDesc: "Forbes 30 under 30 Energy",
            location: "Boston, USA",
            start: "Jul 2023",
            end: "Jan 2024",
            duration: "6 months",
            description: [
                "Spearheaded planning and deployment of long-term data lake using AWS S3 and parquet files",
                "Developed time-efficient data migration scripts (from PostgreSQL to data lake) in Python and SQL",
                "Achieved >80% test coverage, fixed bugs, and patched security vulnerabilities in various backend repos"
            ],
            techstack: ["Python", "PostgreSQL", "SQL", "AWS S3", "AWS Lambda"]
        },
        {
            title: "Product Manager Intern",
            company: "Circular",
            companyDesc: "Y-Combinator Winter 2022",
            location: "Singapore",
            start: "May 2023",
            end: "Jul 2023",
            duration: "3 months",
            description: [
                "Gathered technical requirements, supported road mapping, and collaborated with diverse teams (C-Suite, Engineering, Risk, Collections) to roll out new payment portal onto website, reducing customer friction",
                "Saved colleagues ~2 man-hours a week by building software tool using Retool, Airtable, and Javascript",
            ],
            techstack: ["Javascript", "Retool", "Airtable", "Figma", "Python", "Dashboarding"]
        },
        {
            title: "Business Analytics Intern",
            company: "Baxter International Inc",
            companyDesc: "NYSE-listed Healthcare MNC",
            location: "Singapore",
            start: "May 2021",
            end: "Jul 2021",
            duration: "3 months",
            description: [
                "Identified unprofitable products by re-constructing regional income statements with Excel and VBA",
                "Built sales analytics dashboard in Tableau to analyse customer preferences and guide sales strategy",
                "Wrote detailed documentation to guide non-technical colleagues on maintaining the dashboard"
            ],
            techstack: ["Excel", "Excel VBA", "Tableau"]
        },
        {
            title: "Data Analyst Intern",
            company: "Wego.com",
            companyDesc: "#1 Travel Booking Platform in MENA Region",
            location: "Singapore",
            start: "Feb 2020",
            end: "May 2020",
            duration: "4 months",
            description: [
                "Saved $36,000 annually by writing script in Python and SQL that replaced paid SaaS solution",
                "Built customer behaviour analytics dashboard using ChartIO, SQL, and Google BigQuery to identify travel sales opportunities during the COVID-19 pandemic",
            ],
            techstack: ["Python", "SQL", "ChartIO", "Google BigQuery"]
        },
        {
            title: "Software Developer (National Service)",
            company: "Republic of Singapore Air Force (RSAF)",
            location: "Singapore",
            start: "Aug 2018",
            end: "Feb 2020",
            duration: "1.5 years",
            description: [
                "Achieved 2nd Runner Up in RSAF Mobile App Challenge for building Android app that automates meeting scheduling and venue booking for military officers. Developed using Java and Google Cloud Firestore",
                "Completed mobile app and C# coding bootcamp under the mentorship of engineers from Microsoft and RSAF",
            ],
            techstack: ["Java", "Android", "Android Studio", "Google Cloud Firestore"]
        },
    ]
}

export function getProjects() {
    return [
        {
            title: "TRACKR",
            shortDesc: "A web app that tracks your real-time net worth",
            description: [
                "A web app that reports the real-time markt value of all your financial assets to determine your current net worth. Built with React, HTML, and CSS in the frontend and Node.js, Express, and MongoDB in the backend.",
                "Built with a partner"
            ],
            techstack: ["React", "HTML", "CSS", "Javascript", "Node.js", "Express", "MongoDB"]
        },
        {
            title: "BabelAIBot",
            shortDesc: "A social messaging translation chatbot powered by ChatGPT",
            description: [
                "A ChatGPT3.5-powered chatbot for social messaging app Telegram that automatically translates every message sent in a group chat into the native languages of every group member. Built with Python, utilising APIs from Telegram (for chatbot function) and OpenAI (for ChatGPT integration).",
                "Built with a team where I contributed to language detection, admin bot messages, and the development of helper functions (language code conversion, UX glitter)"
            ],
            techstack: ["Python", "ChatGPT", "Large Language Models", "Telegram Bot"]
        },
        {
            title: "ParkWhere",
            shortDesc: "A web app that finds you the best parking in Singapore",
            description: [
                "A mobile-first web app that helps drivers in Singapore find the best parking spot on-the-go. Built with Vue, HTML, and CSS in the frontend and Node.js, Express, and MongoDB in the backend.",
                "Built with a team where I contributed to the frontend code for the home page and search page"
            ],
            techstack: ["Vue", "HTML", "CSS", "Javascript", "Node.js", "Express", "MongoDB"]
        },
        {
            title: "Self-Driving Land Drone",
            shortDesc: "A self-driving, maze-traversing, image-recognising RC car",
            description: [
                "An autonomous self-driving RC car that navigates mazes using cameras, computer vision, and pathfinding algorithm.",
                "Built with a team where I contributed to the pathfinding algorithm, pathfinding simulation GUI, and orchestration code (to coordinate cameras, robot movement, machine learning) all of which were built in Java."
            ],
            techstack: ["Java", "Java Swing UI", "Android Studio"]
        },
        {
            title: "Distributed File System",
            shortDesc: "A CLI tool that implements a UDP-based distributed file system",
            description: [
                "A command-line implementation of a distributed file system where a client computer can create, modify, and encrypt/decrypt files on a server computer. Built with Java.",
                "Built with a partner"
            ],
            techstack: ["Java"]
        },
    ]
}