export interface CreateBearerToken200Response extends Response {
	accessToken: string,
	tokenType: "bearer",
	expiresIn: number,
	createdAt: number
}