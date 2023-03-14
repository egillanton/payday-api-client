import { CreateBearerToken200Response } from './responses'
import { CreateBearerTokenRequest } from './requests'
import fetch from 'node-fetch'

export const PaydayAPIClientBaseURL = {
    production: 'https://api.paydayapp.com',
    test: 'https://api.test.payday.com',
}

export interface PaydayAPIClientConfiguration {
    environment: keyof typeof PaydayAPIClientBaseURL
}

export class PaydayAPIClient {
    private readonly config: PaydayAPIClientConfiguration

    constructor(config: PaydayAPIClientConfiguration) {
        if (!config) {
            throw new Error('Missing configuration.')
        }
        if (!config.environment) {
            throw new Error('Missing environment in configuration.')
        }
        if (!PaydayAPIClientBaseURL[config.environment]) {
            throw new Error(`Invalid environment in configuration: ${config.environment}`)
        }

        this.config = config
    }

    public async createBearerToken(request: CreateBearerTokenRequest): Promise<CreateBearerToken200Response> {
        const baseUrl = PaydayAPIClientBaseURL[this.config.environment]
        const response = await fetch(`${baseUrl}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Version': 'alpha',
            },
            body: JSON.stringify(request),
        })

        if (response.status === 200) {
            const data = (await response.json()) as CreateBearerToken200Response
            return data
        } else {
            throw new Error(`Failed to create bearer token. Status code: ${response.status}`)
        }
    }
}
