import ProjectCard from '../components/ProjectCard.js';
import ProjectsSection from '../components/ProjectSection.js';
import { Typography, Card} from '@mui/material/';
import projects from '../stuff/project_list.js'
import Head from 'next/head';
import Link from 'next/link';

export default function Homepage(){
  return <>
    <Head>
      <title> How about them apples </title>
    </Head>
    <Card>
      <Typography variant="h2"> Mikhail Ivanov </Typography>
    </Card>
    <Link href='/projects'>
      <a> See projects :) </a>
    </Link>
  </>
}