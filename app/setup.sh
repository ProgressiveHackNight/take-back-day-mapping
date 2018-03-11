#!/bin/bash
brew_version=`which brew`
if [ ! $brew_version ]; then
  echo "install brew"
  ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
fi
brew doctor
brew update
brew upgrade
echo 'brew is ready'

echo 'Installing app brew dependencies'
brew tap Homebrew/bundle
brew bundle

echo 'Installing nvm and node version'
npm install -g n
n stable

echo 'Installing node dependencies'
yarn install
