const platformsData = {
    spotify: {
        name: 'Spotify',
        icon: 'fab fa-spotify',
        color: '#1DB954',
        growthImage: '/spotifylogo.avif',
        services: {
            followers: {
                name: 'Oyentes mensuales',
                basePrice: 4.5,
                per: '5000'
            },
            plays: {
                name: 'Reproducciones',
                basePrice: 3,
                per: '5000'
            }
        }
    },
    youtube: {
        name: 'YouTube',
        icon: 'fab fa-youtube',
        color: '#FF0000',
        growthImage: '/youtubelogo.jpg',
        services: {
            subscribers: {
                name: 'Suscriptores',
                basePrice: 4.5,
                per: '5000'
            },
            views: {
                name: 'Visualizaciones',
                basePrice: 3.5,
                per: '5000'
            }
        }
    },
    instagram: {
        name: 'Instagram',
        icon: 'fab fa-instagram',
        color: '#E1306C',
        growthImage: '/instagramlogo.avif',
        services: {
            followers: {
                name: 'Seguidores',
                basePrice: 5,
                per: '5000'
            },
            likes: {
                name: 'Likes',
                basePrice: 0.8,
                per: '5000'
            },
            comments: {
                name: 'Comentarios',
                basePrice: 2.5,
                per: '5000'
            }
        }
    },
    facebook: {
        name: 'Facebook',
        icon: 'fab fa-facebook',
        color: '#1877F2',
        growthImage: '/facebooklogo.avif',
        services: {
            followers: {
                name: 'Seguidores',
                basePrice: 3.2,
                per: '5000'
            },
            likes: {
                name: 'Likes',
                basePrice: 1,
                per: '5000'
            }
        }
    },
    tiktok: {
        name: 'TikTok',
        icon: 'fab fa-tiktok',
        color: '#000000',
        growthImage: '/tiktoklogo.webp',
        services: {
            followers: {
                name: 'Seguidores',
                basePrice: 2.7,
                per: '5000'
            },
            likes: {
                name: 'Likes',
                basePrice: 0.3,
                per: '5000'
            },
            views: {
                name: 'Visualizaciones',
                basePrice: 0.001,
                per: '1000000'
            }
        }
    },
    linkedin: {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin',
        color: '#0A66C2',
        growthImage: '/linkedinlogo.avif',
        services: {
            followers: {
                name: 'Conexiones',
                basePrice: 150,
                per: '500'
            },
            engagement: {
                name: 'Seguidores',
                basePrice: 30,
                per: '5000'
            }
        }
    },
    // twitter: {
    //     name: 'X (Twitter)',
    //     icon: 'fab fa-twitter',
    //     color: '#1DA1F2',
    //     growthImage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80',
    //     services: {
    //         followers: {
    //             name: 'Seguidores',
    //             basePrice: 8,
    //             per: '1000 seguidores'
    //         },
    //         retweets: {
    //             name: 'Retweets',
    //             basePrice: 5,
    //             per: '100 retweets'
    //         }
    //     }
    // },
    // twitch: {
    //     name: 'Twitch',
    //     icon: 'fab fa-twitch',
    //     color: '#9146FF',
    //     growthImage: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80',
    //     services: {
    //         followers: {
    //             name: 'Seguidores',
    //             basePrice: 8,
    //             per: '1000 seguidores'
    //         },
    //         views: {
    //             name: 'Visualizaciones',
    //             basePrice: 5,
    //             per: '1000 vistas'
    //         }
    //     }
    // }
};