import Posts from './Posts';

const Feed = ({posts}) => {
    return (
        <main className='postbox'>
            {posts.map((post) => (
                <Posts key={post.id} post={post} />
            ))}
        </main>
    );
};

export default Feed;
