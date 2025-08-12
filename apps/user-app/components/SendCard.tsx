"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [txnStatus, setTxnStatus] = useState("")

    return <div className="h-[90vh]">
        <Center>
            {/* <p className={`text-center mt-2 ${
                txnStatus === "Transaction successful" ? "text-green-600" : "text-red-600"}`}>
                {txnStatus}
            </p> */}
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value)
                    }} />
                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => {
                            try{
                                await p2pTransfer(number,Number(amount) * 100)
                                setTxnStatus("Transaction successful")
                            }catch(error){
                                setTxnStatus("Transaction failed.")
                            }
                        }}>Send</Button>
                        
                    </div>
                </div>
            </Card>
        </Center>
    </div>
}