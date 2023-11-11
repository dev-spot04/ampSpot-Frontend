import { ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import { Form, Formik } from "formik";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { assets } from "../../../../assets";
import InputField from "../../../../components/forms/InputField";

import "@sendbird/uikit-react/dist/index.css";

import SendbirdChat from "@sendbird/chat";
import { GroupChannelModule } from "@sendbird/chat/groupChannel";
import { toast } from "react-toastify";

const APP_ID = process.env.SEND_BIRD_CHAT_API_KEY;

const sb = SendbirdChat.init({
  appId: APP_ID,
  modules: [new GroupChannelModule()],
});

const UserChat = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inviteEmail = searchParams.get("inviteEmail");

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const createChannel = async (email) => {
    const params = {
      invitedUserIds: [email, inviteEmail],
      operatorUserIds: [email, inviteEmail],
      isDistinct: true,
    };
    try {
      const channel = await sb.groupChannel.createChannel(params);
      channel.sendUserMessage({ message: "Hi" });
      return channel;
    } catch (err) {
      throw err;
    }
  };

  const validationSchema = yup.object({
    email: yup.string().email().required("Enter Your Email"),
    name: yup.string().required("Enter Your Name"),
    message: yup.string().required("Enter a message"),
  });

  const onSubmitHandler = (values) => {
    if (!inviteEmail) {
      return toast.error("Invalid invite");
    }

    sb.connect(values.email)
      .then((res) => {
        sb.updateCurrentUserInfo({ nickname: values.name });
        createChannel(values.email)
          .then((res) => {
            console.log(res);
            navigate(`/chat/conversations?userId=${values.email}`);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="bg-background min-h-screen grid md:grid-cols-2 grid-cols-1 text-white">
      {/* {isLoading && <h1 className="text-7xl text-white">Loading</h1>} */}
      <section className="flex flex-col gap-10 pb-10 min-h-screen">
        <div className="w-[90%] md:w-[70%] mx-auto">
          <div className="flex justify-between items-center my-3">
            <p className="text-xl font-bold 2xl:text-3xl">AMP Spot</p>
          </div>
          {inviteEmail && (
            <>
              <div className="flex flex-col gap-3 lg:max-w-[85%] justify-center w-full mt-8">
                <h1 className="font-bold text-xl 2xl:text-[30px] my-[5%] 2xl:my-[10%]">
                  Chat with DJ now!
                </h1>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmitHandler}
                >
                  {(props) => {
                    return (
                      <Form className="flex flex-col text-[#C8D6EF] 2xl:gap-4 gap-2">
                        <InputField
                          label={"Name"}
                          type="text"
                          uni="name"
                          placeholder="Enter Your Name"
                          required={true}
                          {...props}
                        />
                        <InputField
                          label={"Email"}
                          type="text"
                          uni="email"
                          placeholder="Enter Your Email"
                          required={true}
                          {...props}
                        />
                        <InputField
                          label={"Message"}
                          type="text"
                          uni="message"
                          placeholder="Enter message to send"
                          required={true}
                          {...props}
                        />
                        <button
                          className="text-center bg-blue1 p-2 rounded hover:bg-blue1/95 2xl:h-[50px]"
                          type={"submit"}
                        >
                          Start Chat
                        </button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>

              <h4 className="text-center mt-3">Or</h4>
            </>
          )}

          <div className="flex flex-col gap-3 lg:max-w-[85%] justify-center w-full mt-8">
            <h3 className="font-bold text-xl 2xl:text-[30px]">
              Go to your conversations
            </h3>
            <Formik
              initialValues={initialValues}
              validationSchema={yup.object({
                email: yup.string().email().required("Enter Your Email"),
              })}
              onSubmit={(values) => {
                navigate(`/chat/conversations?userId=${values.email}`);
              }}
            >
              {(props) => {
                return (
                  <Form className="flex flex-col text-[#C8D6EF] 2xl:gap-4 gap-2">
                    <InputField
                      label={"Email"}
                      type="text"
                      uni="email"
                      placeholder="Enter Your Email"
                      required={true}
                      {...props}
                    />
                    <button
                      className="text-center bg-blue1 p-2 rounded hover:bg-blue1/95 2xl:h-[50px] mt-1"
                      type={"submit"}
                    >
                      Start Chat
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
      <section
        className="hidden md:flex min-h-full overflow-hidden"
        style={{
          background: `url(${assets.auth.backgrounds.bg_6})no-repeat center center/cover`,
        }}
      >
        <div className="w-[79%] self-end mx-auto my-8 rounded p-[7%] backdrop-blur-xl flex flex-col gap-10 2xl:gap-14">
          <p className="text-[20px] 2xl:text-[30px]">
            "Music has been used for therapeutic purposes in a variety of
            settings"
          </p>
          <div className="flex justify-between items-center">
            <div className="2xl:gap-3 flex flex-col">
              <p className="font-bold text-sm 2xl:text-[24px]">Adrin Laue</p>
              <p className="text-sm mt-1 2xl:text-[20px]">Founder Member</p>
            </div>
            <div>
              <div className="relative top-[-3px]">
                <Star sx={{ fontSize: "1.4rem" }} />
                <Star sx={{ fontSize: "1.4rem" }} />
                <Star sx={{ fontSize: "1.4rem" }} />
                <Star sx={{ fontSize: "1.4rem" }} />
              </div>
              <div className="flex justify-between items-center my-1">
                <ChevronLeft className="border rounded-full scale-75 2xl:scale-100" />
                <ChevronRight className="border rounded-full scale-75 2xl:scale-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserChat;
