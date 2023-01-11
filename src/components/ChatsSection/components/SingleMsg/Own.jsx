import React from 'react'
import { AccountContext } from "../../../../context/AccountProvider";
import { useContext } from "react";
import './SingleMsg.css'
const SingleMsg = ({message}) => {
  const { account } = useContext(AccountContext);
  return (
    <div id='single-msg'>
        {
            account.sub === message.senderId ? 
                <div id="own-section" className='own-msg'>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                    }
                </div>
            : 
                <div div id="other-section" className='other-msg'>
                    {
                        message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                    }
                </div>
        }
        
        </div>
  )
};

// 


export default SingleMsg