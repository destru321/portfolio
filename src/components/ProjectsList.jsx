import Project from "./Project";
import { useState } from "react";

const ProjectList = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Warehouse management system',
            description: 'A complete and complex system for the depot management. Inventory tracking, products, orders and documents management, task planning, creating reports and analysis.',
            imageSource: '/images/wmspreview.png',
            technologies: [
                {
                    name: "Next.js",
                    iconSource: "/icons/nextjs.png",
                    link: "https://nextjs.org/",
                },
                {
                    name: "NestJS",
                    iconSource: "/icons/nestjs.png",
                    link: "https://nestjs.com/",
                },
                {
                    name: "PostgreSQL",
                    iconSource: "/icons/postgresql.png",
                    link: "https://www.postgresql.org.pl/",
                },
                {
                    name: "Redis",
                    iconSource: "/icons/redis.png",
                    link: "https://redis.io/",
                },
            ]
        },
        {
            title: 'Npm data analysis package',
            description: 'A npm package providing a complex tool for analyzing inputted data. Create reports and statistics based on your datasets.',
            imageSource: '/images/npmdap.png',
            technologies: [
                {
                    name: "Node.js",
                    iconSource: "/icons/nodejs.png",
                    link: "https://nodejs.org/en",
                },
                {
                    name: "Python",
                    iconSource: "/icons/python.png",
                    link: "https://www.python.org/",
                }
            ]
        },
        {
            title: 'Travel blog',
            description: 'A travel website which i use for sharing my own travel experiences with the rest of the world. Integrated with content management system.',
            imageSource: '/images/travelblog.png',
            technologies: [
                {
                    name: "Gatsby",
                    iconSource: "/icons/gatsby.png",
                    link: "https://www.gatsbyjs.com/",
                },
                {
                    name: "Sanity",
                    iconSource: "/icons/sanity.png",
                    link: "https://www.sanity.io/",
                }
            ]
        }
    ])

    return (
        <>
            {
                projects.map((project, index) => {
                    return <Project key={index} project={project}/>
                })
            }
        </>
    )
}

export default ProjectList;