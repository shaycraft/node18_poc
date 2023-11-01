import * as AWS from "aws-sdk";

exports.handler = async () => {
  console.debug("wazzup!!!");
  const client = new AWS.DynamoDB.DocumentClient();

  try {
    const results = await client.get({
      TableName: "Attachments",
      Key: {
        REC_ID: "01H59D67PV21TDNK9Z5K5ACZJ3",
      },
    });

    console.debug(results.json());
  } catch (err) {
    console.debug("ERROR!!!!");
    console.debug(err);
  }
};

// module.exports.handler();
