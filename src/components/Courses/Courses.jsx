import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlayList } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const Course = ({views, title, imageSrc, id, addToPlayListHandler, creator, description, lectureCount, loading}) => {
    return(
        <>
            <VStack className='course' alignItems={['center', 'flex-start']}>
                <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
                <Heading 
                    textAlign={['center', 'left']} 
                    maxW={'200px'} 
                    fontFamily={'sans-serif'} 
                    noOfLines={'3'} 
                    children={title} 
                    size={'sm'}
                />
                <Text children={description} noOfLines={2} />
                <HStack>
                    <Text children={'Creator'} fontWeight={'bold'} textTransform={'uppercase'} />
                    <Text children={creator} fontFamily={'body'} textTransform={'uppercase'} />
                </HStack>
                <Heading 
                    textAlign={'center'} 
                    size={'xs'} 
                    children={`Lectures - ${lectureCount}`} 
                    textTransform={'uppercase'}
                />
                <Heading 
                    size={'xs'}
                    children={`Views - ${views}`}
                    textTransform={'uppercase'}
                />

                <Stack direction={['column', 'row']} alignItems={'center'}>
                    <Link to={`/course/${id}`}>
                        <Button colorScheme='yellow'>Watch Now</Button>
                    </Link>
                    <Button
                        isLoading={loading} 
                        colorScheme='yellow' 
                        variant={'ghost'}
                        onClick={()=>addToPlayListHandler(id)}
                        >
                        Add to Plalylist
                    </Button>
                </Stack>
            </VStack>
        </>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    
    const addToPlayListHandler = async (courseId) => {
        await dispatch(addToPlayList(courseId));
        dispatch(loadUser());
    }
    
    const categories = [
        'Web Development', 
        'Aritificial Intelligence', 
        'Data Structure & Alogrithms', 
        'App Development', 
        'Game Development'
    ]
    
    const {loading, courses, error, message} = useSelector(state => state.course)
    
    useEffect(() => {
        dispatch(getAllCourses(category, keyword))
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'})
        }
        if(message){
            toast.success(message);
            dispatch({type: 'clearMessage'})
        }
    }, [category, keyword, dispatch, error, message])
    return(
        <>
           <Container minH={'95vh'} maxWidth={'container.lg'} padding={'8'}>
                <Heading children='All Courses' margin={'8'}/>
                <Input 
                value={keyword} 
                onChange={(e) => setKeyword(e.target.value)} 
                placeholder='Search A Course...' 
                type='text' 
                focusBorderColor='yellow.500'
                /> 

                <HStack overflowX={'auto'} paddingY={'8'} css={{'&::-webkit-scrollbar': {
                    display:'none'
                }}}>
                    {
                        categories.map((item, index)=>(
                            <Button key={index} onClick={()=>setCategory(item)} minW={'60'}>
                                <Text children={item} />
                            </Button>
                        ))
                    }
                </HStack>

                <Stack 
                    direction={['column', 'row']}
                    flexWrap={'wrap'}
                    justifyContent={['flex-start', 'space-evenly']}
                    alignItems={['center', 'flex-start']}
                    >
                    {
                        courses.length > 0 ? courses.map((item) => (
                            <Course
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            views={item.views}
                            imageSrc={item.poster.url}
                            id={item._id}
                            creator={item.createdBy}
                            lectureCount={item.numOfVideos}
                            addToPlayListHandler={addToPlayListHandler}
                            loading={loading}
                            />  
                        )) : (
                            <Heading children='Course Not Available' />
                        )
                    }
                </Stack>
           </Container>
        </>
    )
}

export default Courses;