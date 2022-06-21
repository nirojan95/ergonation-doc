---
sidebar_position: 1
---

# Event Framework

## Event Framework for Decentralized Identity Verification

The objective of the event framework is to prevent bots and people from doing multiple ΣIDs. Bots could be stopped by a simple captcha, but that does not stop people from repeating the process. The key to ensure that one person can only verify one ΣID is to do the captcha simultaneously in an event. 

In ErgoNation, that captcha is a game that takes for example 10 minutes. The game has to require human attention for the whole time to make sure that people don’t play on two machines simultaneously. It does not have to be difficult or cool. Instead, it should be accessible and robust for different devices and settings. 

After successful completion of the game, people will get a verification code. The code is a small amount of ERG that is sent to the to a predefined address. The ERG amount is calculated from the ΣID address for each participant individually. This prevents sending the same code from multiple addresses. The transaction of sending the code has to be mined within 10 minutes from the game end. This way, no one has time to verify two  ΣIDs in an event. 

The event date, instructions, event start, verification codes, and event end, are all announced on-chain. This way people could verify their IDs by only observing the ErgoNation address on-chain. Also, the full history of ΣID events is verifiable and unchangeable on-chain.

### In practice, the event progresses as follows:

We use 20.00 as an example time, but it will rotate to make participation possible around the globe. 

#### Two weeks before event:
Event organizer: Announce the event date, time and requirements for participation. 
Event participant: New users prepare a new ΣID address by creating a fresh Ergo wallet and mixing 1 ERG into it. 

#### One week before the event:
Event organizer: Mint and distribute event flyers.

#### Event start 20.00
Event organizer: Announce specific game instructions in socials.
Event participant: Read the instructions carefully to be fully prepared for game start.

#### Game start 20.10
Event organizer: Announce and mint “start NFT”. It contains the link to the game.
Event participant: Start the game. 

#### Game ends 20.20
Event participant: Send verification transaction.

#### Event ends 20.30
Event organizer: Announce and mint “end NFT”. It contains information on how the verification code is calculated from the ΣID address.

**After the event**, the data is available on-chain for compiling a list of ΣIDs. Correct verification codes that are mined before 20.30 award a mark of successful event participation. Over time, those markers reveal addresses that belong to unique active community members.

The decentralization is ensured by rotating the team that organizes the event. A team member knows the game and verification code calculation beforehand, which would allow him to set up multiple ΣIDs. However, in the next event he would not be able to verify them again. Therefore, for example 4 successful events in the last 7 months would give certainty that a unique person created the ΣID.