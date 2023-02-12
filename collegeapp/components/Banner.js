import bannerStyles from '@/styles/Banner.module.css'
import Image from 'next/image'
import ban from '@/public/banner.jpeg'

const Banner = () => {
  return (
    <>
        <div className='bannerStyles.bannercontainer'>
            <Image 
                src={ban}
                alt="banner1"
                width="900"
                height="350"
            />
        </div>
    </>
  )
}

export default Banner