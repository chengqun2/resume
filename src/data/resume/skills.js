const skills = [
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'MongoDB',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/MySql',
    competency: 5,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Redis',
    competency: 5,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
