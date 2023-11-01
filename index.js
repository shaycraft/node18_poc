import { default as AWS } from "aws-sdk";

export async function handler() {
  console.debug("wazzup!!!");
  // console.debug(AWS.default.DynamoDB);
  const client = new AWS.DynamoDB();

  try {
    console.debug(Object.keys(client));
    const results = client.getItem(
      {
        TableName: "Attachments",
        Key: {
          REC_ID: { S: "01H59D67PV21TDNK9Z5K5ACZJ3" },
        },
      },
      function (err, data) {
        if (err) {
          console.debug("WE HAD ERRRO!!!!");
          console.debug(err);
        } else {
          console.debug("Data is... ");
          console.debug(data);
        }
      },
    );

    // console.debug(results);
    // console.debug(Object.keys(results.response));
    // console.debug(results.response);
    // console.debug(results);
    console.debug(AWS.DynamoDB.Converter.marshall({ foo: "bar" }));
    // console.debug(Object.keys(AWS));
  } catch (err) {
    console.debug("ERROR!!!!");
    console.debug(err);
  }
}

// module.exports.handler();
handler();
