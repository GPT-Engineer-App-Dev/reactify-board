import { useState } from "react";
import { Container, VStack, HStack, Text, Input, Button, Box, IconButton, Flex } from "@chakra-ui/react";
import { FaThumbsUp, FaLaugh, FaHeart } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, { text: newPost, reactions: { like: 0, laugh: 0, love: 0 } }]);
      setNewPost("");
    }
  };

  const addReaction = (index, reaction) => {
    const updatedPosts = [...posts];
    updatedPosts[index].reactions[reaction]++;
    setPosts(updatedPosts);
  };

  return (
    <Container centerContent maxW="container.md" py={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="3xl" fontWeight="bold">Public Postboard</Text>
        <HStack width="100%">
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <Button onClick={addPost} colorScheme="blue">Post</Button>
        </HStack>
        <VStack spacing={4} width="100%">
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg" width="100%">
              <Text>{post.text}</Text>
              <HStack spacing={2} mt={2}>
                <IconButton
                  aria-label="Like"
                  icon={<FaThumbsUp />}
                  onClick={() => addReaction(index, "like")}
                />
                <Text>{post.reactions.like}</Text>
                <IconButton
                  aria-label="Laugh"
                  icon={<FaLaugh />}
                  onClick={() => addReaction(index, "laugh")}
                />
                <Text>{post.reactions.laugh}</Text>
                <IconButton
                  aria-label="Love"
                  icon={<FaHeart />}
                  onClick={() => addReaction(index, "love")}
                />
                <Text>{post.reactions.love}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;