import { default as AWS } from "aws-sdk";

export async function handler() {
  const client = new AWS.DynamoDB();

  try {
    const results = client.getItem(
      {
        TableName: "Attachments",
        Key: AWS.DynamoDB.Converter.marshall({
          REC_ID: "01H59D67PV21TDNK9Z5K5ACZJ3",
        }),
      },
      function (err, data) {
        if (err) {
          console.debug("WE HAD ERROR!!!!");
          console.debug(err);
        } else {
          console.debug("Data is... ");
          console.debug(data);
        }
      },
    );
  } catch (err) {
    console.debug("ERROR!!!!");
    console.debug(err);
  }
}

// module.exports.handler();
handler();
