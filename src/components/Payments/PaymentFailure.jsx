import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const PaymentFailure = () => {
    return(
        <>
            <Container h={'90vh'}>
                <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
                    <RiErrorWarningFill size={'5rem'}/>
                    <Heading children='Payment Fail' />
                    <Link to={'/subscribe'}>
                        <Button variant={'ghost'}>Try Again</Button>
                    </Link>
                </VStack> 
            </Container>
        </>
    )
}
export default PaymentFailure;