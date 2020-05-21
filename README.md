# About the Mintbean Platform

Welcome to the Mintbean Platform. This project is what appears at [Mintbean.io](https://mintbean.io).

## About Mintbean

Mintbean is a software developer talent incubator. We work to accelerate the careers, skillsets, and professional networks of software developers globally.

## Project Goals

This project exists in order to fulfill the following goals:

1. To help developers market themselves.
3. To help organize the Mintbean community.

## How to contribute :bowtie:

Please see [the contribution guide](documentation/contributing.md) to see how to contribute to this project!

## How to get in touch

Please see the [Contact Info](documentation/contact.md)

# Development Workflow

## Prerequisites

1. [Docker](https://www.docker.com/)
1. [Docker Compose](https://docs.docker.com/compose/)
1. [NodeJS](https://nodejs.org/en/)
1. Ubuntu 18.04.2 LTS is the only system this has currently been tested on. It may work on other versions of Ubuntu and other Unix platforms, as well as Mac OS. It probably WON'T work on Windows without some modifications.

## Getting started

Please note: `yarn` and `npm` are interchangeable. 
We will be using `yarn` below, but please replace with `npm run` where necessary.

1. Add the following line to `/etc/hosts`. (NOTE: you will be cut-off from accessing the real `mintbean.io` until you have disabled this line, either by #commenting it out or removing it)
```
127.0.0.1 mintbean.io auth.mintbean.io
```
2. Run `./scripts/create-development-config.sh`
3. Run `yarn dev.build`
4. Run `yarn dev.start`


Visit https://mintbean.io for the application, and https://auth.mintbean.io for the auth console.

<!--
1. Fork and clone this project. [See guide](./documentation/fork-clone.md)
1. Run `yarn install`
1. Run `npm link` to gain access to the `bean` command. Verify your installation by running `bean --help`
1. Run `bean --help` to see available `bean` commands
-->

### Setting up `/opt/mintbean`

All configuration files and data live inside the `/opt/mintbean` folder. 
This is so that configurations are always separate from working code, which makes server management easier.

#### Creating the folder

You can very easily create the folder, and populate it with default configs for local development, by running the `scripts/create-development-config.sh` script.

#### Folder Structure

Here is the folder structure:

| folder | description | used by |
| ------- | ------- | ------ |
| /opt/mintbean | Root of the config folder. | * |
| /opt/mintbean/config | All configurations live here. This is managed by the developer. | * |
| /opt/mintbean/config/self-signed-ssl | Self-signed certs for development go here. `NOTE`: production NGINX certs go in `/etc/letsencrypt`. | nginx during development |
| /opt/mintbean/data | Data stored by the application lives here. | * |

## FAQ

<!--
### The `bean` command doesn't work for me.

You can try the following steps:

1. Make sure you have run `npm link`.
1. Try running `npm unlink` then `npm link`.
1. Try opening a new terminal, then running `bean --help`.
-->

### When running Mintbean locally, I get security warnings from my browser.

This is probably fine. These warnings are security-related and have to do with the fact that we are using self-signed SSL certificates in nginx.

To be doubly sure, first make sure that you have correctly setup `/etc/hosts`. You can safely ignore these warnings after verifying that `mintbean.io` and `auth.mintbean.io` resolve to `127.0.0.1`. 

For example:

```bash
#!/bin/bash
nslookup mintbean.io
nslookup.auth.mintbean.io
```

should return the following:

```bash
nslookup mintbean.io

## RESPONSE SHOULD BE SIMILAR TO:
# Server:         127.0.0.53
# Address:        127.0.0.53#53
# 
# Non-authoritative answer:
# Name:   mintbean.io
# Address: 127.0.0.1

nslookup auth.mintbean.io

## RESPONSE SHOULD BE SIMILAR TO:
# Server:         127.0.0.53
# Address:        127.0.0.53#53
# 
# Non-authoritative answer:
# Name:   auth.mintbean.io
# Address: 127.0.0.1
```