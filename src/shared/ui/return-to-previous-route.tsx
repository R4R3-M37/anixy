'use client'

import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface Props
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
	children: ReactNode
}

export const ReturnToPreviousRoute = ({ children, ...props }: Props) => {
	const router = useRouter()

	return (
		<button onClick={() => router.back()} {...props}>
			{children}
		</button>
	)
}
