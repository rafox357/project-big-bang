import React, { useState } from 'react';

interface GuideStep {
  title: string;
  content: string;
  code?: string;
  image?: string;
}

interface GuideSection {
  title: string;
  steps: GuideStep[];
}

interface ProjectGuideProps {
  title: string;
  description: string;
  sections: GuideSection[];
}

export default function ProjectGuide({ title, description, sections }: ProjectGuideProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const currentSection = sections[activeSection];
  const currentStep = currentSection.steps[activeStep];

  const nextStep = () => {
    if (activeStep < currentSection.steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else if (activeSection < sections.length - 1) {
      setActiveSection(activeSection + 1);
      setActiveStep(0);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      setActiveStep(sections[activeSection - 1].steps.length - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-accent-light mb-4">{title}</h1>
      <p className="text-accent-light/90 mb-8">{description}</p>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {sections.map((section, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveSection(idx);
                setActiveStep(0);
              }}
              className={`text-sm font-medium ${
                idx === activeSection ? 'text-accent' : 'text-accent-light/60'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="h-2 bg-background-dark rounded-full">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{
              width: `${
                ((activeSection * currentSection.steps.length + activeStep + 1) /
                  (sections.length * currentSection.steps.length)) *
                100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-background-dark rounded-lg border border-accent/20 p-6 mb-8">
        <h3 className="text-xl font-semibold text-accent-light mb-4">
          {currentStep.title}
        </h3>
        <div className="prose prose-invert max-w-none mb-6">
          <p>{currentStep.content}</p>
        </div>
        
        {currentStep.code && (
          <div className="mt-4">
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-accent hover:text-accent-light mb-2"
            >
              {showCode ? 'Hide Code' : 'Show Code'}
            </button>
            {showCode && (
              <pre className="bg-[#1a1b26] p-4 rounded-lg overflow-x-auto">
                <code className="text-accent-light">{currentStep.code}</code>
              </pre>
            )}
          </div>
        )}

        {currentStep.image && (
          <img
            src={currentStep.image}
            alt={currentStep.title}
            className="mt-4 rounded-lg border border-accent/20"
          />
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={activeSection === 0 && activeStep === 0}
          className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={
            activeSection === sections.length - 1 &&
            activeStep === currentSection.steps.length - 1
          }
          className="px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
