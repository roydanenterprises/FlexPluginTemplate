import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';



const PLUGIN_NAME = '{{pluginClassName}}';

export default class TypeScriptDemoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    console.log('hell world');
  }
}
