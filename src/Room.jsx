import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useLocation } from "react-router-dom";

const Room = () => {
  const path = useLocation().pathname.split("/");
  const roomId = path[path.length - 1];
  console.log(roomId);
  const myMeeting = async (element) => {
    const appID = 2055869027;
    const serverSecret = "1de668bf1112df7340fd5fb4a3bae82b";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "RitikTest"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    console.log({ zp });

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Personal link",
          //   url: `http://localhost:3001/room/${roomId}`,
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            roomId,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  };

  return <div ref={myMeeting}></div>;
};

export default Room;
