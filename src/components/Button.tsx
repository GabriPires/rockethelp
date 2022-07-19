import { Button as NativeBaseButton, Heading, IButtonProps } from 'native-base';

type ButtonProps = { title: string } & IButtonProps;

export function Button({ title, ...props }: ButtonProps) {
  return (
    <NativeBaseButton
      bg={'green.700'}
      h={14}
      fontSize={'sm'}
      rounded={'sm'}
      _pressed={{
        bg: 'green.500',
      }}
      {...props}
    >
      <Heading color={'white'} fontSize={'sm'}>
        {title}
      </Heading>
    </NativeBaseButton>
  );
}
