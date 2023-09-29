'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
	Anime,
	Home,
	Mangas,
	Profile,
	Search
} from '~/widgets/bottom-navbar/icons'
import { cn } from '~/shared/lib/cn'
import Link from 'next/link'

const ALL_NAVBAR_LINKS = [
	{
		title: 'Главное',
		link: '/',
		icon: <Home />
	},
	{
		title: 'Аниме',
		link: '/anime',
		icon: <Anime />
	},
	{
		title: 'Манга',
		link: '/mangas',
		icon: <Mangas />
	},
	{
		title: 'Поиск',
		link: '/search',
		icon: <Search />
	},
	{
		title: 'Профиль',
		link: '/profile',
		icon: <Profile />
	}
]
const ALL_ALLOWED_LINKS = ['/', '/anime', '/mangas', '/search', '/profile']

export const BottomNavbar = () => {
	const pathname = usePathname()

	if (!ALL_ALLOWED_LINKS.includes(pathname)) {
		return null
	}

	return (
		<div className='fixed bottom-0 left-0 z-50 w-full h-[83px] bg-background/95 border-t border-muted'>
			<div className='grid h-full max-w-lg grid-cols-5 mx-auto font-medium'>
				{ALL_NAVBAR_LINKS.map(({ title, icon, link }) => (
					<Link
						key={link}
						href={link}
						className={cn(
							pathname === link
								? 'stroke-primary text-primary'
								: 'stroke-muted-foreground text-muted-foreground',
							'transition-all duration-500',
							'gap-1 inline-flex flex-col items-center justify-center px-5 group'
						)}
					>
						{icon}
						<span className='text-xs font-medium'>{title}</span>
					</Link>
				))}
			</div>
		</div>
	)
}
