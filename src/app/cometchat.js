import { CometChat } from "@cometchat-pro/chat";

const InitializeApp = async () => {
  try {
    const appId = "24230352cc3a1875";
    const region = "us";
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion(region)
      .autoEstablishSocketConnection(true)
      .build();
    await CometChat.init(appId, appSetting);
    console.log("Initialization completed successfully");
  } catch (error) {
    console.log("Initialization failed with error:", error);
  }
};

InitializeApp();
