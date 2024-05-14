import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
    try {
        await connectDB();

        const userId = params.userId; // Called userId because of the folder, if it was just id it would be params.id

        if (!userId) {
            return new Response("User ID is required", { status: 400 });
        };



        const properties = await Property.find({owner: userId}); // Get user's properties from the database

        return new Response(JSON.stringify(properties), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Something went wrong", { status: 500 });
    };
};