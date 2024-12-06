import 'reflect-metadata'

import path from 'node:path'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'

import { AppointmentsResolvers } from './resolvers/appointments-resolvers'

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolvers],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({
    schema,
  })

  const { url } = await server.listen()

  console.log(`🚀 HTTP server running on ${url}`)
}

bootstrap()
