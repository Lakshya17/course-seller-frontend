import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(changePassword(oldPassword, newPassword))
    }

    const {loading, message, error} = useSelector(state => state.profile)

    useEffect(() => {
        if(error){
            toast.error(error);
            dispatch({type: 'clearError'})
        }
        if(message){
            toast.success(message);
            dispatch({type: 'clearMessage'})
        }
    }, [dispatch, error, message])

    return(
        <>
            <Container py={'16'} minH={'90vh'}>
                <form onSubmit={submitHandler}>
                    <Heading 
                        children='Change Password' 
                        my={'16'} 
                        textAlign={['center', 'left']}
                        textTransform={'uppercase'}
                    />
                    <VStack spacing={'8'}>
                        <Input 
                            required
                            value={oldPassword}
                            onChange={(e)=>setOldPassword(e.target.value)}
                            placeholder='Enter Old password'
                            type='password'
                            focusBorderColor='yellow.500'
                        />
                        <Input 
                            required
                            id='password'
                            value={newPassword}
                            onChange={(e)=>setNewPassword(e.target.value)}
                            placeholder='Enter New password'
                            type='password'
                            focusBorderColor='yellow.500'
                        />

                        <Button isLoading={loading} w={'full'} colorScheme='yellow' type='submit'>
                            Change
                        </Button>
                    </VStack>
                </form>
            </Container>
        </>
    )
}

export default ChangePassword;