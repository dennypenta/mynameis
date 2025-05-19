import styles from './index.module.css'
import React from 'react'
import Layout from '@theme/Layout'
import { FaGithub, FaLinkedinIn, FaTwitter, FaExternalLinkAlt } from 'react-icons/fa'

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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        </div>
      </div>
    </Layout>
  )
}

export default Index
