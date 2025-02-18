import {TonConnectButton} from "@tonconnect/ui-react"
import { Address, TonClient, beginCell, StateInit, storeStateInit } from '@ton/ton'

async function main() {
  const client = new TonClient({
  endpoint: 'https://toncenter.com/api/v2/jsonRPC',
  apiKey: 'f1ba5757332be5a6b004f125117f93cdb3a5e8bcd7bea50a50fe86f77229f6fd'
})

const jettonWalletAddress = Address.parse('UQCTmlmrH5rZfFN-kFsvFl0TwyF6OS5sp3QEn8nNWnW0ESYA');
  let jettonWalletDataResult = await client.runMethod(jettonWalletAddress, 'get_wallet_data');
  jettonWalletDataResult.stack.readNumber();
  const ownerAddress = jettonWalletDataResult.stack.readAddress();
  const jettonMasterAddress = jettonWalletDataResult.stack.readAddress();
  const jettonCode = jettonWalletDataResult.stack.readCell();
  const jettonData = beginCell()
  .storeCoins(0)
  .storeAddress(ownerAddress)
  .storeAddress(jettonMasterAddress)
  .storeRef(jettonCode)
  .endCell();

  const stateInit: StateInit = {
  code: jettonCode,
  data: jettonData
}

const stateInitCell = beginCell()
  .store(storeStateInit(stateInit))
  .endCell();

  console.log(new Address(0, stateInitCell.hash()));
}

export const Header = () => {
    return <header>
        <span className="block">My App with React UI!</span>
        <TonConnectButton className="btn float-right" />
    </header>
}
