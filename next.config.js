/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**'
            }
        ],
            
        
        // domains:[
        //     'res.cloudinary.com',
        //     'uploads.s3.amazonaws.com'
        // ]
    },
};

module.exports = nextConfig
