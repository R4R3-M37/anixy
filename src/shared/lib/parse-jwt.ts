export const parseJwt = (token: string | undefined) => {
	if (!token) return

	if (typeof window === 'undefined') {
		return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
	}

	const base64Url = token.split('.')[1]
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
	const jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
			})
			.join('')
	)

	return JSON.parse(jsonPayload)
}
