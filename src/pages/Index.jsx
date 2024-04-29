import { Box, Button, Container, Heading, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaRobot, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleCommand = () => {
    toast({
      title: "Command executed",
      description: "Your command has been successfully executed!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="xl" mb={2}>
            AI Assistant <FaRobot />
          </Heading>
          <Text fontSize="lg">Your personal AI that does everything you ask.</Text>
        </Box>
        <Input placeholder="Type your command here..." size="lg" />
        <Button leftIcon={<FaPaperPlane />} colorScheme="blue" onClick={handleCommand}>
          Send Command
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
