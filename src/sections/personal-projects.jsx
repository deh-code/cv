import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import Container from "../components/container";
import Section from '../components/section';
import { Link, Text, View } from "@react-pdf/renderer";
import Title from "../components/title";

const projects = [
  {
    title: 'CV',
    link: 'https://github.com/deh-code/cv',
    description: 'The CV you are reading right now is actually a React WebApp compiled to a pdf with the react-pdf library.' 
  },
  {
    title: 'Generator Yeogurt 2',
    link: 'https://github.com/deh-code/generator-yeogurt-2',
    description: 'An old static site generator based on gulp and browserify, that I forked. It was no longer receiving updates, still it was extensively used in my company codebase, so I had to do some optimizations in order to maintain older projects.'
  },
  {
    title: 'Pagami (work in progress)',
    link: 'https://github.com/orgs/deh-code-pagami/repositories',
    description: 'A React WebApp for debt tracking, it uses Strapi CMS for backend and a MySQL database. The repository is splitted in 2 modules (frontend and backend) that can be shipped separately and orchestrated with Docker and NGINX.'
  }
]

export default function PersonalProjects() {
  return <Container>
    <Section
      title='Personal Projects'
      icon={faFileCode}
      iconWidth="14px">
      <View
        style={{
          fontSize: '9px'
        }}>
        {projects.map((project, index) => 
          <View
            style={{
              padding: '6px',
              backgroundColor: index % 2 === 0 ? '#fffff6' : '#f4fbff',
              borderBottom: index === projects.length - 1 ? 'none' : '1px solid #eee'
            }}
            key={index}>
            <Link 
              href={project.link}
              style={{
                color: 'black',
                textDecoration: 'none'
              }}>
              <Title
                style={{
                  fontSize: '12px'
                }}>
                {project.title}
              </Title>
            </Link>
            <View>
              <Text>
                {project.description}
              </Text>
            </View>
          </View>
        )}
      </View>
    </Section>
  </Container>
}