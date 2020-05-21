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
1. This platform has been tested on Unix (namely, Ubuntu 18.04.2 LTS), and may work on other systems.

## Getting started

Please note: `yarn` and `npm` are interchangeable. 
We will be using `yarn` below, but please replace with `npm run` where necessary.

1. Fork and clone this project. [See guide](./documentation/fork-clone.md)
1. Run `yarn install`
1. Run `npm link` to gain access to the `bean` command. Verify your installation by running `bean --help`
1. Run `bean --help` to see available `bean` commands

## FAQ

### The `bean` command doesn't work for me.

You can try the following steps:

1. Make sure you have run `npm link`.
1. Try running `npm unlink` then `npm link`.
1. Try opening a new terminal, then running `bean --help`.