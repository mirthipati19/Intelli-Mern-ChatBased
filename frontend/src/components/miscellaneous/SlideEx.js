import React, { useState } from 'react';
import { Box, Button } from '@chakra-ui/react';

const SlideEx = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={toggleSlide}>Tone Info</Button>
      {isOpen && (
        <Box
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
          style={{ zIndex: 10 }}
        >
          {/* Placeholder content */}
          <p>
  <strong>The Tone can be Modified Using the Tone Adjustment Function</strong>
  <br />
  <br />
  You have the option to adjust the text to fit various Tones, including:
  <ul>
    <li>Professional</li>
    <li>Light-hearted</li>
    <li>Empathetic tone Messages</li>
  </ul>
</p>

        </Box>
      )}
    </>
  );
};

export default SlideEx;
