// If domain is not available, set to null;
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch ALL properties
async function fetchProperties({ showFeatured = false } = {}) {
    try {
        // Handle the case where the API domain is not available
        if (!apiDomain) return [];

        const res = await fetch(`${apiDomain}/properties${showFeatured ? '?featured=true' : ''}`, { cache: 'no-store' }); // cache disabled

        if (!res.ok) {
            throw new Error('Failed to fetch properties');
        };

        return res.json();
    } catch (error) {
        console.log(error);
        return [];
    };
};

// Fetch SINGLE property
async function fetchProperty(id) {
    try {
        // Handle the case where the API domain is not available
        if (!apiDomain) return null;

        const res = await fetch(`${apiDomain}/properties/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch properties');
        };

        return res.json();
    } catch (error) {
        console.log(error);
        return null;
    };
};

export { fetchProperties, fetchProperty };