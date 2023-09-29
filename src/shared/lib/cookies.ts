export const getCookies = (cookieName: string): string | undefined => {
	let cookie: { [key: string]: string } = {}

	if (typeof document === 'undefined') return undefined

	document.cookie.split(';').forEach((el) => {
		let [key, value]: any = el.split('=')
		cookie[key.trim()] = value
	})

	return cookie[cookieName]
}

export const setCookies = (name: string, value: string, expires?: Date) => {
	let cookie = `${name}=${value}; path=/`

	if (expires) {
		cookie += `; expires=${expires.toUTCString()}`
	}

	document.cookie = cookie
}
