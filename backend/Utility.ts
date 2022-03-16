import { arrayUnion, doc, setDoc, updateDoc } from 'firebase/firestore';
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

const createCategory = async(serverId: string, channelType: string, categoryName: string):  Promise<void> => {
  await setDoc(
    doc(db, `server-collection/${serverId}/${channelType}/`, categoryName), { categoryId: v4() })
}
const createChannel = async(serverId: string, channelType: string, categoryName: string, channelName: string): Promise<void> => {
  await setDoc(
    doc(db, `server-collection/${serverId}/${channelType}/${categoryName}/channels/`, channelName), { categoryId: v4() })
}
// const createMessage = async(
//   serverId: string, 
//   channelType: string, 
//   categoryName: string, 
//   channelName: string,
//   userId: string,
//   message: string,
//   ): Promise<void> => {
//   await setDoc(
//     doc(db,`server-collection/${serverId}/${channelType}/${categoryName}/channels/${channelName}`,  )
//   )
// }

const addServerToUser = async(userUid: string, serverId: string) => {
  await updateDoc(
    doc(db, 'user-collection', userUid), { serverList: arrayUnion(serverId) }
  )
}

export { createChannelsFirebase, createCategory, createChannel }