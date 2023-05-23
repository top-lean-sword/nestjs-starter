import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { GqlConfig } from '../../common/config/gql.config';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), GqlConfig.autoGeneratedGqlFile),
  outputAs: 'class',
});
