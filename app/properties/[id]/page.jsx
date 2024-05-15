'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

import { fetchProperty } from '@/utils/requests';

import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyImages from '@/components/PropertyImages';
import Spinner from '@/components/Spinner';
import BookmarkButton from '@/components/BookmarkButton';
import ShareButtons from '@/components/ShareButtons';
import PropertyContactForm from '@/components/PropertyContactForm';

const PropertyPage = () => {
    const { id } = useParams();

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyData = async () => {
            if (!id) return;

            try {
                const property = await fetchProperty(id);
                setProperty(property);
            } catch (error) {
                console.error('Error fetching property:', error);
            } finally {
                setLoading(false);
            };
        };

        // If there is no property set, fetch the data
        if (property === null) {
            fetchPropertyData();
        };
    }, [id, property]);

    if (!property && !loading) {
        return (
            <h1 className='text-center text-2xl font-bold mt-10'>
                Property not found
            </h1>
        );
    };

    return (
        <>
            {/* Loading Spinner */}
            {loading && <Spinner loading={loading} />}

            {!loading && property && (
                <>
                    {/* Header IMAGE */}
                    <PropertyHeaderImage image={property.images[0]} />

                    {/* Back Button */}
                    <section>
                        <div className="container m-auto py-6 px-6">
                            <Link
                                href="/properties"
                                className="text-blue-500 hover:text-blue-600 flex items-center"
                            >
                                <FaArrowLeft className=" mr-2" />
                                Back to Properties
                            </Link>
                        </div>
                    </section>

                    {/* Property INFO*/}
                    <section className="bg-blue-50">
                        <div className="container m-auto py-10 px-6">
                            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                                {/* Details */}
                                <PropertyDetails property={property} />

                                {/* Sidebar */}
                                <aside className="space-y-4">
                                    <BookmarkButton property={property} />

                                    <ShareButtons property={property} />

                                    {/* <!-- Contact Form --> */}
                                    <PropertyContactForm property={property} />
                                </aside>
                            </div>
                        </div>
                    </section>

                    {/* Images */}
                    <PropertyImages images={property.images} />
                </>
            )}
        </>
    );
};

export default PropertyPage;