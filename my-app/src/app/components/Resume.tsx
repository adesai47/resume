import React from 'react';
import ExperienceSection from '../sections/ExperienceSection';
import TechStackSection from '../sections/TechStackSection';
import EducationSection from '../sections/EducationSection';
import Header from './Header';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <Header />
      <ExperienceSection />
      <TechStackSection />
      <EducationSection />
    </div>
  );
};

export default Resume;