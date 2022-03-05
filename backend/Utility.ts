import { doc, setDoc } from 'firebase/firestore/lite';
import { v4 } from 'uuid'
import { db } from './firebaseConfig';

const createChannelsFirebase = async(serverId: string): Promise<void> => {
  const id = v4()
  try {
    await setDoc(doc(db, `servers/${serverId}/textChannels/`, 'no category'), { 
      categoryID: id
    });
    // for (const item of templates[serverTemplate].textChannels) {
    //   await setDoc(doc(db, `servers/${docID}/textChannels/`, `${item.category}`), {
    //     categoryID: `${uuidv4()}`,
    //   });
    //   for (const channelItem of item.channels) {
    //     await setDoc(doc(db, `servers/${docID}/textChannels/${item.category}/channels/`, `${channelItem}`), {
    //       messages: [],
    //       archived: [],
    //       userPermissions: {},
    //       channelID: `${uuidv4()}`,
    //       channelName: `${channelItem}`,
    //       category: item.category,
    //     });
    //   }
    // }
  } catch(error) { if (error instanceof Error) return console.log(error) };
}

// const uploadServerProfile = async(server: serverProps, serverID: string): Promise<void> => {
//   try {
//     const storageRef = ref(storage, `serverAssets/${serverID}/serverProfile.png`);
//     await uploadBytes(storageRef, server.serverProfile).then(() => {
//       fetchServerImage(serverID).then((res) => {
//         const serverRef = setDoc(doc(db, 'servers', serverID), { serverProfile: res }, { merge: true });
//       })
//     })
//   } catch(error) { if(error instanceof Error) return console.log(error) };
// }

// const addServerToUserServerList = async(userID: string, serverID: string) => {
//   const userRef = doc(db, 'users', userID);
//   await updateDoc(userRef, { serverList: arrayUnion(`${serverID}`) });
// }

export { createChannelsFirebase,  }