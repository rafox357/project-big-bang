import React from 'react';
import { useA11y } from './A11yProvider';

export default function A11yControls() {
  const { preferences, actions } = useA11y();

  return (
    <div
      role="region"
      aria-label="Accessibility Controls"
      className="fixed bottom-4 left-4 z-50 bg-[#1a1b26]/90 backdrop-blur-sm p-4 rounded-lg border border-accent/20 shadow-lg"
    >
      <div className="flex flex-col gap-3">
        <button
          onClick={actions.toggleHighContrast}
          className="a11y-btn"
          aria-pressed={preferences.highContrast}
        >
          <span className="sr-only">Toggle High Contrast</span>
          <span aria-hidden="true">🎨</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={actions.decreaseFontSize}
            className="a11y-btn"
            aria-label="Decrease font size"
            disabled={preferences.fontSize <= 12}
          >
            A-
          </button>
          <button
            onClick={actions.increaseFontSize}
            className="a11y-btn"
            aria-label="Increase font size"
            disabled={preferences.fontSize >= 24}
          >
            A+
          </button>
        </div>

        <button
          onClick={actions.toggleReducedMotion}
          className="a11y-btn"
          aria-pressed={preferences.reducedMotion}
        >
          <span className="sr-only">Toggle Reduced Motion</span>
          <span aria-hidden="true">🎬</span>
        </button>
      </div>
    </div>
  );
}