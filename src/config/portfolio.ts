// Portfolio configuration based on build-time environment variable
// Defaults to 'fullstack' if not set

type PortfolioType = 'fullstack' | 'frontend';

const portfolioType: PortfolioType =
  (import.meta.env.VITE_PORTFOLIO_TYPE as PortfolioType) || 'fullstack';

export const isFullStack = portfolioType === 'fullstack';
export const isFrontend = portfolioType === 'frontend';

export const config = {
  type: portfolioType,
  isFullStack,
  isFrontend,

  // Titles and headings
  title: isFullStack
    ? 'Full Stack TypeScript Developer'
    : 'Front End Developer',

  metaDescription: isFullStack
    ? 'Full Stack TypeScript Developer crafting performant, scalable web applications with React, Node.js, TypeScript, and modern technologies.'
    : 'Front End Developer crafting performant, responsive web applications with React, TypeScript, and modern UI technologies.',

  // Hero section
  heroSubtitle: isFullStack
    ? 'Full Stack TypeScript Developer crafting performant,'
    : 'Front End Developer crafting performant,',

  // Tech stack pills (hero section)
  techStack: isFullStack
    ? ['React', 'Node.js', 'TypeScript', 'JavaScript', 'Next.js', 'SQL', 'AWS', 'Google Cloud']
    : ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],

  // Skills section - main categories
  skillCategories: isFullStack
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
            { name: 'Node.js', level: 92 },
            { name: 'Express', level: 88 },
            { name: 'PostgreSQL', level: 85 },
            { name: 'PHP', level: 95 },
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
            { name: 'CSS3', level: 95 },
            { name: 'Responsive Design', level: 90 },
            { name: 'Animations', level: 85 },
          ],
        },
        {
          title: 'Tools & Testing',
          skills: [
            { name: 'Git', level: 92 },
            { name: 'Jest', level: 85 },
            { name: 'Webpack/Vite', level: 80 },
            { name: 'Figma', level: 75 },
          ],
        },
      ],

  // Additional technologies (skills section)
  additionalTech: isFullStack
    ? ['TypeScript', 'HTML5', 'CSS3', 'REST APIs', 'MySQL', 'MongoDB', 'Jest', 'GitHub Actions', 'Stripe', 'Responsive Design', 'Accessibility (WCAG)']
    : ['HTML5', 'CSS3', 'REST APIs', 'Jest', 'Storybook', 'Responsive Design', 'Accessibility (WCAG)', 'Web Performance', 'SEO'],
};

export default config;
