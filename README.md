# simple-eag
Chrome Extension that lets you generate a random email alias with any email domain you wish.

## Demonstation

(Will Be Updated)

## Installation

This chrome extension has not been approved in any way by Google. Please use it at your own risk. 

Before installing the extension, you need to change the domain of the email, which has been set to "changeyourdomain.com" by default. To do so, open the "bg.js" using any text editor and edit the domain on line 12.

Once that is done, in order to install it, you need to activate the Developer mode on Google Chrome, which allows you to load local extensions. Here is a short tutorial made by Google:

https://developer.chrome.com/extensions/getstarted#manifest

## How to use the extension

Because the extension is very simple by nature, I have not implemented any filters whatsoever. To generate a random email, all you have to do is select the text box you want the email to be generated in, right-click, and select the option "Generate Email". This should automatically place the email inside the text box. 

## Known issues

Please note that some websites need for the textbox to be updated in order to read the email in the textbox that you have generated. Deleting the last character of the email and adding it back should automatically resolve this issue.
