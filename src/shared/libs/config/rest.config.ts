import { Logger } from '../logger/logger.interface.js';
import { Config } from './config.interface.js';
import { config } from 'dotenv';
import { RestSchema, configRestSchema } from './rest.schema.js';


export class RestConfig implements Config<RestSchema> {
  private readonly config: RestSchema;

  constructor(
    private readonly logger: Logger
  ) {
    const parsedOutput = config();
    if (parsedOutput.error) {
      throw new Error('Can\'t parse .env file. Perhaps the file doesn\'t not exist');
    }
    configRestSchema.load({});
    configRestSchema.validate({allowed: 'strict', output: this.logger.info});
    this.config = configRestSchema.getProperties();
    this.logger.info('Successfully parsed .env file!');
  }

  public get<T extends keyof RestSchema>(key: T): RestSchema[T] {
    return this.config[key];
  }
}
