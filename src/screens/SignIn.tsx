import { useState } from 'react';
import { Heading, Icon, VStack, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';

import { Input } from '../components/Input';

import Logo from '../assets/logo_primary.svg';
import { Button } from '../components/Button';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  function handleSignIn() {
    console.log('signIn', email, password);
  }

  return (
    <VStack flex={1} alignItems={'center'} bg={'gray.600'} px={'8'} pt={24}>
      <Logo />
      <Heading color={'gray.100'} fontSize={'xl'} mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        mb={4}
        placeholder={'E-mail'}
        value={email}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray['300']} />} ml={4} />
        }
        onChangeText={setEmail}
      />
      <Input
        mb={8}
        placeholder={'Senha'}
        value={password}
        secureTextEntry
        InputLeftElement={
          <Icon as={<Key color={colors.gray['300']} />} ml={4} />
        }
        onChangeText={setPassword}
      />
      <Button title={'Entrar'} w={'full'} onPress={handleSignIn} />
    </VStack>
  );
}

export default SignIn;
