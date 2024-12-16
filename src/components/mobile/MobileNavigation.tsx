import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  navigation: {
    label: string;
    href: string;
    icon?: string;
    children?: { label: string; href: string; }[];
  }[];
}

export default function MobileNavigation({ navigation }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-accent-light p-2"
        aria-label="Open navigation menu"
      >
        <span className="sr-only">Open menu</span>
        ☰
      </button>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            as={motion.div}
            static
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 md:hidden"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#1a1b26] shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-accent/20">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-accent-light"
                    aria-label="Close navigation menu"
                  >
                    ✕
                  </button>
                </div>

                <nav className="flex-1 overflow-y-auto p-4">
                  {navigation.map((item) => (
                    <div key={item.label} className="mb-4">
                      {item.children ? (
                        <>
                          <button
                            onClick={() => setActiveSection(activeSection === item.label ? null : item.label)}
                            className="flex items-center justify-between w-full text-accent-light p-2"
                          >
                            <span className="flex items-center gap-2">
                              {item.icon && <span>{item.icon}</span>}
                              {item.label}
                            </span>
                            <span>{activeSection === item.label ? '−' : '+'}</span>
                          </button>
                          
                          <AnimatePresence>
                            {activeSection === item.label && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                {item.children.map((child) => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    className="block text-accent-light/80 p-2 pl-8 hover:bg-accent/10"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center gap-2 text-accent-light p-2 hover:bg-accent/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon && <span>{item.icon}</span>}
                          {item.label}
                        </a>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}