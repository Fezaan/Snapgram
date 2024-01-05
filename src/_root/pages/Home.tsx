import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  // Using the useGetRecentPosts hook to fetch recent posts
  const {data: posts, isPending: isPostLoading, isError: isErrorPosts}= useGetRecentPosts();
  // Main container for the Home component
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {/* Conditional rendering based on post loading state */}
          {isPostLoading && !posts ? (
            <Loader />
          ): (
            // Rendering the list of posts if not loading
            <ul className="flex flex-col w-full flex-1 gap-9">
              {/* Mapping through the fetched posts and rendering PostCard components */}
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home