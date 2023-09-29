import { ThemeSwitcher } from '~/features/dark-theme'
import { cookies } from 'next/headers'
import { Theme } from '~/features/dark-theme/types'

export default function Home() {
	const theme =
		cookies().get('theme')?.value === 'dark' ? Theme.dark : Theme.light

	return (
		<main className=''>
			<ThemeSwitcher theme={theme} />
		</main>
	)
}
