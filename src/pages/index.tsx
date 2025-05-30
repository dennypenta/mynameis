import styles from './index.module.css'
import React from 'react'
import Layout from '@theme/Layout'
import { FaGithub, FaLinkedinIn, FaTwitter, FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa'

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Link from '@docusaurus/Link';

// Declare require.context for TypeScript
declare const require: {
  context(directory: string, useSubdirectories: boolean, regExp: RegExp): {
    keys(): string[];
    <T>(id: string): T & { metadata: any; truncated?: string };
  };
};

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const previewPosts = [
  'gopls: how your IDE becomes better every day',
  'Go Dockerfile',
  '250mb json in a 40mb service limit',
]

// Function to get blog posts data using require.context
const getAllBlogPosts = () => {
  // Use require.context to import all markdown/mdx files in the blog directory
  const blogContext = require.context('../../blog', true, /\/index\.(md|mdx)$/);

  const blogPosts = blogContext.keys().map((key) => {
    const module = blogContext(key);
    // Docusaurus adds metadata to the module export
    const { metadata } = module;
    // Assuming truncated content is available in metadata or module export
    // If not directly available, you might need a custom loader or read file content
    const { title, description, permalink, date, frontMatter } = metadata;
    const truncatedContent = module.truncated as string | undefined; // Access truncated content

    console.log(title)
    return {
      title,
      description: description || frontMatter.description,
      permalink,
      date: new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      truncatedContent,
    };
  });

  // Sort by date, newest first
  blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return blogPosts.filter(it => previewPosts.includes(it.title));
};

const blogPosts = getAllBlogPosts();

const projects = [
  {
    name: 'Treenq',
    link: 'http://treenq.com',
    description: 'Opensource PaaS on Kubernetes: deploy, preview, enjoy'
  },
  {
    name: 'Kalisto',
    link: 'http://github.com/kalisto-Application/kalisto',
    description: 'GRPC GUI with scripting sandbox: test grpc service using Javascript in a ready to go setup'
  }
]

const links = [
  {
    icon: <FaFilePdf size={24} />, text: 'CV', url: 'https://rxresu.me/candyboobers/main'
  },
  {
    icon: <FaTwitter size={24} />, text: 'Twitter', url: 'https://twitter.com/candyboobers'
  },
  {
    icon: <FaGithub size={24} />, text: 'GitHub', url: 'https://github.com/dennypenta'
  },
  {
    icon: <FaLinkedinIn size={24} />, text: 'LinkedIn', url: 'https://www.linkedin.com/in/denis-dvornikov-33399812b/'
  }
]

const TShapeChart = () => {
  const tSkills = [
    { name: 'Go', depth: 80 },
    { name: 'Kubernetes', depth: 70 },
    { name: 'AWS/GCP', depth: 60 },
    { name: 'Python', depth: 60 },
    { name: 'Nodejs', depth: 60 },
    { name: 'Grafana', depth: 50 },
    { name: 'Terraform', depth: 50 },
    { name: 'React/SolidJS', depth: 30 },
    { name: 'OIDC', depth: 30 },
  ]

  const data = {
    labels: tSkills.map((s) => s.name),
    datasets: [
      {
        label: 'Skill Depth',
        data: tSkills.map((s) => s.depth),
        backgroundColor: '#886CBC',
        borderRadius: 8,
        borderSkipped: false,
        maxBarThickness: 32,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.parsed.x}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#eae0d5',
          font: { size: 14 },
        },
        grid: {
          color: 'rgba(136,108,188,0.15)',
        },
      },
      y: {
        ticks: {
          color: '#eae0d5',
          font: { size: 14 },
        },
        grid: {
          color: 'rgba(136,108,188,0.10)',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', minWidth: 340, maxWidth: 600 }}>
      <Bar data={data} options={options} height={360} />
    </div>
  );
}

const Index = (): JSX.Element => {
  return (
    <Layout title="About me" description="About me">
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <img className={styles.image} src={require('../assets/1.jpg').default} alt="Denis" />
          <h1 className={styles.heading}>Hey, I'm Denis!</h1>
          <p>On this website I share what I find cool.</p>
          <div className={styles.linksTable}>
            {links.map((link, idx) => (
              <a key={idx} href={link.url} className={styles.linkRow} target="_blank" rel="noopener noreferrer">
                <span className={styles.linkIcon}>{link.icon}</span>
                <span className={styles.linkText}>{link.text}</span>
                <span className={styles.linkArrow}><FaExternalLinkAlt size={16} /></span>
              </a>
            ))}
          </div>
          <section className={styles.tShapeSection}>
            <h2>My Skills</h2>
            <div className={styles.tShapeDiagram}>
              <TShapeChart />
            </div>
          </section>
        </div>
        <div className={styles.rightColumn}>
          <section className={styles.projectsSection}>
            <h2>Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, idx) => (
                <a key={idx} href={project.link} className={styles.projectRow} target="_blank" rel="noopener noreferrer">
                  <div className={styles.projectInfo}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className={styles.projectArrow}><FaExternalLinkAlt size={18} /></span>
                </a>
              ))}
            </div>
          </section>

          {/* New Blog Posts Section */}
          <section className={styles.blogSection}>
            <h2>Latest Blog Posts</h2>
            <div className={styles.blogPostsList}>
              {blogPosts.map((post, idx) => (
                <Link key={idx} to={post.permalink} className={styles.blogPostPreview}>
                  <h3>{post.title}</h3>
                  <p className={styles.blogPostDate}>{post.date}</p>
                  {post.truncatedContent && (
                    <div className={styles.blogPostSummary} dangerouslySetInnerHTML={{ __html: post.truncatedContent }} />
                  )}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Index
