import React from 'react';

const TechStackSection = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: 'NextJS, React, React Native, Three.js, D3.js, Mermaid, p5.js, Framer, shadcN, Tailwind CSS'
    },
    {
      category: 'Backend',
      technologies: 'TypeScript, Python, Go, Express, Zod, Docker, AWS (SST/S3/EC2/Lambda), Vercel'
    },
    {
      category: 'AI Engineering',
      technologies: 'RAG, Embeddings, Vector Search, Agents, Prompt Engineering, OpenAI, Anthropic'
    },
    {
      category: 'Databases',
      technologies: 'PostgreSQL, Redis'
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">TECH STACK</h2>
      <ul className="list-disc pl-6">
        {techCategories.map((tech, index) => (
          <li key={index} className="mb-2">
            <span className="font-semibold">{tech.category}:</span> {tech.technologies}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TechStackSection;