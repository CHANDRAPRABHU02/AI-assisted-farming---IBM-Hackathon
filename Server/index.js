const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log("Server is running  at port ", port);
});

app.post("/cors", cors(), (req, res) => {
  console.log(req.body);
  const API_KEY = "B1mo3gmGszh2wXROK6WnFupr8N8bSqXpkm1nJoVhMR_5";
  const data = {
    apikey: API_KEY,
    grant_type: "urn:ibm:params:oauth:grant-type:apikey",
  };
  const form = new URLSearchParams();
  form.append("apikey", API_KEY);
  form.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data: form,
    url: "https://iam.cloud.ibm.com/identity/token",
  };
  // axios
  //   .post("https://iam.cloud.ibm.com/identity/token", , {
  //   })
  axios(options)
    .then((responseIAM) => {
      console.log("Successfully fetched the IAM Token");
      const IAM_Token = responseIAM.data.access_token;
      console.log(IAM_Token);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  res.send("HI");
});
