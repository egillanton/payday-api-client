# payday-api-client
A JavaScript / TypeScript API Client for Payday

## Overview

`payday-api-client` is a library that allows you to interact with the Payday API using TypeScript and JavaScript. It provides a type-safe interface that helps prevent common programming errors, and makes it easier to work with the API.

## Installation

```bash
npm install @egillanton/payday-api-client
```

## Usage

To use payday-api-client, you need to first create an instance of the PaydayApiClient class. You can then use this instance to make requests to the Payday API.

JavaScript using promises:

```javascript
const paydayApiClient = require('payday-api-client');
const PaydayAPIClient = paydayApiClient.PaydayAPIClient;
const PaydayAPIClientConfiguration = paydayApiClient.PaydayAPIClientConfiguration;
const CreateBearerTokenRequest = paydayApiClient.CreateBearerTokenRequest;

const config = {
    environment: 'production'
};

const client = new PaydayAPIClient(new PaydayAPIClientConfiguration(config));

const createBearerTokenRequest = {
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret'
};

client.createBearerToken(createBearerTokenRequest).then((response) => {
    console.log(response.token);
}).catch((error) => {
    console.error(error);
});
```


JavaScript using async/await:

```javascript
const paydayApiClient = require('payday-api-client');
const PaydayAPIClient = paydayApiClient.PaydayAPIClient;
const PaydayAPIClientConfiguration = paydayApiClient.PaydayAPIClientConfiguration;
const CreateBearerTokenRequest = paydayApiClient.CreateBearerTokenRequest;

const config = {
    environment: 'production'
};

const client = new PaydayAPIClient(new PaydayAPIClientConfiguration(config));

const createBearerTokenRequest = {
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret'
};

async function createBearerToken() {
    try {
        const response = await client.createBearerToken(createBearerTokenRequest);
        console.log(response.token);
    } catch (error) {
        console.error(error);
    }
}

createBearerToken();
```

TypeScript using promises:

```typescript
import { PaydayAPIClient, PaydayAPIClientConfiguration, PaydayAPIClientBaseURL } from 'payday-api-client';
import { CreateBearerTokenRequest } from 'payday-api-client/requests';
import { CreateBearerToken200Response } from 'payday-api-client/responses';

const config: PaydayAPIClientConfiguration = {
    environment: 'production'
}

const client = new PaydayAPIClient(config);

const createBearerTokenRequest: CreateBearerTokenRequest = {
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret'
};

client.createBearerToken(createBearerTokenRequest).then((response: CreateBearerToken200Response) => {
    console.log(response.token);
}).catch((error: Error) => {
    console.error(error);
});
```

TypeScript using async/await:

```typescript
import { PaydayAPIClient, PaydayAPIClientConfiguration } from 'payday-api-client';
import { CreateBearerTokenRequest } from 'payday-api-client/requests';
import { CreateBearerToken200Response } from 'payday-api-client/responses';

const config: PaydayAPIClientConfiguration = {
    environment: 'production'
};

const client = new PaydayAPIClient(config);

const createBearerTokenRequest: CreateBearerTokenRequest = {
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret'
};

async function createBearerToken() {
    try {
        const response: CreateBearerToken200Response = await client.createBearerToken(createBearerTokenRequest);
        console.log(response.token);
    } catch (error) {
        console.error(error);
    }
}

createBearerToken();
```