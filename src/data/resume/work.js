/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: ' ',
    position: 'Senior Full-stack Engineer',
    url: '',
    startDate: '2011-09-01',
    summary: `
      1. Java Back-end SpringCloud/SpringBoot
      2. Python(django, flask)
      3. VueJs, Element-plus
      4. React, Tailwind Css
      5. NodeJs (express)
      6. Html, Css, Javascript, Typescript, Jquery, Layui
      7. Mysql, Oracle, Redis, MongoDb, Kafka, Elasticsearch, ClickHouse
      8. Docker, Kubernetes
      9. Electron
      10. Airtable, n8n, supabase
      `,
    highlights: [
      "1. Computer professional background, 13 years of Java development experience, bachelor's degree",
      '2. Experience with J2EE, Spring Framework, Spring Boot, Spring Cloud, REST API, Json and XML parsers',
      '3. Skilled at Html, CSS, Javascript, jquery, Typescript, Vue, React',
      '4. Skilled at Node.js(My nodejs repository: https://github.com/chengqun2/node-connect-linux.git)',
      '5. Skilled at BlockChain (My BlockChain repository: https://github.com/chengqun2/node-blockchain.git)',
      '6. Familiar with Docker and Kubernetes (My repository: https://github.com/chengqun2/kubernetes-example.git)',
      '7. Experience working in LINUX environment',
      '8. Experience with Python(Flask, Django framework)',
      '9. Skilled at Mysql, Oracle, Postgresql, Redis, MongoDB, Elasticsearch',
      '10. Skilled at message queues (kafka, RabbitMQ, ActiveMQ etc.)',
    ],
  },
];

export default work;
