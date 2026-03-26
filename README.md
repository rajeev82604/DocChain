About :

We're transforming medical file, legal file and other important documents storage by solving security, privacy, and accessibility issues through a decentralized approach. Using blockchain, we prioritize user control, ensuring a secure and transparent experience for both patients and healthcare providers.

Requirements : 
1. Metamask must be installed in your browser to use this application.
2. You Mush have some sepolia faucet to upload documents (you can get them for free from the below links : )
    https://www.infura.io/faucet/sepolia
    https://sepoliafaucet.com/
    https://sepolia-faucet.pk910.de/
3. Node must be installed
4. Hardhat must be installed

# DocChain

DocChain is a simple dApp where users can upload documents to IPFS and store the reference (hash) on the Ethereum blockchain.

The goal of this project is to understand how blockchain + decentralized storage can be used together for document verification.

---

## Tech Stack

* React (frontend)
* Node.js + Express (backend)
* Hardhat + Solidity (smart contracts)
* IPFS (via Pinata)
* MetaMask (wallet)

---

## How to run this project

### 1. Clone the repo

```bash
git clone https://github.com/rajeev82604/DocChain.git
cd DocChain
```

---

### 2. Create `.env` file

In the root folder:

```bash
touch .env
```

Add this:

```env
INFURA_API_KEY=your_infura_key
PRIVATE_KEY=your_wallet_private_key
PINATA_API_KEY=your_pinata_api_key
PINATA_SECRET=your_pinata_secret
```

---

### 3. Get required keys

**Infura**

* Go to Infura website
* Create a project
* Copy Project ID → use as `INFURA_API_KEY`

**Pinata**

* Create account on Pinata
* Generate API key
* Copy API key + secret

**MetaMask**

* Create a wallet
* Export private key
* Paste into `.env`

⚠️ Don’t commit `.env` file

---

### 4. Install dependencies

Backend (root folder):

```bash
npm install express multer axios form-data dotenv cors
```

Frontend:

```bash
cd client
npm install
cd ..
```

---

### 5. Compile contract

```bash
npx hardhat compile
```

---

### 6. Copy ABI to frontend

Copy:

```
artifacts/contracts/Upload.sol/Upload.json
```

Paste into:

```
client/src/Upload.json
```

Then update import in `App.js`:

```js
import Upload from "./Upload.json";
```

---

### 7. Start backend

```bash
node server.js
```

---

### 8. Start frontend

```bash
cd client
npm start
```

---

## How it works

* User selects a file
* File goes to backend
* Backend uploads to IPFS (Pinata)
* IPFS returns a hash
* Hash is stored in smart contract

---

## Notes

* API keys are handled in backend (not exposed to frontend)
* `.env` is ignored using `.gitignore`
* This project is for learning/demo purposes

---

## Common issues

**Upload.json not found**
→ Run `npx hardhat compile` again and copy file

**Upload not working**
→ Make sure backend is running on port 5000

---

