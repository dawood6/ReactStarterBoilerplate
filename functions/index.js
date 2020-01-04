const functions = require('firebase-functions');
const express = require('express');
const request = require('request');

const app = express();

app.get('*', (req, res) => {
  const botUserAgents = [
    'baiduspider',
    'bingbot',
    'embedly',
    'facebookexternalhit',
    'linkedinbot',
    'outbrain',
    'pinterest',
    'quora link preview',
    'rogerbot',
    'showyoubot',
    'slackbot',
    'TelegramBot',
    'twitterbot',
    'vkShare',
    'W3C_Validator',
    'whatsapp',
  ];

  const rendertronUrl = process.env.RENDERTRON_URL;
  const targetUrl = process.env.SITE_URL + req.originalUrl;

  if (new RegExp(botUserAgents.join('|'), 'i').test(req.headers['user-agent'])) {
    request(`${rendertronUrl}/render/${targetUrl}`, (error, response, body) => {
      res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
      res.set('Vary', 'User-Agent');

      res.send(String(body));
    });
  } else {
    request(process.env.SITE_URL, (error, response, body) => {
      res.send(String(body));
    });
  }
});

exports.app = functions.https.onRequest(app);
