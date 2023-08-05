# Deploying a simple API using an AWS EC2 instance

I initially followed a video from JonathanSanchez on YouTube.
https://www.youtube.com/watch?v=T-Pum2TraX4

## Pre-requisites

- An AWS account 
It's good practice to ONLY use your root user for billing purposes. 
So creating an IAM User that has EC2 permissions will be necessary, but since this is just for practicing, an IAM User with full admin privilleges works perfectly.

- A SSH Client

If you have a Mac or Linux system, you can use your terminal to SSH. However, Windows users have to work a little more.

### FOR WINDOWS USERS:

- Git Bash (this is what I use)

If you have git bash installed, you can SSH through the Git Bash terminal.

- WSL/WSL2

In the past, I've preferred to use the WSL2 Terminal to ssh as I preferred it to WSL, out of the two.

- puTTy (More commonly used)

You can download PuTTy via this link.
https://www.putty.org/

You can also follow this video for how to use PuTTy to connect to your EC2 Instance.
https://www.youtube.com/watch?v=5gAYa6RyVt8&t=12s (this tutorial uses the up-to-date version of PuTTy which has UI differences to older versions)

## Installations
first you will need to initialise npm

```bash
npm init -y
```

Now you can install the necessary packages:

- Express
- Nodemon

```bash
npm install
```

## Step-by-Step

for a step-by-step, please follow the first YouTube link at the top of the readme.

Enjoy!
