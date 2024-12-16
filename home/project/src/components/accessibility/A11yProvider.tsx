import React, { createContext, useState, useEffect } from 'react';

// Separate interfaces for context and preferences
interface A11yPreferences {
  highContrast: boolean;
  fontSize: number;
  reducedMotion: boolean;
}

export interface A11yContextType {
  preferences: A11yPreferences;
  actions: {
    toggleHighContrast: () => void;
    increaseFontSize: () => void;
    decreaseFontSize: () => void;
    toggleReducedMotion: () => void;
  };
}

// Create context with a default value
const defaultPreferences: A11yPreferences = {
  highContrast: false,
  fontSize: 16,
  reducedMotion: false,
};

const defaultContext: A11yContextType = {
  preferences: defaultPreferences,
  actions: {
    toggleHighContrast: () => {},
    increaseFontSize: () => {},
    decreaseFontSize: () => {},
    toggleReducedMotion: () => {},
  },
};

export const A11yContext = createContext<A11yContextType>(defaultContext);

// Custom hook for accessing accessibility context
export function useA11y() {
  const context = React.useContext(A11yContext);
  if (!context) {
    throw new Error('useA11y must be used within an A11yProvider');
  }
  return context;
}

interface A11yProviderProps {
  children: React.ReactNode;
}

export function A11yProvider({ children }: A11yProviderProps) {
  // State management
  const [preferences, setPreferences] = useState<A11yPreferences>(defaultPreferences);

  // Load preferences on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const savedPrefs = localStorage.getItem('a11yPreferences');
      if (savedPrefs) {
        const parsedPrefs = JSON.parse(savedPrefs);
        setPreferences({
          highContrast: parsedPrefs.highContrast ?? defaultPreferences.highContrast,
          fontSize: parsedPrefs.fontSize ?? defaultPreferences.fontSize,
          reducedMotion: parsedPrefs.reducedMotion ?? defaultPreferences.reducedMotion,
        });
      }
    } catch (error) {
      console.error('Failed to load accessibility preferences:', error);
    }
  }, []);

  // Save preferences when they change
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem('a11yPreferences', JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save accessibility preferences:', error);
    }
  }, [preferences]);

  // Action handlers
  const actions = {
    toggleHighContrast: () => {
      setPreferences(prev => ({
        ...prev,
        highContrast: !prev.highContrast,
      }));
    },
    increaseFontSize: () => {
      setPreferences(prev => ({
        ...prev,
        fontSize: Math.min(prev.fontSize + 2, 24),
      }));
    },
    decreaseFontSize: () => {
      setPreferences(prev => ({
        ...prev,
        fontSize: Math.max(prev.fontSize - 2, 12),
      }));
    },
    toggleReducedMotion: () => {
      setPreferences(prev => ({
        ...prev,
        reducedMotion: !prev.reducedMotion,
      }));
    },
  };

  // Context value
  const value = {
    preferences,
    actions,
  };

  return (
    <A11yContext.Provider value={value}>
      <div
        style={{ fontSize: `${preferences.fontSize}px` }}
        className={`
          ${preferences.highContrast ? 'high-contrast' : ''}
          ${preferences.reducedMotion ? 'reduce-motion' : ''}
        `}
      >
        {children}
      </div>
    </A11yContext.Provider>
  );
}