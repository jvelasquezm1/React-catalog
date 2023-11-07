const fs = require('fs');
const fetch = require('cross-fetch');
const API_ENDPOINT = 'http://localhost:3000';

fetch(`${API_ENDPOINT}/graphql`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
          }
        }
      }
    `,
  }),
}).then((result) => result.json());
