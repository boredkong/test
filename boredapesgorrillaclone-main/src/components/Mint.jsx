import React, { useState, useEffect } from "react";
import topimg from "../assets/top.png";
// import Carousel from 'react-grid-carousel'

import { BigNumber, ethers } from "ethers";
import web3 from "web3";

function Mint() {
  const [mintCnt, setMintcnt] = useState(1);
  const claimCnt = 1;
  const [accounts, setAccounts] = useState([]);
  const [mintingProgress, setMintingProgress] = useState(false);
  const [useraddress, setUseraddress] = useState("");

  const [totalNFTno, setTotalnftno] = useState("connect");
  const [userNftbalance, Setusernftbalance] = useState("0");

  const isConnected = Boolean(accounts[0]);

  let provider;
  let signer;

  // const contractAddress = "0x1fD210D85e40EC2205357CDfb129234FEaEF9962";

  const contractAddress = "0xD56683Dc92122A80e452B5865B973C98044b7bf8";

  const contractABI = [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    { inputs: [], name: "ApprovalCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "ApprovalQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "BalanceQueryForZeroAddress", type: "error" },
    { inputs: [], name: "MintERC2309QuantityExceedsLimit", type: "error" },
    { inputs: [], name: "MintToZeroAddress", type: "error" },
    { inputs: [], name: "MintZeroQuantity", type: "error" },
    { inputs: [], name: "OwnerQueryForNonexistentToken", type: "error" },
    { inputs: [], name: "OwnershipNotInitializedForExtraData", type: "error" },
    { inputs: [], name: "TransferCallerNotOwnerNorApproved", type: "error" },
    { inputs: [], name: "TransferFromIncorrectOwner", type: "error" },
    {
      inputs: [],
      name: "TransferToNonERC721ReceiverImplementer",
      type: "error",
    },
    { inputs: [], name: "TransferToZeroAddress", type: "error" },
    { inputs: [], name: "URIQueryForNonexistentToken", type: "error" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "uint256",
          name: "fromTokenId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "toTokenId",
          type: "uint256",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
      ],
      name: "ConsecutiveTransfer",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        { indexed: true, internalType: "address", name: "to", type: "address" },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [],
      name: "COLLECTION_SIZE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "FIRSTXFREE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "MINT_PRICE",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TOKENS_PER_PERSON_PUB_LIMIT",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "TOKENS_PER_TRAN_LIMIT",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "count", type: "uint256" },
      ],
      name: "airdrop",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
      name: "calcTotal",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "getApproved",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "owner", type: "address" },
        { internalType: "address", name: "operator", type: "address" },
      ],
      name: "isApprovedForAll",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "count", type: "uint256" }],
      name: "mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "ownerOf",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "preRevealURL",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "url", type: "string" }],
      name: "reveal",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
        { internalType: "bytes", name: "_data", type: "bytes" },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "saleStatus",
      outputs: [
        {
          internalType: "enum BoredKongYachtCLub.SaleStatus",
          name: "",
          type: "uint8",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "operator", type: "address" },
        { internalType: "bool", name: "approved", type: "bool" },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "string", name: "url", type: "string" }],
      name: "setPreRevealUrl",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "price", type: "uint256" }],
      name: "setPublicMintPrice",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "enum BoredKongYachtCLub.SaleStatus",
          name: "status",
          type: "uint8",
        },
      ],
      name: "setSaleStatus",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
      name: "tokenURI",
      outputs: [{ internalType: "string", name: "", type: "string" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "from", type: "address" },
        { internalType: "address", name: "to", type: "address" },
        { internalType: "uint256", name: "tokenId", type: "uint256" },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const connectMeta = () => {
    if (window.ethereum) {
      provider = new ethers.providers.Web3Provider(window.ethereum);

      provider.send("eth_requestAccounts", []).then((accounts) => {
        setAccounts(accounts);

        signer = provider.getSigner();

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          provider
        );

        signer.getAddress().then((res) => {
          setUseraddress(res);
          contract.balanceOf(res).then((res2) => {
            const NFTBalance = res2.toString();
            Setusernftbalance(NFTBalance);
          });
        });
      });
    } else {
      alert("install metamask extension!!");
    }
  };

  const claim = async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();

    if (signer && provider) {
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const contractWithSigner = contract.connect(signer);
      const balanceOfMinter = await contract.balanceOf(useraddress);

      let count = mintCnt;

      if (1 > balanceOfMinter) {
        const freeLeft = 1 - balanceOfMinter;
        if (count > freeLeft) {
          count -= freeLeft;
        } else {
          count = 0;
        }
      }

      contractWithSigner
        .mint(mintCnt, {
          value: ethers.utils.parseEther((0.003 * count).toString()),
        })
        .then(() => {
          setMintingProgress(true);
        })
        .catch(() => alert("error minting your nft"));
    } else {
      alert("connect the wallet");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="mint">
      <div className="top">
        <img src={topimg} className="topimg" />
      </div>
      <div className="mintarea monb1">
        <div className="totalmint inline">
          Total minted:<div className="gr">{totalNFTno}/10000</div>
        </div>
        <div className="yourmintcount inline">
          Your NFTs:{" "}
          <div className="gr">&nbsp;&nbsp;&nbsp;&nbsp; {userNftbalance}/30</div>{" "}
        </div>
        <div className="mintcountnow">
          <div
            className="addbtn"
            onClick={() => {
              setMintcnt(Math.max(mintCnt - 1, 1));
            }}
          >
            -
          </div>

          <div className="showno monbi1">{mintCnt}</div>

          {/* <div
            className="showno monbi1"
          >
            {mintCnt}
          </div> */}

          <div
            className="addbtn"
            onClick={() => {
              setMintcnt(Math.min(mintCnt + 1, 500));
            }}
          >
            +
          </div>
        </div>
        <div className="mintbtnarea">
          {isConnected ? (
            <div className="mintbtn" onClick={claim}>
              mint
            </div>
          ) : (
            <div className="mintbtn" onClick={connectMeta}>
              connect
            </div>
          )}
        </div>
      </div>
      {mintingProgress && (
        <div className="popup monbi1">
          Your NFT has been succesfully minted and you can view it at:
          <a href={"https://opensea.com/" + useraddress} className="line">
            www.opensea.com/{useraddress}
          </a>
        </div>
      )}
    </div>
  );
}

export default Mint;
