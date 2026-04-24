// Portfolio configuration based on build-time environment variable
// Defaults to 'fullstack' if not set

type PortfolioType = 'fullstack' | 'frontend' | 'senior' | 'ai';

const portfolioType: PortfolioType =
  (import.meta.env.VITE_PORTFOLIO_TYPE as PortfolioType) || 'fullstack';

export const isFullStack = portfolioType === 'fullstack';
export const isFrontend = portfolioType === 'frontend';
export const isSenior = portfolioType === 'senior';
export const isAI = portfolioType === 'ai';

// Senior uses same content as fullstack
const useFullStackContent = isFullStack || isSenior;

export const config = {
  type: portfolioType,
  isFullStack,
  isFrontend,
  isSenior,
  isAI,

  // Titles and headings
  title: isAI
    ? 'Senior AI Engineer'
    : isSenior
      ? 'Senior Software Engineer'
      : isFullStack
        ? 'Full Stack Developer'
        : 'Front End Developer',

  metaDescription: isAI
    ? 'Senior AI Engineer building agentic AI systems, LLM applications, and production-grade AI agents with modern AI engineering tools.'
    : isSenior
      ? 'Senior Software Engineer crafting high performance web applications with modern technologies.'
      : isFullStack
        ? 'Full Stack Developer crafting high performance web applications with modern technologies.'
        : 'Front End Developer crafting high performance web applications with modern technologies.',

  // Hero section — renders as: {heroSubtitle} <em>{heroEmphasis}</em> {heroTail}
  heroSubtitle: isAI
    ? 'Senior AI Engineer experienced in engineering'
    : isSenior
      ? 'Senior Software Engineer crafting'
      : isFullStack
        ? 'Full Stack Developer crafting'
        : 'Front End Developer crafting',

  // Emphasised phrase in the middle of the hero paragraph
  heroEmphasis: isAI ? 'agentic AI systems' : 'high performance',

  // Tail phrase after the emphasised span
  heroTail: isAI
    ? 'and LLM applications with modern tools.'
    : 'web applications with modern technologies.',

  // Tech stack pills (hero section)
  techStack: isAI
    ? ['LLMs', 'AI Agents', 'Python', 'Prompt Engineering', 'Machine Learning', 'RAG', 'AWS', 'TypeScript']
    : useFullStackContent
      ? ['React', 'Ruby on Rails', 'Node.js', 'TypeScript', 'GraphQL', 'Next.js', 'AWS', 'Google Cloud']
      : ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git'],

  // Skills section - main categories
  skillCategories: isAI
    ? [
        {
          title: 'AI Engineering',
          skills: [
            { name: 'Python', level: 90 },
            { name: 'LLMs & Prompt Engineering', level: 92 },
            { name: 'Machine Learning', level: 82 },
            { name: 'Agent SDKs (OpenAI, MCP)', level: 90 },
          ],
        },
        {
          title: 'Agentic Systems & RAG',
          skills: [
            { name: 'AI Agents', level: 92 },
            { name: 'RAG Pipelines', level: 88 },
            { name: 'LangChain / LangGraph', level: 85 },
            { name: 'pgvector / Vector DBs', level: 85 },
          ],
        },
        {
          title: 'Production & Infrastructure',
          skills: [
            { name: 'AWS', level: 85 },
            { name: 'TypeScript / Node.js', level: 92 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'Docker / CI-CD', level: 88 },
          ],
        },
      ]
    : useFullStackContent
      ? [
          {
            title: 'Frontend',
            skills: [
              { name: 'React', level: 95 },
              { name: 'TypeScript', level: 90 },
              { name: 'Next.js', level: 88 },
              { name: 'Tailwind CSS', level: 92 },
            ],
          },
          {
            title: 'Backend',
            skills: [
              { name: 'Ruby on Rails', level: 88 },
              { name: 'Node.js', level: 92 },
              { name: 'PostgreSQL', level: 85 },
              { name: 'GraphQL', level: 85 },
            ],
          },
          {
            title: 'Tools & DevOps',
            skills: [
              { name: 'Git', level: 92 },
              { name: 'Docker', level: 80 },
              { name: 'AWS / GCP', level: 78 },
              { name: 'CI/CD', level: 85 },
            ],
          },
        ]
      : [
          {
            title: 'Core Technologies',
            skills: [
              { name: 'React', level: 95 },
              { name: 'TypeScript', level: 90 },
              { name: 'JavaScript', level: 95 },
              { name: 'Next.js', level: 88 },
            ],
          },
          {
            title: 'Styling & UI',
            skills: [
              { name: 'Tailwind CSS', level: 92 },
              { name: 'CSS3 / Sass', level: 90 },
              { name: 'Responsive Design', level: 92 },
              { name: 'HTML5', level: 95 },
            ],
          },
          {
            title: 'Tools & Workflow',
            skills: [
              { name: 'Git', level: 92 },
              { name: 'Vite / Webpack', level: 85 },
              { name: 'Jest / RTL', level: 82 },
              { name: 'REST APIs', level: 88 },
            ],
          },
        ],

  // Projects section subtitle (default used when not overridden)
  projectsSubtitle: isAI
    ? 'A selection of recent AI-focused applications showcasing my approach to building production agentic AI systems.'
    : 'A selection of recent projects showcasing my approach to building scalable, user-focused applications.',

  // AI-specific projects list (other variants use the hardcoded list in Projects.tsx)
  aiProjects: [
    {
      title: 'SEO Blab - Agentic AI platform with MCP + OpenAI Agent SDK',
      description: 'Production agentic AI platform built on the OpenAI Agent SDK, featuring two MCP servers and 85+ custom tools. LLM-powered chat with streaming responses, multi-provider integration (OpenAI, Claude, Gemini, xAI), and Supabase backend with row-level security.',
      tech: ['OpenAI Agent SDK', 'MCP', 'LLMs', 'TypeScript', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://www.seoblab.com',
      githubUrl: null,
      featured: true,
    },
    {
      title: 'Keyword Grid - Word embedding + semantic scoring SaaS',
      description: 'Data-intensive SEO analytics platform using word vector embeddings for semantic keyword scoring. Python backend with custom ML scoring pipeline, authentication, role-based access, and subscription billing.',
      tech: ['Python', 'Word Embeddings', 'Machine Learning', 'PostgreSQL', 'pgvector', 'React'],
      liveUrl: 'https://www.keywordgrid.com',
      githubUrl: null,
      featured: true,
    },
    {
      title: 'LLM Chat Interface',
      description: 'LLM-powered chat interface with real-time streaming responses, responsive front-end components, and comprehensive unit and integration testing.',
      tech: ['LLMs', 'React', 'TypeScript', 'Jest', 'REST APIs'],
      liveUrl: 'https://www.seoblab.com',
      githubUrl: null,
      featured: false,
    },
    {
      title: 'CI/CD Pipeline for AI Systems',
      description: 'Automated deployment pipeline with GitHub Actions and Cloud Build for continuous testing, evals, and deployments of AI-powered services.',
      tech: ['GitHub Actions', 'Docker', 'Node.js', 'AI Evals'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
    },
    {
      title: 'Block Distracting Websites',
      description: 'Chrome extension that blocks distracting websites and replaces them with motivational quotes.',
      tech: ['TypeScript', 'Chrome Extension', 'HTML', 'CSS'],
      liveUrl: null,
      githubUrl: 'https://github.com/justinmarkdaniel/block-distracting-websites',
      featured: false,
    },
    {
      title: 'Negative News Filter',
      description: 'Chrome extension that applies NLP and sentiment analysis to detect negative news headlines and rewrites them into positive ones with LLMs. Filters 100+ news sites automatically.',
      tech: ['NLP', 'Sentiment Analysis', 'LLMs', 'TypeScript', 'Chrome Extension'],
      liveUrl: null,
      githubUrl: 'https://github.com/justinmarkdaniel/negative-news-filter',
      featured: false,
    },
  ],

  // Additional technologies (skills section)
  additionalTech: isAI
    ? ['OpenAI API', 'Anthropic Claude', 'Google Gemini', 'LangChain', 'LangGraph', 'MCP (Model Context Protocol)', 'Embeddings & Semantic Search', 'pgvector', 'AI Evals', 'Supabase', 'PostgreSQL', 'FastAPI', 'GitHub Actions', 'Stripe']
    : useFullStackContent
      ? ['TypeScript', 'REST APIs', 'Redis', 'MySQL', 'MongoDB', 'Jest', 'RSpec', 'GitHub Actions', 'Stripe', 'Docker', 'Sidekiq']
      : ['HTML5', 'CSS3', 'REST APIs', 'Responsive Design', 'Accessibility (WCAG)', 'Web Performance', 'CI/CD'],
};

export default config;
