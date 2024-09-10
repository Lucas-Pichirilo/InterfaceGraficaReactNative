import SacolaScreen from '../../Screen/Cliente/SacolaScreen';
import { ProdutoType } from '../../../api/types/ProdutoType';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../routes/types';
import { BotaoSacola } from './BotaoSacola.1';

export interface BotaoSacolaProps {
  itensNaSacola: number;
  navigation?: StackNavigationProp<RootStackParamList, 'SacolaScreen'>;
}


export default BotaoSacola;
