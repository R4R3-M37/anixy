import { render } from '@testing-library/react'
import { Label } from '../label'
import React from 'react'
import '@testing-library/jest-dom'

describe('Label component', () => {
	test('Label renders correctly', () => {
		const { container } = render(<Label />)
		expect(container).toMatchSnapshot()
	})
})
