import type { CodeExample } from '../types';

export const codeExamples: CodeExample[] = [
  {
    id: 'home-hub-integration',
    title: 'Home Hub Integration',
    description: 'Example implementation of device integration with the Home Hub',
    code: `
// Home Hub Device Integration Example
import { HomeHub, Device, SecurityProtocol } from '@project-bigbang/core';

class SmartDevice implements Device {
  async connect(hub: HomeHub) {
    // Establish secure connection
    const protocol = new SecurityProtocol({
      encryption: 'AES-256-GCM',
      authentication: 'ED25519'
    });

    // Register device with hub
    await hub.registerDevice({
      id: this.deviceId,
      capabilities: this.getCapabilities(),
      securityProtocol: protocol
    });
  }

  // Implementation details...
}`,
    explanation: [
      'Demonstrates secure device registration',
      'Shows encryption protocol implementation',
      'Illustrates capability declaration'
    ]
  },
  {
    id: 'local-ai-processing',
    title: 'Local AI Processing',
    description: 'Example of running AI models locally on the Home Hub',
    code: `
// Local AI Processing Example
import { AIProcessor, Model, DataPrivacy } from '@project-bigbang/ai';

class LocalImageProcessor {
  private model: Model;
  private privacy: DataPrivacy;

  async initialize() {
    // Load model locally
    this.model = await Model.load({
      path: '/models/image-recognition',
      type: 'tensorflowjs',
      privacy: new DataPrivacy({ mode: 'strict' })
    });
  }

  async process(image: ImageData) {
    // Process image locally without external services
    return this.model.predict(image);
  }
}`,
    explanation: [
      'Shows local model loading',
      'Implements privacy controls',
      'Demonstrates offline processing'
    ]
  }
];