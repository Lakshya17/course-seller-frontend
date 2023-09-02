import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import AboutImage from '../../assets/images/Avatar.jpeg'
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/introVideo.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsAndCondition from '../../assets/docs/termsAndCondition'

const Founder = () => {
    return(

        <Stack direction={['column', 'row']} spacing={['4', '16']} padding='8'>
        <VStack>
            <Avatar src={AboutImage} boxSize={['40', '48']}/>
            <Text children='Co-Founder' opacity={'0.7'} />
        </VStack>
        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
            <Heading  children='Lakshya S' size={['md', 'xl']} />
            <Text textAlign={['center', 'left']} children='Hi, I am web developer learning more technologies.' />
        </VStack>
    </Stack>
    )
}

const VideoPlayer = () => {
    return(
        <Box>
            <video 
                controls 
                controlsList='nodownload nofullscreen noremoteplayback' 
                src={introVideo} 
                disablePictureInPicture 
                disableRemotePlayback>
            </video>

        </Box>
    )
}

const TandC = ({termsAndCondition}) => {
    return(
        <Box>
            <Heading size={'md'} children='Terms & Condition' textAlign={['center', 'left']} my={'4'}/>
            <Box h={'sm'} padding={'4'} overflowY={'scroll'}>
                <Text textAlign={['center', 'left']} letterSpacing={'widest'} fontFamily={'heading'}>{termsAndCondition}</Text>
                <Heading my={'4'} size={'xs'} children='Refund only applicable for cancellation within 7 days' />
            </Box>
        </Box>
    )
}

const About = () => {
    return(
            <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
                <Heading  children='About Us' textAlign={['center', 'left']}/>
                <Founder />
                <Stack margin={'8'} direction={['column', 'row']} alignItems={'center'}>
                    <Text fontFamily={'cursive'} margin={'8'} textAlign={['center', 'left']}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <Link to={'/subscribe'}>
                        <Button variant={'ghost'} colorScheme='yellow'>Checkout Our Plan</Button>
                    </Link>
                </Stack>
                <VideoPlayer />
                <TandC termsAndCondition={termsAndCondition} />
                <HStack my={'4'} padding={'4'}>
                    <RiSecurePaymentFill />
                    <Heading children='Payment is secured by Razorpay.' size={'xs'} fontFamily={'sans-serif'} textTransform={'uppercase'}/>
                </HStack>
            </Container>
    )
}

export default About;