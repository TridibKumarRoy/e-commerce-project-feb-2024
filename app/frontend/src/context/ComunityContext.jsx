import { createContext, useContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import { AuthContext } from "./AuthContext";

export const CommunityContext = createContext();

const CommunityProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  const getPosts = async () => {
    try {
      const { data } = await axiosInstance("/posts");
      console.log(data);
      setPosts(data?.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    try {
      const {data} = await axiosInstance.post(`/${id}/like`)
      console.log(data)
      const updatedPosts = posts.map((post) => {
        if (post._id === id) {
          const isLiked = post.likes.includes(user._id);
          return {
            ...post,
            likes: isLiked
              ? post.likes.filter((userId) => userId !== user._id)
              : [...post.likes, user._id],
          };
        }
        return post;
      });

      setPosts(updatedPosts);
    } catch (error) {
      console.log(error)
    }
  };


  const handleShare = async () => {
    const shareData = {
      title: "Check this out!",
      text: "Hey, check out this awesome link!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Content shared successfully");
      } else {
        console.log("Web Share API is not supported in your browser.");
      }
    } catch (error) {
      console.error("Error sharing the content:", error);
    }
  };

  const handleComment = async (id, content) => {
    try {
      const {data} = await axiosInstance.post(`/${id}/comment`, {content})
      getPosts()
    } catch (error) {
    console.log(error)  
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <CommunityContext.Provider value={{ posts, handleLike, handleShare, handleComment }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
