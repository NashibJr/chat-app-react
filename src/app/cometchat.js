import { CometChat } from "@cometchat-pro/chat";

const InitializeApp = async () => {
  try {
    const appId = "2423192383bc6674";
    const region = "eu";
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
