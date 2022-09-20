import { Box, Flex, Heading, Checkbox, Divider, VStack, SimpleGrid, HStack, Button, Text} from "@chakra-ui/react";
import { Header } from "../../components/Header/Index";
import { SideBar } from "../../components/Sidebar/index";
import { Input } from "../../components/Form/Input";
import Link from 'next/link'


export default function CreateTransaction(){
    return (
        <Box>
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <SideBar />
                {/* //flex dentro da box abaixo = ocupar toda a largura possivel */}
                <Box flex="1" borderRadius={8} bg="gray.800" p="6"> 
                    <Heading size="lg" fontWeight="normal">Cadastrar Nova Transação</Heading>
                    <Divider my="6" borderColor="gray.700"></Divider>
                    <VStack spacing="6">
                        
                        <Text>Escolha o tipo de transação que deseja realizar</Text>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%">                            
                            <Button colorScheme="purple" gap="2" >
                                <Checkbox colorScheme="green"/>
                                Receitas
                            </Button>
                            <Button colorScheme="purple" gap="2">
                                <Checkbox colorScheme="red"/>
                                Despesas
                            </Button>                            
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input name="data" label="Data da Transação" type="date"/>
                            <Input name="categoria" label="Categoria"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input name="conta" label="Conta"/>
                            <Input name="pagamento" label="Forma de Pagamento"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input name="parcelas" label="Escolha a quantidade de parcelas"/>                           
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input name="banco" label="Banco"/>
                            <Input name="valor" type="number" label="Valor"/>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing="6" width="100%" color="gray.200">
                            <Input name="historico" label="Histórico"/>                           
                        </SimpleGrid>

                    </VStack>
                    <Flex mt="6" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/lancamentos" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>                            
                            <Link href="/lancamentos" passHref>
                                <Button colorScheme="whatsapp">Realizar Lançamento</Button>
                            </Link>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}   