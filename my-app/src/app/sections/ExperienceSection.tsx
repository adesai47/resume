import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Fractal Tech',
      date: '2024',
      description: 'Built and deployed 40 full-stack apps, ripped 1404 commits and 288 PRs, with 800 hours of hands-on-keys.',
      projects: [
        'BlockJump: A 3D parkour game with fun levels, unique levels',
        'Fringe: A job-searching app for software engineers and companies to find what they are looking for with a swipe',
        'Snack Safari: An e-commerce website for food enthusiasts to ship unique food from all over the world'
      ]
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">EXPERIENCE</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">
              {exp.title} | {exp.company}
            </h3>
            <span className="text-gray-600">{exp.date}</span>
          </div>
          <p className="text-gray-700">{exp.description}</p>
          {exp.projects && (
            <ul className="list-disc pl-6 mt-2">
              {exp.projects.map((project, pIndex) => (
                <li key={pIndex} className="text-gray-700">{project}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;