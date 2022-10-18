# About

This service always listen to RabbitMQ server as Consumer to generate JSON file then send it to user via Email

## How to run this project locally

- rename `.env.example` to `.env`
- change all value in `.env` with yours
- npm install
- npm run start-dev

## What stacks we are using

- NodeJS
- RabbitMQ
- PostgresQL
- MailTrap (to Fix [Error: Data command failed: 550 5.7.0 Requested action not taken: too many emails per second](https://dorelljames.com/blog/solving-mailtraps-error-550-too-many-emails-per-second/))
