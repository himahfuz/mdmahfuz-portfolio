import { type SchemaTypeDefinition } from 'sanity'

import { learningType } from './learning'
import { toolType } from './tool'
import { blogType } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [learningType, toolType, blogType],
}
