import React from 'react';

const TechStackSection = () => {
  const techCategories = [
    {
      category: 'Frontend',
      technologies: 'React, Tailwind CSS, Vite, Framer'
    },
    {
      category: 'Backend',
      technologies: 'Node.js, Go, Python, Express, Prisma, Bun, Zod, Zodios'
    },
    // Add other categories
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