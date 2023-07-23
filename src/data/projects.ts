import type { Skill } from "./skills";

export type Project = {
  id: string;
  domain: Domain;
  title: string;
  description: string;
  skills: Skill[];
};

export type Domain = "DevOps" 
| "Distributed Systems" 
| "Big Data" 
| "Data Visualization" 
| "Full-Stack"

export const projects: Project[] = [
  {
    id: "go-grade",
    domain: "DevOps",
    title: "Golang Github Action Grading Pipeline",
    description: "A Github Action that grades student submissions automatically and applies necessary deductions for late submissions. Provides a detailed report of the grading process in the Github Summary markdown file for the action.",
    skills: ["TypeScript", "Golang", "Github Actions", "Github API"],
  },
  {
    id: "cdfs",
    domain: "Distributed Systems",
    title: "Distributed File System & Computation Engine",
    description: "CDFS (Colm's Distributed File System) is a distributed file system and computation engine that allows users to store and process data in a distributed manner. The system is fault-tolerant and supports replication and sharding of data. The system is also scalable and supports the addition of new nodes to the cluster. Modeled after the papers on HDFS and MapReduce, this system performs user-submitted Golang plugins on the fly and stores the output back into the dfs.",
    skills: ["Golang", "Distributed Systems", "Big Data", "MapReduce", "HDFS"],
  },
  {
    id: "go-get-it",
    domain: "Full-Stack",
    title: "Go Get It: Full-Stack Search Engine & Web Crawler",
    description: "Go Get It is a full-stack search engine and web crawler that allows users to search for web pages and crawl the web for new pages. The system is built using Java and uses a custom-built web crawler to crawl the web. The system also uses a custom-built search engine that uses TF-IDF to rank web pages.",
    skills: ["Java", "Jetty Servlets", "Web Crawling"],
  },
];

