import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      {/* about 1 */}
      <div className='grid grid-cols-12 items-center'>
        <div className='col-start-2 col-end-8'>
          <h2 className='text-[22.5px] font-bold'>YouTubeで開催される24時間生放送</h2>
          <p className='leading-8'>
            個人で活動するVTuberぽんぽことピーナッツくんが司会となり、
            <br />
            約1時間ずつ、さまざなゲストさんに来ていただいて企画をするYouTube上での24時間生放送。
            <br />
            ゲストはVTuberのみならず、Youtuber、漫画家、お笑い芸人、ミュージシャンなど、様々な分野からやってくる。
          </p>
        </div>
        <div className='col-start-9 col-end-12'>
          <Image
            className='rounded-full'
            src='/about-peanuts-anime.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* about 2 */}
      <div className='grid grid-cols-12 items-center'>
        <div className='col-start-2 col-end-5'>
          <Image
            className='rounded-full'
            src='/about-ponpoko-anime.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
        <div className='col-start-6 col-end-12'>
          <h2 className='text-[22.5px] font-bold'>今年で7回目を迎えるぽんぽこ24</h2>
          <p className='leading-8'>
            2018年から始まったぽんぽこ24は、今年で7回目。
            <br />
            企画をパワーアップさせながら、毎年進化を遂げている。
            <br />
            毎年、「今回でぽんぽこ24は本当に最後」らしい。
          </p>
        </div>
      </div>
      {/* about 3 */}
      <div className='grid grid-cols-12 items-center'>
        <div className='col-start-2 col-end-8'>
          <h2 className='text-[22.5px] font-bold'>独自のCM文化</h2>
          <p className='leading-8'>
            ぽんぽこ24でしか見ることのできないCM文化を体験しよう。
            <br />
            多種多様なジャンルのクリエイターが制作した動画が、ぽんぽこ24を更に盛り上げる。
            <br />
            生放送終了後は、流れたCMをリストにして公開予定。お気に入りのCMを見返すことも可能。
          </p>
        </div>
        <div className='col-start-9 col-end-12'>
          <Image
            className='rounded-full'
            src='/about-peanuts-puppet.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
      </div>
      {/* about 4 */}
      <div className='grid grid-cols-12 items-center'>
        <div className='col-start-2 col-end-5'>
          <Image
            className='rounded-full'
            src='/about-ponpoko-puppet.png'
            alt=''
            width={400}
            height={400}
          />
        </div>
        <div className='col-start-6 col-end-12'>
          <h2 className='text-[22.5px] font-bold'>あなたは『鉄人』になれるか</h2>
          <p className='leading-8'>
            生放送を24時間連続視聴できた人間を、『鉄人』と呼ぶ。
            <br />
            ぽんぽこ24 vol.7において、あなたはこの偉業を見事達成し『鉄人』となれるか。
            <br />
            ※ご自身の体調に合わせてご視聴ください。
          </p>
        </div>
      </div>
    </>
  )
}

export default About
