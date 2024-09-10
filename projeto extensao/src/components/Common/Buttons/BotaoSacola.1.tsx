import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Badge } from 'native-base';
import { colors } from "../../../themes/Theme";
import { BotaoSacolaProps } from "./BotaoSacola";

export const BotaoSacola: React.FC<BotaoSacolaProps> = ({ itensNaSacola }, props: BotaoSacolaProps) => {
  const navigation = useNavigation();

  const handleBotaoSacola = () => {
    if (props.navigation) {
      props.navigation.navigate('SacolaScreen');
    }
  };

  return (
    <>
      <Feather
        name='shopping-bag'
        key={'shopping-bag-icon'}
        size={30}
        color={colors.light.brancoPuro}
        onPress={handleBotaoSacola} />
      {itensNaSacola > 0 && (
        <Badge
          key='shopping-bag-badge'
          position='absolute'
          bg='red.500'
          borderRadius='full'
          px={2}
          fontSize='xs'
          fontWeight='bold'
        >
          {itensNaSacola}
        </Badge>
      )}
    </>
  );
};
