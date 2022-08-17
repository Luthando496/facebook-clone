const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const { OAuth2 } = google;
const oath_link = "https://developers.google.com/oauthplayground";

const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH, MAILING_ACCESS } =
  process.env;

const auth = new OAuth2(MAILING_ID, MAILING_REFRESH, MAILING_SECRET, oath_link);

exports.sendVerificationEmail = async (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });

  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAUTH2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "facebook clone2",
    html: `<a href="${url}">${url}</a>`,
  };

  await stmp.sendMail(mailOptions);
};
