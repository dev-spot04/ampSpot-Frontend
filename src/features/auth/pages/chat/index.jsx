import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import { useSelector } from "react-redux";

import SendbirdChat from "@sendbird/chat";
import { GroupChannelModule } from "@sendbird/chat/groupChannel";
import { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const APP_ID = process.env.SEND_BIRD_CHAT_API_KEY;

const sb = SendbirdChat.init({
  appId: APP_ID,
  modules: [new GroupChannelModule()],
});

const Chat = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const { user, token } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user && !userId) return;

    sb.connect(user?.email || userId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, [user, token, userId]);

  if (!user && !userId) return null;

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        // width: "100vw",
      }}
    >
      <div
        className="flex justify-between items-center "
        style={{
          height: "7vh",
          padding: "10px",
        }}
      >
        <h1 className="font-bold text-xl 2xl:text-[30px]">Conversations</h1>
        {user?.role === "dj" && (
          <CopyToClipboard
            text={`${process.env.REACT_APP_URL}/chat/start?inviteEmail=${user?.email}`}
            onCopy={() => toast.success("Invite link copied!")}
          >
            <button
              className="text-center p-2 rounded bg-blue1 my-3 mt-5 2xl:h-[50px] white"
              type="submit"
            >
              Invite Link
            </button>
          </CopyToClipboard>
        )}
      </div>
      <div
        className="App"
        style={{
          height: "93vh",
        }}
      >
        <SendbirdApp
          appId={APP_ID}
          userId={user?.email || userId}
          accessToken={token}
          nickname={user?.firstName}
          allowProfileEdit={true}
          showSearchIcon={true}
          isReactionEnabled={true}
        />
      </div>
    </div>
  );
};

export default Chat;
