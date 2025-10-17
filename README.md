# Always-On for Aternos


## Overview

**Always-On** is a Node.js bot designed to keep your Aternos Minecraft server active by simulating player presence. It achieves this by maintaining a persistent connection to the server, preventing it from shutting down due to inactivity.

## Features

* **Persistent Player Presence**: Keeps the server active by simulating a player in-game.
* **Automatic Reconnection**: Reconnects the bot if disconnected or kicked.
* **Health & Hunger Monitoring**: Displays the bot's health and hunger status in the console.
* **Customizable Configuration**: Easily configure bot settings via a JSON configuration file.

## Installation

### Prerequisites

* Node.js (v16.0.0 or higher)
* npm (v8.0.0 or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/wtfst4k/always-on.git
   cd always-on
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the bot:

   * Rename `config.example.json` to `config.json`.
   * Edit `config.json` with your Aternos server details:

     ```json
     {
       "user": "example_user",
       "host": "https://example.host.com",
       "port": 25565,
       "version": false,
       "auth": false
     }
     ```

4. Run the bot:

   ```bash
   node index.cjs
   ```

## Usage

Once running, the bot will:

* Log in to the server.
* Display health and hunger status in the console.
* Reconnect automatically if disconnected or kicked.

## License

This project is licensed under the MIT License - see the [LICENSE]([https://github.com/](https://github.com/wtfst4k/always-on/blob/main/LICENSE)) file for details.

(Yes, this README is AI)
