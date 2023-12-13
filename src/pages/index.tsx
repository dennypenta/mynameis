import styles from './index.module.css'
import React from 'react'
import Layout from '@theme/Layout'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Index = (): JSX.Element => {
  return (
    <Layout title="About me" description="About me">
      <div
        className={styles.container}
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          padding: '2em',
          gap: '2em',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '340px',
            flexDirection: 'column',
          }}
        >
          <h1 className={styles.heading}>Hey, I'm Denis!</h1>

          <p>
            On this website I share what I find cool.
          </p>

          <h4>my keywords</h4>
          <ul>
            <li>Go</li>
            <li>nodejs</li>
            <li>python</li>
            <li>k8s</li>
          </ul>

          <div style={{ marginBottom: '1em' }}>
            <img className={styles.image} src={require('../assets/1.jpg').default} />
          </div>

          <div className={styles.socialLinks}>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/candyboobers">
              <FaTwitter size={32} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/dennypenta">
              <FaGithub size={32} />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/denis-dvornikov-33399812b/">
              <FaLinkedinIn size={32} />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
