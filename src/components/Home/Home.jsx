import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from '@chakra-ui/react';
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/bg.jpg'
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy,  } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/introVideo.mp4'

const Home = () => {
    return(
        <section className='home'>
            <div className='container'>
                <Stack
                    direction={['column', 'row']}
                    height='100%'
                    justifyContent={['center', 'space-between']}
                    alignItems='center'
                    spacing={['16', '56']}
                >
                    <VStack width={'full'} alignItems={['center', 'flex-end']} spacing={'8'}>
                        <Heading size={'2xl'} children="Learn from the Experts!" />
                        <Text fontFamily={'cursive'} fontSize={'2xl'} textAlign={['center', 'left']} children='Find valuable content at reasonable price.' />
                        <Link to='/courses'>
                            <Button  size={'lg'} colorScheme='yellow'>Explore Now</Button>
                        </Link>
                    </VStack>
                    <Image className='vector-grpahics' boxSize={'md'} src={ bg } objectFit='contain'/>

                </Stack>
            </div>
            <Box padding={'8'} bg='blackAlpha.800'>
                <Heading children='Our Brands' textAlign={'center'} fontFamily={'body'} color={'yellow.400'} />
                <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop={'4'}> 
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className='container2'>
                <video controls controlsList='nodownload nofullscreen noremoteplayback' src={introVideo} disablePictureInPicture disableRemotePlayback></video>
            </div>
        </section>
    )
}

export default Home