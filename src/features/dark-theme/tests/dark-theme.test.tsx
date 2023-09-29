import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Theme } from '~/features/dark-theme/types'
import { getCookie } from '~/shared/lib/get-cookie'
import { setCookie } from '~/shared/lib/set-cookie'
import { ThemeSwitcher } from '~/features/dark-theme'

jest.mock('../../../shared/lib/set-cookie')
jest.mock('../../../shared/lib/get-cookie')
const getCookieMock = getCookie as jest.MockedFunction<typeof getCookie>
const setCookieMock = setCookie as jest.MockedFunction<typeof setCookie>

describe('ThemeSwitcher', () => {
	const root = document.documentElement
	root.id = 'root'

	beforeEach(() => {
		getCookieMock.mockReset()
		setCookieMock.mockReset()
		root.className = 'light'
	})

	it('should render correctly', () => {
		const { container } = render(<ThemeSwitcher theme={Theme.light} />)
		expect(container).toMatchSnapshot()
	})

	it('should read the theme from the cookie', () => {
		getCookieMock.mockReturnValue(Theme.dark)
		render(<ThemeSwitcher theme={Theme.light} />)
		expect(root).toHaveClass(Theme.dark)
		expect(screen.getByRole('switch')).toBeChecked()
	})

	it('should toggle the theme on switch click', () => {
		render(<ThemeSwitcher theme={Theme.light} />)
		expect(root).toHaveClass(Theme.light)
		expect(screen.getByRole('switch')).not.toBeChecked()
		fireEvent.click(screen.getByRole('switch'))
		expect(root).toHaveClass(Theme.dark)
		expect(screen.getByRole('switch')).toBeChecked()
		expect(setCookieMock).toHaveBeenCalledWith('theme', Theme.dark)
	})

	it('should have a label for the switch', () => {
		render(<ThemeSwitcher theme={Theme.light} />)
		expect(screen.getByText('Темная тема')).toBeInTheDocument()
		expect(screen.getByText('Темная тема')).toHaveAttribute(
			'for',
			'dark-mode'
		)
	})
})
