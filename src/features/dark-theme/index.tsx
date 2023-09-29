'use client'

import React, { useEffect, useState } from 'react'
import { Switch } from '~/shared/ui/switch'
import { Label } from '~/shared/ui/label'
import { Theme } from '~/features/dark-theme/types'
import { getCookies, setCookies } from '~/shared/lib/cookies'

interface Props {
	theme: Theme
}

export const ThemeSwitcher = ({ theme }: Props) => {
	const [currentTheme, setCurrentTheme] = useState(
		getCookies('theme') || theme
	)

	useEffect(() => {
		const root = document.documentElement
		root.classList.remove(Theme.light, Theme.dark)
		root.classList.add(currentTheme)
		root.style.colorScheme = currentTheme
		setCookies('theme', currentTheme)
	}, [currentTheme])

	const toggleTheme = () => {
		setCurrentTheme((prevTheme) =>
			prevTheme === Theme.light ? Theme.dark : Theme.light
		)
	}

	return (
		<div className='flex items-center space-x-2'>
			<Switch
				id='dark-mode'
				defaultChecked={currentTheme === Theme.dark}
				onClick={toggleTheme}
			/>
			<Label htmlFor='dark-mode'>Темная тема</Label>
		</div>
	)
}
