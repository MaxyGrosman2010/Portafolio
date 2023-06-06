import Head from 'next/head';
import styles from './page.module.css';
import AboutMe from '@/components/aboutMe/aboutMe';
import TechnicalSkills from '@/components/technicalSkills/technicalSkills';
import SoftSkills from '@/components/softSkills/softSkills';
import Certificates from '@/components/certificates/certificates';
import Portafolio from '@/components/portafolio/portafolio';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <div>

      <Head>

        <title>Portafolio Maximiliano Grosman</title>
        <meta name='description' content='portafolio' />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main >

        <h1>Maximiliano Grosman, FullStack Web Developer</h1>

        <AboutMe/>
        
        <TechnicalSkills/>

        <SoftSkills/>

        <Certificates/>

        <Portafolio/>

        <Footer/>

      </main>

    </div>
  )
};