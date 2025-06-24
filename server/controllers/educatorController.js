import { clerkClient } from '@clerk/express';
// API controller function to update user role to educator
// This function updates the user's role to 'educator' in their public metadata
export const updateRoleToEducator = async (req, res) => {
    try {
        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: 'educator'
            }
        })
        res.json({ success: true, message: "User role updated to educator || You can publish the course now" });
    } catch (error) {
        res.json({
            success: false,
            error: "An error occurred while updating the user role",
            message: error.message
        });
    }
}