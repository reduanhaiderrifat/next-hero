import Image from 'next/image';
import React from 'react';
import {Lato} from 'next/font/google';

const lato = Lato({ weight: ['900'], subsets: ['latin'] });

const Page = () => {
    return (
        <div className={`${lato.className} min-h-screen font-extrabold px-12 py-24`}>
            <h4 className='text-3xl mb-12'>Gallery page</h4>
            <Image src="/4449848_2334721.jpg" alt="Anime Banner" height={920} width={1280}  />

        </div>
    );
};

export default Page;
