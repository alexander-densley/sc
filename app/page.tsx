import Image from 'next/image'

export default function Home() {
	return (
		<div className='flex justify-center items-center h-screen'>
			<Image alt='ws' src='/ws.jpeg' width={200} height={200} />
		</div>
	)
}
