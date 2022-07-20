import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
  useDisclosure,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import WalletModal from './Component/Modal'
import CoinbaseIcon from './imgs/Coinbase.png'
import { useWeb3React } from '@web3-react/core'
import WalletConnectIcon from './imgs/walletconnect.png'
import MetaMaskIcon from './imgs/MetaMask_Fox.png'
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

function App() {

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });
  
  const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
  });
  
  const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
  });
  const { activate, deactivate } = useWeb3React();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <HStack w="100%" justifyContent="right">
    <ColorModeSwitcher></ColorModeSwitcher>
    </HStack>
    <HStack w="100%" justifyContent="center">
    <Button onClick={onOpen}>Connect Wallet</Button>
    </HStack>
    <WalletModal isOpen={isOpen} closeModal={onClose}/>
    
  </>
  );
}

export default App;


