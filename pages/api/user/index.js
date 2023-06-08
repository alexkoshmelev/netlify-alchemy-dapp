import { stakingDataUrl } from "../../../lib/constants";

// req = HTTP incoming message, res = HTTP server response
export default function handler(req, res) {

    const walletAddress = req.body.wallet_address;

    fetch(stakingDataUrl, {
        method: "POST",
        body: JSON.stringify({
            wallet_address: walletAddress,
        }),
        headers: {
            "content-type": "application/json",
        }
    })
    .then((res) => res.json())
    .then((data) => {

        if (data.statusCode) {
            res.status(404).json("Not Found");
        }
        else {
            res.status(200).json(data);
        }
    })
    .catch((e) => {
        res.status(404).json("Invalid request");
    })

}