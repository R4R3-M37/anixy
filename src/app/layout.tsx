import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { Theme } from '~/features/dark-theme/types'
import { BottomNavbar } from '~/widgets/bottom-navbar/bottom-navbar'

const nunito = Nunito({
	weight: ['200', '300', '400', '500', '700', '900'],
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: ReactNode }) {
	const theme =
		cookies().get('theme')?.value === 'dark' ? Theme.dark : Theme.light

	return (
		<html lang='en' className={theme} style={{ colorScheme: theme }}>
			<body className={nunito.className}>
				{children}
				<BottomNavbar />
			</body>
		</html>
	)
}
