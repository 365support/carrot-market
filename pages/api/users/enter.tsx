import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

// next js 에서 api 만들고 싶으면 export default 해야 함
async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  console.log(req.body.email); // 얘로 받으려면 프론트에서 header 설정 해야 가능
  // const onValid = (data: EnterForm) => {
  //   console.log(data);
  //   fetch("/api/users/enter", {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  // if (req.method !== "POST") {
  //   res.status(401).end();
  // }

  console.log(req.body);
  // res.json({ ok: true });
  res.status(200).end();
}

export default withHandler("POST", handler);
