import styles from "./index.module.css";
import React from "react";
import Layout from "@theme/Layout";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaExternalLinkAlt,
  FaEnvelope,
} from "react-icons/fa";
import Link from "@docusaurus/Link";

// Declare require.context for TypeScript
declare const require: {
  context(
    directory: string,
    useSubdirectories: boolean,
    regExp: RegExp,
  ): {
    keys(): string[];
    <T>(id: string): T & { metadata: any; truncated?: string };
  };
};

const previewPosts = [
  "gopls: how your IDE becomes better every day",
  "Go Dockerfile",
  "250mb json in a 40mb service limit",
  "How Treenq builds workload images",
];

// Function to get blog posts data using require.context
const getAllBlogPosts = () => {
  const blogContext = require.context("../../blog", true, /\/index\.(md|mdx)$/);

  const blogPosts = blogContext.keys().map((key) => {
    const module = blogContext(key);
    const { metadata } = module;
    const { title, description, permalink, date, frontMatter } = metadata;
    const truncatedContent = module.truncated as string | undefined;

    return {
      title,
      description: description || frontMatter.description,
      permalink,
      date: new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      truncatedContent,
    };
  });

  blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return blogPosts.filter((it) => previewPosts.includes(it.title));
};

const blogPosts = getAllBlogPosts();

const projects = [
  {
    title: "Seqor",
    description:
      "Logging database",
    tags: ["Zig"],
    link: "https://github.com/seqor/seqor",
  },
  {
    title: "Treenq",
    description:
      "Kubernetes IDP (Internal Dev Platform)",
    tags: ["Go", "Kubernetes", "Pulumi"],
    link: "https://treenq.com/",
  },
  {
    title: "Kalisto",
    description:
      "GRPC GUI",
    tags: ["Go", "Wails", "goja", "badger", "Protocompile", "Protoreflect"],
    link: "#",
  },
];

const experience = [
  {
    period: "2025 — Present",
    role: "CTO",
    company: "Seqor",
    description:
      "Founding engineer in observability innovation",
  },
  {
    period: "2023 — Present",
    role: "Senior Software Engineer",
    company: "Delivery Hero",
    description:
      "Do ad-tech bidding",
  },
  {
    period: "2022 — 2023",
    role: "Senior Software Engineer",
    company: "Optiopay",
    description:
      "Fintech",
  },
  {
    period: "2019 — 2022",
    role: "Senior Software Engineer",
    company: "Tutu.ru",
    description:
      "Travel tech",
  },
  {
    period: "2015 — 2019",
    role: "Software Engineer",
    company: "Lamoda",
    description:
      "E-comm, catalog team, search indexing",
  }
];

const skills = [
    "Go / Zig / Python / Nodejs",
    "AWS / GCP",
    "Postgres / Dynamo / Mongo",
    "Docker / Kubernetes",
    "Istio",
    "Grafana / Datadog",
    "Terraform / Pulumi",
    "React / Solid",
];

const Index = (): JSX.Element => {
  return (
    <Layout title="About me" description="About me">
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          {/* Header Section */}
          <header className={styles.header}>
            <h1 className={styles.mainHeading}>Denis Dvornikov</h1>
            <p className={styles.subtitle}>Staff Engineer / Technical leader</p>
            <p className={styles.intro}>
              I craft <span className={styles.elegant}>digital experiences</span> in infra and observability space.
            </p>
          </header>

          {/* About Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About</h2>
            <div className={styles.aboutContent}>
              <p>
                10 years in software, shifted from product dev to a software engineer.
              </p>
              <p>
                Opensource contributor (go/tools, nvim plugins, zitadel)
              </p>
              <p>
                Pushing observability forward making it energy efficient. Do my best to the greener world.
              </p>
            </div>
          </section>

          {/* Connect Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Connect</h2>
            <div className={styles.connectButtons}>
              <a
                href="https://github.com/dennypenta/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaGithub className={styles.buttonIcon} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/denis-dvornikov-33399812b/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaLinkedinIn className={styles.buttonIcon} />
                LinkedIn
              </a>
              <a
                href="https://twitter.com/candyboobers/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaTwitter className={styles.buttonIcon} />
                Twitter
              </a>
              <a
                href="https://t.me/candyboober"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaTelegram className={styles.buttonIcon} />
                Telegram
              </a> 
                            
            </div>

            <div className={styles.blogLinkContainer}>
              <Link to="/blog" className={styles.blogLink}>
                Read My Blog
                <FaExternalLinkAlt className={styles.blogLinkIcon} />
              </Link>
            </div>
          </section>

          {/* Projects Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div key={index} className={styles.projectCard}>
                  <div className={styles.projectHeader}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectIcon}
                    >
                      <FaExternalLinkAlt />
                      <span className={styles.srOnly}>View project</span>
                    </a>
                  </div>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.experienceList}>
              {experience.map((job, index) => (
                <div key={index} className={styles.experienceItem}>
                  <div className={styles.experiencePeriod}>{job.period}</div>
                  <div className={styles.experienceDetails}>
                    <h3 className={styles.experienceRole}>{job.role}</h3>
                    <p className={styles.experienceCompany}>{job.company}</p>
                    <p className={styles.experienceDescription}>{job.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.skillsContainer}>
              <h3 className={styles.skillsTitle}>Tech Stack</h3>
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className={styles.footer}>
            <p>© 2026 Denis Dvornikov. All rights reserved. No clue why everyone puts it here, so did I. You can steal the code from github, it's MIT licensed anyway</p>
          </footer>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
