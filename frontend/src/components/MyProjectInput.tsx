import { BigNumberish, ethers } from "ethers";
import React, { useState } from "react";
import style from "../styles/MyProjectInput.module.css";
import {
  useAccount,
  useContract,
  usePrepareContractWrite,
  useContractWrite,
  useContractReads,
  useContractRead,
  useSigner,
} from "wagmi";
import {
  GOV_CONTRACT_ADDRESS,
  GOV_ABI,
  NFT_CONTRACT_ADDRESS,
  NFT_ABI,
  PRO_CONTRACT_ADDRESS,
  PRO_ABI,
} from "../constants/contracts";

const diplomaURI =
  "ipfs://bafkreihqfo2yd4o7fjveg5bptjgaobwqdd7nk7i7l7a6xmm5s25lrzabjm";

export default function MyProjectInput() {
  //   const [projectData, setProjectData] = useState([]);
  const [formInput, setFormInput] = useState("");
  const { address, isConnected, isDisconnected } = useAccount();

  const { data: signer, isError, isLoading } = useSigner();

  const nftC = useContract({
    address: NFT_CONTRACT_ADDRESS,
    abi: NFT_ABI,
    signerOrProvider: signer,
  });

  const govC = useContract({
    address: GOV_CONTRACT_ADDRESS,
    abi: GOV_ABI,
    signerOrProvider: signer,
  });

  const propC = useContract({
    address: PRO_CONTRACT_ADDRESS,
    abi: PRO_ABI,
    signerOrProvider: signer,
  });

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (nftC && govC && propC) {
      let projectURL = formInput;
      let transferCalldata = nftC.interface.encodeFunctionData(`safeMint`, [
        address,
        diplomaURI,
      ]);

      let proposeTx = await govC.propose(
        [nftC.address],
        [0],
        [transferCalldata],
        projectURL
      );

        let receiptProposeTx = await proposeTx.wait();
        let propId = receiptProposeTx.events?.[0]?.args?.proposalId;
        let proposer = receiptProposeTx.events?.[0]?.args?.proposer;
        let description = receiptProposeTx.events?.[0]?.args?.description;
        console.log(`Proposal ID is: ${propId}`);
        console.log(`Proposer is: ${proposer}`);
        console.log(`Description is: ${description}`);

        let storePropTx = await propC.addProposal(
          propId,
          description,
          proposer
        );
        let receiptStorePropTx = await storePropTx.wait();
        console.log('receiptStorePropTx')
        console.log(receiptStorePropTx)
    }

    // submit proposal;
    alert(`Proposal with IPFS url: ${formInput} has been submitted successfully.`);
    setFormInput("");
  };

  return (
    <form className={style.project} onSubmit={submitHandler}>
      <div className="form-control w-full mt-10">
        <label className="label">
          <span className="label-text">Submit Your Project</span>
        </label>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter IPFS URL . . ."
            className="input input-bordered w-full inline"
            value={formInput}
            onChange={(event) => setFormInput(event.target.value)}
            required
          />
          {isConnected && (
            <button className="btn btn-outline btn-primary inline ml-2 px-8">
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
