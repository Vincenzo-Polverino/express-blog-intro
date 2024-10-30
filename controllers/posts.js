const posts = [
    {
        title: 'Post 1',
        content: 'Contenuto del primo post.',
        image: '/images/img1.jpg',
        tags: ['tag 1', 'tag 2']
    },
    {
        title: 'Post 2',
        content: 'Contenuto del secondo post.',
        image: '/images/img2.jpg',
        tags: ['tag 3', 'tag 4']
    },
    {
        title: 'Post 3',
        content: 'Contenuto del terzo post.',
        image: '/images/img3.jpg',
        tags: ['tag 5', 'tag 6']
    },
    {
        title: 'Post 4',
        content: 'Contenuto del quarto post.',
        image: '/images/img4.jpg',
        tags: ['tag 7', 'tag 8']
    },
    {
        title: 'Post 5',
        content: 'Contenuto del quinto post.',
        image: '/images/img5.jpg',
        tags: ['tag 9', 'tag 10']
    }
];

exports.index = (req, res) => {
    res.json({ count: posts.length, posts: posts });
};
