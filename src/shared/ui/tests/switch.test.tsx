import { fireEvent, render } from '@testing-library/react'
import { Switch } from '~/shared/ui/switch'
import '@testing-library/jest-dom'

describe('Switch component', () => {
	test('Switch renders correctly', () => {
		const { container } = render(<Switch />)
		expect(container).toMatchSnapshot()
	})

	test('Switch changes state when clicked', () => {
		const { getByRole } = render(<Switch />)
		const switchElement = getByRole('switch')
		expect(switchElement).toHaveAttribute('data-state', 'unchecked')
		fireEvent.click(switchElement)
		expect(switchElement).toHaveAttribute('data-state', 'checked')
	})
})
