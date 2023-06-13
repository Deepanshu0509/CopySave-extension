// 'use strict';

// // With background scripts you can communicate with popup
// // and contentScript files.
// // For more information on background script,
// // See https://developer.chrome.com/extensions/background_pages

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === 'GREETINGS') {
//     const message: string = `Hi ${
//       sender.tab ? 'Con' : 'Pop'
//     }, my name is Bac. I am from Background. It's great to hear from you.`;

//     // Log message coming from the `request` parameter
//     console.log(request.payload.message);
//     // Send a response message
//     sendResponse({
//       message,
//     });
//   }
// });


function getStorageData(keys: string[]): Promise<{ [key: string]: any }> {
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, (result) => {
      resolve(result);
    });
  });
}

chrome.runtime.onStartup.addListener(async () => {
  const StorageData : any = await getStorageData(['copiedContent']);
  const copiedContent = StorageData.copiedContent;

  if(copiedContent){
    alert(`Copied Content : ${copiedContent}`);
  }
});

