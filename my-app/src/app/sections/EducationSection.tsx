import React from 'react';

const EducationSection = () => {
  const education = [
    {
      title: 'Computer Science',
      institution: 'Cypress College',
      date: '2023 - Present',
      description: 'Currently pursuing an Associate\'s degree in Computer Science with intent to transfer to the University of California system. Maintaining a strong academic record while focusing on core computer science fundamentals and mathematics prerequisites for transfer.',
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">
              {edu.title} | {edu.institution}
            </h3>
            {edu.date && (
              <span className="text-gray-600">{edu.date}</span>
            )}
          </div>
          {edu.description && (
            <p className="text-gray-700 mb-2">{edu.description}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default EducationSection;