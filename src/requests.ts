export interface Request {
    [key: string]: any
}

export interface CreateBearerTokenRequest extends Request {
    clientId: string
    clientSecret: string
}
