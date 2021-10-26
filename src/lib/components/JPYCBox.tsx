import React, { ReactElement, useState } from 'react';
import { TipProps, Window } from '../types/types';
import {erc20Abi} from '../utils/erc20Abi';
import './styles/JPYCBox.css';
import Web3 from 'web3';

declare const window: Window;

function JPYCBox(props: TipProps): ReactElement{

    const [disabled, setDisabled] = useState<boolean>(false);

    const handleTip = async () => {
        const { ethereum } = window;
        await window.ethereum.enable().catch((error: string) => {
            console.error(error);
        })
        const web3 = new Web3 (Web3.givenProvider);
        const jpyc = new web3.eth.Contract(erc20Abi, props.contractAddress);
        jpyc.methods.transfer(props.to, "0x" + (props.amount * 10 ** 18).toString(16))
            .send({from: ethereum.selectedAddress })
            .on('transactionHash', (hash: any) => {
                setDisabled(true);
            })
            .on('receipt', (receipt: any) => {
                setDisabled(false);
            })
            .on('error', (error: any) => {
                setDisabled(false);
                alert(error.message);
            });
    }

    return (
        <div className='Box'>
            <div className='Title'>
                JPYCの投げ銭をする
            </div>
            <button onClick={() => handleTip()} disabled={disabled} className={disabled ? 'Disabled': 'JPYCTipButton'}>
                JPYC (100 JPYC)
            </button>
        </div>
    )
}

export default JPYCBox;