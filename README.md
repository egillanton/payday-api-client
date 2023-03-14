# Unofficial Payday Node.js Library

The Payday Node.js library provides convenient access to the Payday API from Node.js applications.
Most of the code in this library is generated from the [Payday API specification](https://apidoc.payday.is/)

**Important note: this library is meant for server-side usage only, as using it in client-side browser code will expose your secret API key.**

## Installation

```bash
npm install payday-node
```

## Usage

To use payday-node API Client, you need to first create an instance of the PaydayApiClient class. You can then use this instance to make requests to the Payday API.

TypeScript:

```typescript
import { PaydayAPIClient, PaydayAPIClientConfiguration } from 'payday-node';
import { CreateBearerTokenRequest } from 'payday-node/requests';
import { CreateBearerToken200Response } from 'payday-node/responses';

const config: PaydayAPIClientConfiguration = {
    environment: 'production'
};

const payday = new PaydayAPIClient(config);

const request: CreateBearerTokenRequest = {
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret'
};

const response: CreateBearerToken200Response = await payday.createBearerToken(request);
console.log(response.token);
```

### Error handling

API requests can potentially return errors due to invalid inputs or other issues. These errors can be handled with a `try...catch` statement, and the error details can be found in either `error.response` or `error.message`:

```typescript
try {
  const response = await payday.createBearerToken({
        clientId: 'your_client_id',
        clientSecret: 'your_client_secret'
  });
  console.log(response.token);
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
```
