import React, { useState } from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';

function DrawerWithInputAndRadio() {
  const [isOpen, setIsOpen] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [radioValue, setRadioValue] = useState('1');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleRadioChange = (value) => {
    setRadioValue(value);
  };

  return (
    <>
      <Button colorScheme='teal' onClick={handleOpen}>
        Tone Changer
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={handleClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Change the Tone</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' value={textValue} onChange={handleInputChange} />
            <RadioGroup onChange={handleRadioChange} value={radioValue}>
              <Stack direction='row'>
                <Radio value='professional'>Professional</Radio>
                <Radio value='funny'>Funny</Radio>
                <Radio value='emotional'>Emotional</Radio>
              </Stack>
            </RadioGroup>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={handleClose}>
              Cancel
            </Button>
            <Button colorScheme='blue' onClick={handleClose}>
              Ask Query
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerWithInputAndRadio;
