import MessengerDemo from '../components/interactive/MessengerDemo';

export const demoComponentIds = ['secure-messaging-app'] as const;
export type DemoComponentId = typeof demoComponentIds[number];

export const demoComponents: Record<DemoComponentId, React.ComponentType> = {
  'secure-messaging-app': MessengerDemo,
} as const;
