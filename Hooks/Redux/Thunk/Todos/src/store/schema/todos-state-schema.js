const schema = {
  $schema: 'http://json-schema.org/draft-07/schema',
  $id: 'http://example.com/example.json',
  type: 'object',
  title: 'The root schema',
  description: 'The root schema comprises the entire JSON document.',
  default: {},
  examples: [
    {
      loading: false,
      todos: [
        {
          id: 1,
          userId: 1,
          title: 'delectus aut autem',
          completed: false,
        },
      ],
      error: '',
    },
  ],
  required: ['loading', 'todos', 'error'],
  properties: {
    loading: {
      $id: '#/properties/loading',
      type: 'boolean',
      title: 'The loading schema',
      description: 'An explanation about the purpose of this instance.',
      default: false,
      examples: [false],
    },
    todos: {
      $id: '#/properties/todos',
      type: 'array',
      title: 'The todos schema',
      description: 'An explanation about the purpose of this instance.',
      default: [],
      examples: [
        [
          {
            id: 1,
            userId: 1,
            title: 'delectus aut autem',
            completed: false,
          },
        ],
      ],
      additionalItems: true,
      items: {
        $id: '#/properties/todos/items',
        anyOf: [
          {
            $id: '#/properties/todos/items/anyOf/0',
            type: 'object',
            title: 'The first anyOf schema',
            description: 'An explanation about the purpose of this instance.',
            default: {},
            examples: [
              {
                id: 1,
                userId: 1,
                title: 'delectus aut autem',
                completed: false,
              },
            ],
            required: ['id', 'userId', 'title', 'completed'],
            properties: {
              id: {
                $id: '#/properties/todos/items/anyOf/0/properties/id',
                type: 'integer',
                title: 'The id schema',
                description:
                  'An explanation about the purpose of this instance.',
                default: 0,
                examples: [1],
              },
              userId: {
                $id: '#/properties/todos/items/anyOf/0/properties/userId',
                type: 'integer',
                title: 'The userId schema',
                description:
                  'An explanation about the purpose of this instance.',
                default: 0,
                examples: [1],
              },
              title: {
                $id: '#/properties/todos/items/anyOf/0/properties/title',
                type: 'string',
                title: 'The title schema',
                description:
                  'An explanation about the purpose of this instance.',
                default: '',
                examples: ['delectus aut autem'],
              },
              completed: {
                $id: '#/properties/todos/items/anyOf/0/properties/completed',
                type: 'boolean',
                title: 'The completed schema',
                description:
                  'An explanation about the purpose of this instance.',
                default: false,
                examples: [false],
              },
            },
            additionalProperties: true,
          },
        ],
      },
    },
    error: {
      $id: '#/properties/error',
      type: 'string',
      title: 'The error schema',
      description: 'An explanation about the purpose of this instance.',
      default: '',
      examples: [''],
    },
  },
  additionalProperties: true,
};

export default schema;
