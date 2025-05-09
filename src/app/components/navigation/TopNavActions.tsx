'use client'

import { useSelector } from 'react-redux'
import { RootState } from '@state/store'
import YourAccountBtn from '@components/buttons/YourAccountBtn'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import keys from '@i18n/messages'
import nameSpaces from '@i18n/nameSpace'

export default function TopNavActions() {
	const { topNav } = keys
	const t = useTranslations(nameSpaces.topNav)

	const user = useSelector((state: RootState) => state.user)

	return (
		<>
			{!user.name ?
				<ul className='flex items-center gap-4 gap-x-6'>
					<li className='text-base font-medium text-gray-300'>
						<Link href='/auth/register'>{t(topNav.register)}</Link>
					</li>
					<li className='text-lg font-medium text-brand'>
						<Link href='/auth/login'>{t(topNav.logIn)}</Link>
					</li>
				</ul>
			:	<div className='flex items-center gap-4 gap-x-6'>
					<YourAccountBtn label={user.name} />
					<Link href='/' className='text-lg font-medium text-brand'>
						{t(topNav.newListing)}
					</Link>
				</div>
			}
		</>
	)
}
