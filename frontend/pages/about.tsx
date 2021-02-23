import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | GSOP Manager">
    <h1>About</h1>
    <p>This is the about page.</p>
    <p>Developed by Guilherme Araújo and the BioME IT Team.</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
