import React, { useState } from "react";
import style from "../styles/MyProjectInput.module.css";
import { ethers } from "ethers";
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
import styles from "../styles/MyProjectTable.module.css";

const exampleData = [
  { id: 1, url: "https://ipfs.nftstorage.link/", student: "Passed" },
  { id: 2, url: "https://ipfs.nftstorage.link/", student: "" },
  { id: 3, url: "https://ipfs.nftstorage.link/", student: "" },
  { id: 4, url: "https://ipfs.nftstorage.link/", student: "" },
];

export default function CohortProjectTable() {
  const [tableData, setTableData] = useState(exampleData);
  const { data: signer, isError, isLoading } = useSigner();

  const propC = useContract({
    address: PRO_CONTRACT_ADDRESS,
    abi: PRO_ABI,
    signerOrProvider: signer,
  });

  const updateHandler = async () => {
    if (propC) {
      let data = await propC.getAllProposals();
      // console.log(data);
      // let dataTxReceipt = data.wait();
      // console.log(dataTxReceipt)
      let object = data.map((item: any) => {
        return {
          id: item[0].toString(),
          url: item[1],
          student: item[2],
        };
      });
      console.log(object)
      setTableData(object)
    }
  };

  return (
    <div className={styles.projectTable}>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>IPFS URL</th>
            <th>Student</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((proposal) => {
            return (
              <tr key={proposal.id} className="hover">
                <th>{proposal.id}</th>
                <td>{proposal.url}</td>
                <td>{proposal.student}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center">
        <button
          className="btn btn-outline btn-accent px-8 mt-5"
          onClick={updateHandler}
        >
          Update Table
        </button>
      </div>
    </div>
  );
}
