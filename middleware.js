export { default } from 'next-auth/middleware';
export const config = {
    // Protected routes
    matcher: ['/properties/add', '/profile', '/properties/saved', '/messages']
};