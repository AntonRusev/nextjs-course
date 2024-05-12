import React from 'react';
import Image from 'next/image';

function PropertyHeaderImage({ image }) {
    return (
        <section>
            <div className="container-xl m-auto">
                <div className="grid grid-cols-1">
                    <Image
                        src={image}
                        alt="property pic"
                        className="object-cover h-[400px] w-full"
                        width={0}
                        height={0}
                        sizes='100vw'
                        priority={true}
                    />
                </div>
            </div>
        </section>
    );
};

export default PropertyHeaderImage;