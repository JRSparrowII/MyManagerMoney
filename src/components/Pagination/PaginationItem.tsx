import {Flex, Button, Stack, Box, Text, Link, Icon } from '@chakra-ui/react'

interface PaginationItemProps{
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem ({isCurrent = false, number}:PaginationItemProps){
    if(isCurrent){
        return (
            <Button 
                size="sm" 
                fontSize="xl" 
                width="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: "pink.500",
                    cursor: "default",
                }}
            >
                {number}
            </Button>
        );
    }
    return(
        <Button 
            size="sm" 
            fontSize="xl" 
            width="4"
            colorScheme="gray.700"   
            _hover={{
                bg: "gray.500",
            }}             
        >
            {number}
        </Button>
    );
}