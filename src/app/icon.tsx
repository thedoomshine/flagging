import { ImageResponse } from 'next/og'

import Hanky from './_patterns/default.svg'

// Route segment config
// export const runtime = 'edge'

// Image metadata
export const size = {
	width: 64,
	height: 64,
}
export const contentType = 'image/png'

export default async function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
				}}
			>
				<Hanky
					style={{
						height: '100%',
						width: '100%',
						'--hanky-bg': 'red',
						'--hanky-pattern': '#fff',
					}}
				/>
			</div>
		),
		{
			...size,
		}
	)
}
